> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/limits-swift.struct/maximumnumberofinputimages](https://developer.apple.com/documentation/realitykit/photogrammetrysession/limits-swift.struct/maximumnumberofinputimages)

# maximumNumberOfInputImages

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Returns the maximum number of input images or samples that the session can use for reconstruction. If more than this number are provided, any in excess of the limit will be ignored and an `.invalidSample` message for the sample will be output.

## Declaration

```swift
var maximumNumberOfInputImages: Int { get }
```
