$(function () {
    $("#sendBtn").click(send_letter);
    $(".close").click(delete_msg);
});

function send_letter() {
    // $("#sendModal").modal("hide");
    // $("#hintModal").modal("show");
    // setTimeout(function(){
    // 	$("#hintModal").modal("hide");
    // }, 2000);
	$("#sendModal").modal("hide");

	var toName = $("#recipient-name").val();
	var content = $("#message-text").val();
	$.post(
		CONTEXT_PATH + "/letter/send",
		{"toName":toName, "content":content},
		function (data) {
			// console.log("%o",data);
			data = $.parseJSON(data);
			if(data.code == 0) {
				$("#hintBody").text("发送成功");
			} else {
				$("#hintBody").text(data.msg);
			}

			$("#hintModal").modal("show");
			setTimeout(function () {
				$("#hintModal").modal("hide");
				location.reload();
			}, 2000);
		}
	);
}

function delete_msg() {
    // TODO 删除数据
    $(this).parents(".media").remove();
}