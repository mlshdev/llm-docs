> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/horizonobservation/transform](https://developer.apple.com/documentation/vision/horizonobservation/transform)

# transform

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The transform to apply to the detected horizon.

## Declaration

```swift
let transform: CGAffineTransform
```

<a id="Discussion"></a>

## Discussion

Apply the transform’s inverse to orient the image in an upright position and make the detected horizon level.

## See Also

### Getting the transform

- [transform(for:)](transform%28for_%29.md): Creates an affine transform for the specified image width and height.
