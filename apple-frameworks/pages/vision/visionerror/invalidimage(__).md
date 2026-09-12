> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionerror/invalidimage(_:)](https://developer.apple.com/documentation/vision/visionerror/invalidimage(_:))

# VisionError.invalidImage(\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An error that indicates the input image is invalid.

## Declaration

```swift
case invalidImage(String)
```

<a id="Discussion"></a>

## Discussion

This error occurs when you pass an invalid image to an operation, like passing an image with no dimensions.

## See Also

### Getting the invalid error

- [VisionError.invalidArgument(\_:)](invalidargument%28__%29.md): An error that indicates a request has an invalid value.
- [VisionError.invalidFormat(\_:)](invalidformat%28__%29.md): An error that indicates a request has data that’s formatted incorrectly.
- [VisionError.invalidModel(\_:)](invalidmodel%28__%29.md): An error that indicates the Core ML model isn’t compatible with the request.
- [VisionError.invalidOperation(\_:)](invalidoperation%28__%29.md): An error that indicates an app requests an unsupported operation.
