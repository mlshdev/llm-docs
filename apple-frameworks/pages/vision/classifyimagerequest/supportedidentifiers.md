> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classifyimagerequest/supportedidentifiers](https://developer.apple.com/documentation/vision/classifyimagerequest/supportedidentifiers)

# supportedIdentifiers

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The classification identifiers the request supports.

## Declaration

```swift
var supportedIdentifiers: [String] { get }
```

## See Also

### Configuring a request

- [cropAndScaleAction](cropandscaleaction.md): An optional setting that tells the algorithm how to scale an input image before generating the result.
- [ImageCropAndScaleAction](../imagecropandscaleaction.md): A scale to apply to an input image before performing a request.
