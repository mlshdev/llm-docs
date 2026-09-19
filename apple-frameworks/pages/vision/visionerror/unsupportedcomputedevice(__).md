> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/visionerror/unsupportedcomputedevice(_:)

# VisionError.unsupportedComputeDevice(\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An error that indicates an app requests a compute device the framework doesn’t support.

## Declaration

```swift
case unsupportedComputeDevice(String)
```

## See Also

### Getting the unsupported error

- [VisionError.unsupportedComputeStage(\_:)](unsupportedcomputestage%28__%29.md): An error that indicates an app requests a compute stage the framework doesn’t support.
- [VisionError.unsupportedRequest(\_:)](unsupportedrequest%28__%29.md): An error that indicates an app attempts a request the framework doesn’t support.
- [VisionError.unsupportedRevision(\_:)](unsupportedrevision%28__%29.md): An error that indicates an app specifies a request revision the framework doesn’t support.
