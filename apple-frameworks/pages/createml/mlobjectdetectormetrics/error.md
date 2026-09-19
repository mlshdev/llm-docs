> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetectormetrics/error

# error

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The underlying error present when the metrics are invalid.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Handling errors

- [isValid](isvalid.md): A Boolean value indicating whether the object detector model was able to calculate metrics.
