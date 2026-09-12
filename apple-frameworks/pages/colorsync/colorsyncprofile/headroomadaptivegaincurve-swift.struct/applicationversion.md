> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/applicationversion](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/applicationversion)

# applicationVersion

**Framework:** ColorSync  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The application version of the metadata, as defined by ST 2094-50.

## Declaration

```swift
var applicationVersion: UInt8
```

<a id="discussion"></a>

## Discussion

This 3-bit field is currently always `0`. Initializing the metadata with any other value throws [ColorSyncProfile.HeadroomAdaptiveGainCurve.Error.unsupportedApplicationVersion(\_:)](error/unsupportedapplicationversion%28__%29.md).
