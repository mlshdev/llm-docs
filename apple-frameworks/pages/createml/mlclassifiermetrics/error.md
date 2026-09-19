> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlclassifiermetrics/error

# error

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The underlying error present when the metrics are invalid.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Handling errors

- [isValid](isvalid.md): A Boolean value indicating whether the classifier model was able to calculate metrics.
