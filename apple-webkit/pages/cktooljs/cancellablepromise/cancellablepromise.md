> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/cancellablepromise/cancellablepromise

# CancellablePromise

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Initializer  
**Availability:** CKTool JS 1.2.15+

## Declaration

```
new inner(
	Promise inner,
	Function? cancel
);
```

## Parameters

- `inner`:
- `cancel`: The optional function you can use to cancel the promise.

  A function that takes no parameters that `CancellablePromise` uses to cancel the inner promise. If you provide this function, it must eventually throw `CancelledError`.
