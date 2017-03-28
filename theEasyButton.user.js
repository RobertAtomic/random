// ==UserScript==
// @name         ADP Timecard Filler Outer
// @namespace    http://deba.cl/
// @version      0.1
// @description  Give Me Convenience or Give Me Death
// @author       Robert Jordan
// @match        https://*/ezLaborManagerNet/UI4/TimeEntry/EmpTimecard.aspx*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

btnRow = $("#UI4_BDY_Content > span > div");
$('<button class="BTN_Pri" type="button" id="btnTamper">Easy</button>').appendTo(btnRow);
$("#btnTamper").css('background-color', 'red');
$("#btnTamper").css('border', 'none');
$("#btnTamper").css('color', 'white');
$("#btnTamper").css('padding', '15px 32px');
$("#btnTamper").css('text-align', 'center');
$("#btnTamper").css('text-decoration', 'none');
$("#btnTamper").css('display', 'inline-block');
$("#btnTamper").css('font-size', '16px');
$("#btnTamper").prop('title', 'Click here to autofill this timecard.');
$("#btnTamper").click(setTime);

function setTime() {
    $('#TCMGridTable > tbody').find('tr').each(function() {
        index = this.id.split('_')[1];
        if($.inArray(this.cells[3].textContent, ['Sun', 'Sat']) == -1) {
            inTimeField = $('#' + this.cells[5].firstChild.id);
            inTimeField.focus();
            $( ":text:last" ).val(index % 2 ? '1:00 PM' : '9:00 AM');
            outTimeField = $('#' + this.cells[6].firstChild.id);
            outTimeField.focus();
            $( ":text:last" ).val(index % 2 ? '6:00 PM' : '12:00 PM');
            //hoursField = $('#' + this.cells[7].firstChild.id);
            deptField = $('#' + this.cells[11].firstChild.id);
            deptField.focus();
            $( ":text:last" ).val('DEV');
            projectField = $('#' + this.cells[12].firstChild.id);
            projectField.focus();
            $( ":text:last" ).val('CONDUCTOR');
            taskField = $('#' + this.cells[13].firstChild.id);
            taskField.focus();
            $( ":text:last" ).val('Development');

            $('#btnSubmit').focus();
        }
    });
}


