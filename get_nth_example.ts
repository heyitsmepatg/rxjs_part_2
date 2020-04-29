import { of } from "rxjs";
import { filter } from "rxjs/operators";

const results: any = [];
const takeEveryNth = function (n: any) {
  return filter((_, i) => i % n === 0);
};
of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  .pipe(takeEveryNth(3))
  .subscribe((x) => {
    results.push(x);
    console.log(results);
  });
