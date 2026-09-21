// 1. 맛 밸런스 카드 배경색 조정
function f01() {
    c = document.querySelector("#color01").value;
    x = document.querySelector("#target01");
    
    x.style.backgroundColor = c;
    x.innerHTML = "선택된 밸런스 컬러: " + c;
}

// 2. 컵 크기 조절
function f02(num) {
    x = document.querySelector("#target02");
    
    x.style.width = num + 'px';
    x.style.height = num + 'px';
    x.innerHTML = num + 'px';
}

// 3. 커피 커스텀 주문서 출력
function f03() {
    input31 = document.querySelector("#input31").value;
    input32 = document.querySelector("#input32").value;
    input33 = document.querySelector("#input33").value;
    resultArea = document.querySelector("#result-area");

    // 내용이 없는 경우 기본값 처리
    if (input31 === "") input31 = "고객";
    if (input32 === "") input32 = "기본 아메리카노";

    s = "🧾 <b>[주문 내역 영수증]</b><br>";
    s += "• 주문자: " + input31 + "님<br>";
    s += "• 주문 메뉴: " + input32 + "<br>";
    s += "• 수량: " + input33 + "잔<br>";
    s += "<span style='color: #00f2fe;'>✔ 주문이 정상 접수되었습니다.</span>";

    resultArea.innerHTML = s;
}

// 4. 레시피 계산표 생성 (prompt 사용)
function makeTable() {
    r = prompt("몇 잔 분량의 추출 비율을 계산할까요?");
    result = document.querySelector("#result");

    if (!r || isNaN(r)) {
        alert("숫자로 입력해주세요.");
        return;
    }

    s = "<table border='1'><tbody>";
    s += "<tr><th>잔 수</th><th>추천 원두량(g)</th><th>추출 물 양(ml)</th></tr>";

    for (let i = 1; i <= r; i++) {
        s += `<tr>
                <td>${i}잔</td>
                <td>${i * 18}g</td>
                <td>${i * 200}ml</td>
              </tr>`;
    }

    s += "</tbody></table>";
    result.innerHTML = s;
}