import {
  Observable,
  Observer,
  of,
  timer,
  Subscription,
  from,
  throwError,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError, retry, filter } from "rxjs/operators";

const observer: Observer<any> = {
  next: (x: any) => logItem(x),
  error: (err: any) => logItem(err),
  complete: () => logItem("Observable has completed"),
};

/**
 * Compose observable using timer
 */

// const title = "RxJs Demo Part 2 - timer()";
// const timerObservable: Observable<number> = timer(2000, 1000);

// const timerSubscription: Subscription = timerObservable.subscribe(observer);

// setTimeout(() => {
//   timerSubscription.unsubscribe();
// }, 5000);

/**
 * Compose observable using of
 */
// const title = "RxJs Demo Part 2 - of()";

// const ofSingleItemsObservable: Observable<number> = of(1, 2, 3);

// const ofSingleItemsSubscription: Subscription = ofSingleItemsObservable.subscribe(
//   observer
// );

// setTimeout(() => {
//   ofSingleItemsSubscription.unsubscribe();
// }, 1);

/**
 * Compose observable using from
 */
// const title = "RxJs Demo Part 2 - from()";

// const fromSingleItemsObservable: Observable<number> = from([1, 2, 3]);

// const fromSingleItemsSubscription: Subscription = fromSingleItemsObservable.subscribe(
//   observer
// );

// setTimeout(() => {
//   fromSingleItemsSubscription.unsubscribe();
// }, 1);

/**
 * Compose observable using fromFetch (good for real use case from API, auto retry (use retry to show value))
 *  */
const title = "RxJs Demo Part 2 - fromFetch()";

// Happy Path: http://www.mocky.io/v2/5ea8bc1a2d0000d4493a40e7
// Unhappy Path: http://www.mocky.io/v2/5ea8c2702d0000634f3a40ef

// const fromFetchApiObservable: Observable<string> = fromFetch(
//   "http://www.mocky.io/v2/5ea8bc1a2d0000d4493a40e7"
// ).pipe(
//   switchMap((response: Response) => {
//     if (response.ok) {
//       return response.text();
//     } else {
//       console.log("throwing error...");
//       return throwError(response.status);
//     }
//   }),
//   retry(5),
//   catchError((err) => {
//     // Network or other error, handle appropriately
//     console.error(err);
//     return of(err);
//   })
// );

// const fromFetchSubscription: Subscription = fromFetchApiObservable.subscribe(
//   observer
// );

// setTimeout(() => {
//   fromFetchSubscription.unsubscribe();
// }, 10000);

/**
 * Util function to display observable examples
 */

function logItem(val: any) {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("errorList").appendChild(node);
  console.log(val);
}

function init(title: string) {
  const h1 = document.getElementsByTagName("h1");
  h1[0].innerText = title;
}

init(title);
