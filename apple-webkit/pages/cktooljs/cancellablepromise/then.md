> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cancellablepromise/then](https://developer.apple.com/documentation/cktooljs/cancellablepromise/then)

# then

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Tells `CancellablePromise` what callbacks to call on success or failure of the inner promise.

## Declaration

```
CancellablePromise then(
	Function? onrejected,
	Function? onfullfilled
);
```

## Parameters

- `onrejected`: An optional function `CancellablePromise` calls when the inner promise rejects.
- `onfullfilled`: An optional function `CancellablePromise` calls when the inner promise resolves successfully.

<a id="Discussion"></a>

## Discussion

If you provide a function for the `onrejected` parameter, `CancellablePromise` will call that function if the promise fails.

If you provide a function for the `onfulfilled` parameter, `CancellablePromise` will call that function if the promise succeeds.
