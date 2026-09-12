> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cancellablepromise/finally](https://developer.apple.com/documentation/cktooljs/cancellablepromise/finally)

# finally

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Tells `CancellablePromise` what callback to call when the inner promise either succeeds or fails.

## Declaration

```
CancellablePromise finally(
	Function? onfinally
);
```

## Parameters

- `onfinally`: An optional function `CancellablePromise` calls when the inner promise succeeds or fails.

<a id="Discussion"></a>

## Discussion

If you provide a function for the `onfinally` parameter, `CancellablePromise` calls that function after the promise succeeds or fails.
