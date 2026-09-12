> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minfocusrectofinterestsize](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minfocusrectofinterestsize)

# minFocusRectOfInterestSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum size you may use when specifying a rectangle of interest.

## Declaration

```swift
var minFocusRectOfInterestSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

The size returned is in normalized coordinates, and depends on the current [activeFormat](activeformat.md). If [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`, this property returns { 0, 0 }.

## See Also

### Setting a focus rectangle of interest

- [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [defaultRectForFocusPoint(ofInterest:)](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.

# minFocusRectOfInterestSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The minimum size you may use when specifying a rectangle of interest.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize minFocusRectOfInterestSize;
```

<a id="discussion"></a>

## Discussion

The size returned is in normalized coordinates, and depends on the current [activeFormat](activeformat.md). If [focusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`, this property returns { 0, 0 }.

## See Also

### Setting a focus rectangle of interest

- [focusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [focusRectOfInterest](focusrectofinterest.md): The device’s current focus rectangle of interest, if it has one.
- [defaultRectForFocusPointOfInterest:](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.
