> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionerror/unsupportedcomputestage(_:)](https://developer.apple.com/documentation/vision/visionerror/unsupportedcomputestage(_:))

# VisionError.unsupportedComputeStage(\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An error that indicates an app requests a compute stage the framework doesn’t support.

## Declaration

```swift
case unsupportedComputeStage(String)
```

## See Also

### Getting the unsupported error

- [VisionError.unsupportedComputeDevice(\_:)](unsupportedcomputedevice%28__%29.md): An error that indicates an app requests a compute device the framework doesn’t support.
- [VisionError.unsupportedRequest(\_:)](unsupportedrequest%28__%29.md): An error that indicates an app attempts a request the framework doesn’t support.
- [VisionError.unsupportedRevision(\_:)](unsupportedrevision%28__%29.md): An error that indicates an app specifies a request revision the framework doesn’t support.
