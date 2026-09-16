> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/cancellablepromise/cancel

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
