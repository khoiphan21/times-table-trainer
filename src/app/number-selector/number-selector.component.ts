import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-number-selector",
  templateUrl: "./number-selector.component.html",
  styleUrls: ["./number-selector.component.scss"]
})
export class NumberSelectorComponent implements OnInit {
  tableNumber: string;

  currentNumber: string = "1";

  answer: string;

  total = 0;

  baseQuestions = Array.from(Array(9)).map((val, index) => `${index + 1}`);

  training: boolean;

  constructor() {}

  ngOnInit() {}

  train() {
    this.training = true;
    console.log(this.tableNumber);
  }

  shuffle() {
    shuffle(this.baseQuestions);
  }

  handleInput() {
    const expected = Number(this.tableNumber) * Number(this.currentNumber);
    const given = Number(this.answer);

    if (expected === given) {
      this.total++;
      this.currentNumber = this.baseQuestions[this.total % 9];
      setTimeout(() => {
        this.answer = ''
      })
    }

    if (this.total % 9 === 0) {
      shuffle(this.baseQuestions);
    }
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
