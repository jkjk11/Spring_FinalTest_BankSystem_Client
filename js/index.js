
    function searchAllMember() {
        
        $.ajax({
            //url :서버 프로그램의 url
            url: "http://localhost:7070/bank/selectAllMember",

            //서버프로그램을 호출하는 방식
            type: "GET",
            
            //dataType: 만약 jsonp방식으로 사용할거면 반드시 jsonp
            dataType: "jsonp",
            
            //만약 jsonp방식을 이용하면 반드시 jsonp속성이 나와야 함 
            jsonp: "callback",
            
            //만약 전달할 데이터가 있으면 데이터를 넣어야함 
            //data: {}
            
            //3초만 기다릴 것임 
            timeout:3000,
            
            //성공하면 호출
            success: function (result) {
                //화면처리

                $("#memberAll").empty();

                for(var i=0; i<result.length; i++){

                    var tr=$("<tr></tr>");
                    var memberId=$("<td></td>").text(result[i].memberId);
                    var memberName=$("<td></td>").text(result[i].memberName);
                    var memberAccount=$("<td></td>").text(result[i].memberAccount);
                    var memberBalance=$("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);


                }

            },
            //실패하면 호출 
            error: function () {
                alert("서버호출 실패")
            }
        });
    }

    function searchMember() {
        if(event.keyCode==13) {

            var id = $("#memberId").val();

            $.ajax({

                url: "http://localhost:7070/bank/searchMember",
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                data: {
                    memberId: id
                },
                success: function (result) {

                    $("#memberDetail").empty();
                    for(var i=0; i<result.length; i++){

                        var tr=$("<tr></tr>");
                        var memberId=$("<td></td>").text(result[i].memberId);
                        var memberName=$("<td></td>").text(result[i].memberName);
                        var memberAccount=$("<td></td>").text(result[i].memberAccount);
                        var memberBalance=$("<td></td>").text(result[i].memberBalance);

                        tr.append(memberId);
                        tr.append(memberName);
                        tr.append(memberAccount);
                        tr.append(memberBalance);

                        $("#memberDetail").append(tr);
                    }
                },

                    error: function () {
                        alert("서버호출 실패")
                    }


            });
        }

    }

    function inputBalance() {

        var id=$("#depositMemberId").val();
        var money=$("#depositMemberBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/deposit",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                memberId: id,
                memberBalance: money
            },
            success: function (result) {
                alert("입금성공");
            },
            error: function () {
                alert("서버호출 실패");
            }

        });

    }

    function withrawBalance() {

        var id=$("#withdrawMemberId").val();
        var money=$("#withdrawMemberBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/withdraw",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                memberId: id,
                memberBalance: money
            },
            success: function (result) {
                alert("출금 성공");
            },
            error: function () {
                alert("서버호출 실패");
            }

        });
    }
    
    function transferBalance() {
        var sendMemberId=$("#sendMemberId").val();
        var receiveMemberId=$("#receiveMemberId").val();
        var transferBalance=$("#transferBalance").val();

        $.ajax({
            url: "http://localhost:7070/bank/transfer",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                sendMemberId: sendMemberId,
                receiveMemberId: receiveMemberId,
                transferBalance: transferBalance
            },
            success: function (result) {
                if(result){
                    alert("이체 성공");
                }else{
                    alert("이체 실패");
                }
            },
            error: function () {
                alert("서버호출 실패");
            }

        });
        
    }

    function checkMember() {

        var checkMemberId=$("#checkMemberId").val();

        $.ajax({
            url: "http://localhost:7070/bank/checkMember",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                checkMemberId: checkMemberId
            },
            success: function (result) {
                $("#historyDetail").empty();

                for(var i=0; i<result.length; i++){

                    var tr=$("<tr></tr>");
                    var checkId=$("<td></td>").text(result[i].checkId);
                    var kind=$("<td></td>").text(result[i].kind);
                    var checkBalance=$("<td></td>").text(result[i].checkBalance);

                    tr.append(checkId);
                    tr.append(kind);
                    tr.append(checkBalance);

                    $("#historyDetail").append(tr);


                }
            },
            error: function () {
                alert("서버호출 실패");
            }

        });

    }
