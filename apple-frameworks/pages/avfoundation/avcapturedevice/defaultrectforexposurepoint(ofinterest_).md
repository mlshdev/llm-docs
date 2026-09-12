> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/defaultrectforexposurepoint(ofinterest:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/defaultrectforexposurepoint(ofinterest:))

# defaultRectForExposurePoint(ofInterest:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The default rectangle of interest used for a given exposure point of interest.

## Declaration

```swift
func defaultRectForExposurePoint(ofInterest pointOfInterest: CGPoint) -> CGRect
```

## Parameters

- `pointOfInterest`: The point of interest for which you want the default rectangle of interest.

<a id="discussion"></a>

## Discussion

For example, pass `(0.5, 0.5)` to get the exposure rectangle of interest used for the default exposure point of interest at `(0.5, 0.5)`.

This method returns `CGRectNull` if [isExposureRectOfInterestSupported](isexposurerectofinterestsupported.md) returns `false`.

## See Also

### Setting an exposure rectangle of interest

- [isExposureRectOfInterestSupported](isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.

# defaultRectForExposurePointOfInterest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The default rectangle of interest used for a given exposure point of interest.

## Declaration

```objectivec
- (CGRect) defaultRectForExposurePointOfInterest:(CGPoint) pointOfInterest;
```

## Parameters

- `pointOfInterest`: The point of interest for which you want the default rectangle of interest.

<a id="discussion"></a>

## Discussion

For example, pass `(0.5, 0.5)` to get the exposure rectangle of interest used for the default exposure point of interest at `(0.5, 0.5)`.

This method returns `CGRectNull` if [exposureRectOfInterestSupported](isexposurerectofinterestsupported.md) returns `false`.

## See Also

### Setting an exposure rectangle of interest

- [exposureRectOfInterestSupported](isexposurerectofinterestsupported.md): Whether the device supports exposure rectangles of interest.
- [exposureRectOfInterest](exposurerectofinterest.md): The device’s current exposure rectangle of interest, if it has one.
- [minExposureRectOfInterestSize](minexposurerectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
