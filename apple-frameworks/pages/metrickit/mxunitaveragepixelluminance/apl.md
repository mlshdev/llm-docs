> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxunitaveragepixelluminance/apl](https://developer.apple.com/documentation/metrickit/mxunitaveragepixelluminance/apl)

# apl (Swift)

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The average number of powered pixels on a OLED display.

> Use [AveragePixelLuminance](../averagepixelluminance.md) instead.

## Declaration

```swift
@NSCopying class var apl: MXUnitAveragePixelLuminance { get }
```

<a id="Discussion"></a>

## Discussion

The value of `apl` is a whole number ranging from 0 to 100. 0 means the display is black with no illuminated pixels. A value of 100 means the display is white with all red, green, and blue components of all pixels illuminated.

# apl (Objective-C)

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The average number of powered pixels on a OLED display.

> Use [AveragePixelLuminance](../averagepixelluminance.md) instead.

## Declaration

```objectivec
@property (class, copy, readonly) MXUnitAveragePixelLuminance * apl;
```

<a id="Discussion"></a>

## Discussion

The value of `apl` is a whole number ranging from 0 to 100. 0 means the display is black with no illuminated pixels. A value of 100 means the display is white with all red, green, and blue components of all pixels illuminated.
