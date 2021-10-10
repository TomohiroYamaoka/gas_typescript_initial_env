// 毎週金曜日8~9時の間で自動実行される
// 対象日付 1週間前 ~ 前日(木)までの期間
import Form = GoogleAppsScript.Forms.Form;
import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;

function createForm() {
    let form: Form;
    let spreadSheet: Spreadsheet;
    let conditions: Conditions;
    const dateFrom = Moment.moment().add(-7, "days");
    const dateTo = Moment.moment().add(-1, "days");
    let formattedDate: string;
    formattedDate = `${dateFrom.format("MM/dd")}~${dateTo.format("MM/dd")}`;

    // form作成
    form = FormApp.create("【" + formattedDate + "】今週のBesthogehoge賞")
        .setTitle("【" + formattedDate + "】今週のBesthogehoge!!賞 ")
        .setDescription(
            "今週最もhogehogeだったと思うメンバーを一名投票してください。"
        )
        .addEditors([
            "hoge@gmail.com",
            "hogehoge@gmail.com"
        ])
        .setCollectEmail(true);

    form
        .addTextItem()
        .setTitle("今週最もhogehogeだったと思うメンバー")
        .setRequired(true);
    form.addTextItem().setTitle("理由");

    // 既存のspreadシートを取得する
    spreadSheet = SpreadsheetApp.openById(
        PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID")
    );

    // 作成したシートを回答先に紐付ける
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadSheet.getId());

    // slackに通知する
    conditions = {
        text:
            `今週のベストhogehoge賞の投票をお願い致します🔥\n ${form.getPublishedUrl()}`,
        title: "今週のベストhogehoge賞"
    };

    this.sendSlack(conditions);
}