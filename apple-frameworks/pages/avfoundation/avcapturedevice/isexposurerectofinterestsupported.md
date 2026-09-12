> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isexposurerectofinterestsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isexposurerectofinterestsupported)

# isExposureRectOfInterestSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device supports exposure rectangles of interest.

## Declaration

```swift
var isExposureRectOfInterestSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

You may only set the device’s [exposureRectOfInterest](exposurerectofinterest.md) property if this property returns `true`.

## See Also

### Setting an exposure rectangle of interest

- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForExposurePoint(ofInterest:)](defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.

# exposureRectOfInterestSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the device supports exposure rectangles of interest.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExposureRectOfInterestSupported) BOOL exposureRectOfInterestSupported;
```

<a id="discussion"></a>

## Discussion

You may only set the device’s [exposureRectOfInterest](exposurerectofinterest.md) property if this property returns `true`.

## See Also

### Setting an exposure rectangle of interest

- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForExposurePointOfInterest:](defaultrectforexposurepoint%28ofinterest_%29.md): The default rectangle of interest used for a given exposure point of interest.
