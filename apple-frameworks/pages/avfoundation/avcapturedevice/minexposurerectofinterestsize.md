> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/minexposurerectofinterestsize

# minExposureRectOfInterestSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum size you may use when specifying a rectangle of interest.

## Declaration

```swift
var minExposureRectOfInterestSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

The size returned is in normalized coordinates, and depends on the current [activeFormat](activeformat.md). If [isExposureRectOfInterestSupported](isexposurerectofinterestsupported.md) returns `false`, this property returns { 0, 0 }.

## See Also

### Setting an exposure rectangle of interest

- [isExposureRectOfInterestSupported](isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [defaultRectForExposurePoint(ofInterest:)](defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.

# minExposureRectOfInterestSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum size you may use when specifying a rectangle of interest.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize minExposureRectOfInterestSize;
```

<a id="discussion"></a>

## Discussion

The size returned is in normalized coordinates, and depends on the current [activeFormat](activeformat.md). If [exposureRectOfInterestSupported](isexposurerectofinterestsupported.md) returns `false`, this property returns { 0, 0 }.

## See Also

### Setting an exposure rectangle of interest

- [exposureRectOfInterestSupported](isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [defaultRectForExposurePointOfInterest:](defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.
