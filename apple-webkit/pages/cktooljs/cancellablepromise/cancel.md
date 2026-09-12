> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/cancellablepromise/cancel](https://developer.apple.com/documentation/cktooljs/cancellablepromise/cancel)

# cancel

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Method  
**Availability:** CKTool JS 1.2.15+

Stops any work the promise is doing.

## Declaration

```
void cancel();
```

<a id="Discussion"></a>

## Discussion

When called, it throws a `CancelledError`.
