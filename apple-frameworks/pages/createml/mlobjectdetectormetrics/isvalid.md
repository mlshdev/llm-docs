> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetectormetrics/isvalid](https://developer.apple.com/documentation/createml/mlobjectdetectormetrics/isvalid)

# isValid

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether the object detector model was able to calculate metrics.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

Your metrics may be invalid if you attempt to perform evaluation on images with annotations that don’t match the annotations of your training examples.

## See Also

### Handling errors

- [error](error.md): The underlying error present when the metrics are invalid.
