> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccapturedynamicrange](https://developer.apple.com/documentation/screencapturekit/sccapturedynamicrange)

# SCCaptureDynamicRange (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+

Specifies whether the captured screen output is standard or high dynamic range.

## Declaration

```swift
enum SCCaptureDynamicRange
```

<a id="overview"></a>

## Overview

High dynamic range screenshot capture may specify local or canonical display attributes optimizing output for presentation on either the capture display or any high dyanmic range display. The screenshot capture updates the output screen capture buffer pixel format and color space to support high dynamic range when specified.

## Topics

### Enumeration Cases

- [SCCaptureDynamicRange.SDR](sccapturedynamicrange/sdr.md): Specifies that the system captures the screen in standard dynamic range.
- [SCCaptureDynamicRange.hdrCanonicalDisplay](sccapturedynamicrange/hdrcanonicaldisplay.md): Specifies that the system captures the screen in high dynamic range with attributes of the canonical display.
- [SCCaptureDynamicRange.hdrLocalDisplay](sccapturedynamicrange/hdrlocaldisplay.md): Specifies that the system captures the screen in high dynamic range with attributes of the local display.

### Initializers

- [init(rawValue:)](sccapturedynamicrange/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [SCStreamConfiguration.Preset](scstreamconfiguration/preset.md)

# SCCaptureDynamicRange (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+

Specifies whether the captured screen output is standard or high dynamic range.

## Declaration

```objectivec
enum SCCaptureDynamicRange : NSInteger;
```

<a id="overview"></a>

## Overview

High dynamic range screenshot capture may specify local or canonical display attributes optimizing output for presentation on either the capture display or any high dyanmic range display. The screenshot capture updates the output screen capture buffer pixel format and color space to support high dynamic range when specified.

## Topics

### Enumeration Cases

- [SCCaptureDynamicRangeSDR](sccapturedynamicrange/sdr.md): Specifies that the system captures the screen in standard dynamic range.
- [SCCaptureDynamicRangeHDRCanonicalDisplay](sccapturedynamicrange/hdrcanonicaldisplay.md): Specifies that the system captures the screen in high dynamic range with attributes of the canonical display.
- [SCCaptureDynamicRangeHDRLocalDisplay](sccapturedynamicrange/hdrlocaldisplay.md): Specifies that the system captures the screen in high dynamic range with attributes of the local display.

## See Also

### Enumerations

- [SCStreamConfigurationPreset](scstreamconfiguration/preset.md)
