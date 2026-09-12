> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/service/cancel](https://developer.apple.com/documentation/mapkitjs/service/cancel)

# cancel(promise)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Cancels a request using the provided request promise.

> Use `AbortSignal` instead. Pass an `AbortSignal` to the service method’s options to cancel requests.

## Declaration

```
cancel(promise: Promise<unknown>): boolean;
```

## Parameters

- `promise`: Pass the promise returned from the service method. Passing an invalid promise or the promise of a completed request has no effect.

<a id="return-value"></a>

## Return Value

`true` if the server cancels the pending search request.

## Mentioned In

- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

Sometimes you need to cancel a request, either because a person initiates the cancellation or moves on to another activity.

The preferred way to cancel a request is to use an `AbortSignal`. Pass the `signal` property of an `AbortController` to the service method’s options, and call `abort()` on the controller when you need to cancel the request.

Alternatively, you can cancel a request by passing its returned promise to the [cancel()](cancel.md) method:

```javascript
const search = new mapkit.Search();
const promise = search.search("coffee");

// Cancel the request:
search.cancel(promise);
```
