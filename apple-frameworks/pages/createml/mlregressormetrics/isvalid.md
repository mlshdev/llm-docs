> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlregressormetrics/isvalid](https://developer.apple.com/documentation/createml/mlregressormetrics/isvalid)

# isValid

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value indicating whether the regressor model was able to calculate metrics.

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
