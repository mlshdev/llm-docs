> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cancellablepromise/catch](https://developer.apple.com/documentation/cktooljs/cancellablepromise/catch)

# catch

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Tells `CancellablePromise` what callback to call on failure of the inner promise.

## Declaration

```
CancellablePromise catch(
	Function? onrejected
);
```

## Parameters

- `onrejected`: An optional function `CancellablePromise` calls when the inner promise rejects.

<a id="Discussion"></a>

## Discussion

If you provide a function for the `onrejected` parameter, `CancellablePromise` calls that function if the promise fails.
