> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlwordtaggermetrics/isvalid

# isValid

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A Boolean value indicating whether the metrics were calculated.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

Your metrics may be invalid if you attempt to perform evaluation on data that doesn’t match the structure of your training examples.

## See Also

### Handling errors

- [error](error.md): The underlying error present when the metrics are invalid.
