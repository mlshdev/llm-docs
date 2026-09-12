> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionerror/invalidmodel(_:)](https://developer.apple.com/documentation/vision/visionerror/invalidmodel(_:))

# VisionError.invalidModel(\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An error that indicates the Core ML model isn’t compatible with the request.

## Declaration

```swift
case invalidModel(String)
```

## See Also

### Getting the invalid error

- [VisionError.invalidArgument(\_:)](invalidargument%28__%29.md): An error that indicates a request has an invalid value.
- [VisionError.invalidFormat(\_:)](invalidformat%28__%29.md): An error that indicates a request has data that’s formatted incorrectly.
- [VisionError.invalidImage(\_:)](invalidimage%28__%29.md): An error that indicates the input image is invalid.
- [VisionError.invalidOperation(\_:)](invalidoperation%28__%29.md): An error that indicates an app requests an unsupported operation.
