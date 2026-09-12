> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isfocusrectofinterestsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfocusrectofinterestsupported)

# isFocusRectOfInterestSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the receiver supports focus rectangles of interest.

## Declaration

```swift
var isFocusRectOfInterestSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

You may only set the device’s [focusRectOfInterest](focusrectofinterest.md) property if this property returns `true`.

## See Also

### Setting a focus rectangle of interest

- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPoint(ofInterest:)](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.

# focusRectOfInterestSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the receiver supports focus rectangles of interest.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFocusRectOfInterestSupported) BOOL focusRectOfInterestSupported;
```

<a id="discussion"></a>

## Discussion

You may only set the device’s [focusRectOfInterest](focusrectofinterest.md) property if this property returns `true`.

## See Also

### Setting a focus rectangle of interest

- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPointOfInterest:](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.
