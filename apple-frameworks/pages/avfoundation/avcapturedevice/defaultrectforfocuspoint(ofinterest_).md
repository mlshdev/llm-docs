> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/defaultrectforfocuspoint(ofinterest:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/defaultrectforfocuspoint(ofinterest:))

# defaultRectForFocusPoint(ofInterest:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The default rectangle of interest used for a given focus point of interest.

## Declaration

```swift
func defaultRectForFocusPoint(ofInterest pointOfInterest: CGPoint) -> CGRect
```

## Parameters

- `pointOfInterest`: The point of interest for which you want the default rectangle of interest.

<a id="discussion"></a>

## Discussion

For example, pass `(0.5, 0.5)` to get the focus rectangle of interest used for the default focus point of interest at `(0.5, 0.5)`.

> **Note**

> The particular default rectangle returned depends on the current focus mode.

This method returns `CGRectNull` if [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`.

## See Also

### Setting a focus rectangle of interest

- [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.

# defaultRectForFocusPointOfInterest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The default rectangle of interest used for a given focus point of interest.

## Declaration

```objectivec
- (CGRect) defaultRectForFocusPointOfInterest:(CGPoint) pointOfInterest;
```

## Parameters

- `pointOfInterest`: The point of interest for which you want the default rectangle of interest.

<a id="discussion"></a>

## Discussion

For example, pass `(0.5, 0.5)` to get the focus rectangle of interest used for the default focus point of interest at `(0.5, 0.5)`.

> **Note**

> The particular default rectangle returned depends on the current focus mode.

This method returns `CGRectNull` if [focusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`.

## See Also

### Setting a focus rectangle of interest

- [focusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
