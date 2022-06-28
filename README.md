# Beer-Preference-Type

## 220626 1일차

<br>

HTML, CSS로 홈페이지 대문만 만듦

<br>

![image description](./md/220626.png)

<br>

### 어려웠던 점

- 원래 좌상단에 있는 책방일지를 (주酒) 책방일지로 하고 싶었으나 body에 폰트를 집어 넣으니 해당 한자가 공백으로 나왔다.
  이를 해결하려고 한자에만 적용되는 폰트를 찾아서 쓰려 했으나 중국사이트에서 다운을 받아야 되서 찝찝해서 넘어갔다. 해결 방법은 여러 가지가 있겠지만 하드 코딩 방식으로는 하고 싶지 않고 후에 알아 보고 수정할 것 <span style='background-color:#fff5b1'><span style='color:black'>-->220628 3일차에 heigh 100vh으로 해결했다.</span></span>
- background-image를 이용해 책방일지 배경을 넣었다. 다른 컴퓨터 화면으로 보면 어떻게 변경될지가 가장 신경쓰이는 포인트.

<br>

---

<br>

## 220627 2일차

<br>

홈페이지 대문 완성 -링크 추가 <br>
JS를 이용해서 navbar 스크롤 위치에 따라 스타일 변경 적용

<br>

![image description](./md/220627.png)

<br>

### 어려웠던 점

- navbar에 position: fixed를 사용하니 navbar가 사라지는데 그 이유를 몰라 한 동안 고생했다.

- 해결법은 z-index:1 을 주는 것으로 해결. main보다 우선 순위가 떨어져서 main img 뒤에 위치해서 사라졌던 것으로 파악
