> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/focusrectofinterest](https://developer.apple.com/documentation/avfoundation/avcapturedevice/focusrectofinterest)

# focusRectOfInterest (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The device’s current focus rectangle of interest, if it has one.

## Declaration

```swift
var focusRectOfInterest: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

The value of this property is a `CGRect` determining the device’s focus rectangle of interest. Use this as an alternative to setting [focusPointOfInterest](focuspointofinterest.md), as it allows you to specify both a location and size. For example, a value of `CGRectMake(0, 0, 1, 1)` tells the device to use the entire field of view when determining the focus, while `CGRectMake(0, 0, 0.25, 0.25)` indicates the top left sixteenth, and `CGRectMake(0.75, 0.75, 0.25, 0.25)` indicates the bottom right sixteenth. Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSInvalidArgumentException` if [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`. Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSInvalidArgumentException` if your provided rectangle’s size is smaller than the [minFocusRectOfInterestSize](minfocusrectofinterestsize.md). Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSGenericException` if you call it without first obtaining exclusive access to the device using [lockForConfiguration()](lockforconfiguration%28%29.md). Setting [focusRectOfInterest](focusrectofinterest.md) updates the device’s [focusPointOfInterest](focuspointofinterest.md) to the center of your provided rectangle of interest. If you later set the device’s [focusPointOfInterest](focuspointofinterest.md), the [focusRectOfInterest](focusrectofinterest.md) resets to the default sized rectangle of interest for the new focus point of interest. If you change your [activeFormat](activeformat.md), the point of interest and rectangle of interest both revert to their default values. You can observe automatic changes to the device’s [focusRectOfInterest](focusrectofinterest.md) by key-value observing this property.

> **Note**

> Setting [focusRectOfInterest](focusrectofinterest.md) alone does not initiate a focus operation. After setting [focusRectOfInterest](focusrectofinterest.md), set [focusMode](focusmode-swift.property.md) to apply the new rectangle of interest.

## See Also

### Setting a focus rectangle of interest

- [isFocusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPoint(ofInterest:)](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.

# focusRectOfInterest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The device’s current focus rectangle of interest, if it has one.

## Declaration

```objectivec
@property (nonatomic) CGRect focusRectOfInterest;
```

<a id="discussion"></a>

## Discussion

The value of this property is a `CGRect` determining the device’s focus rectangle of interest. Use this as an alternative to setting [focusPointOfInterest](focuspointofinterest.md), as it allows you to specify both a location and size. For example, a value of `CGRectMake(0, 0, 1, 1)` tells the device to use the entire field of view when determining the focus, while `CGRectMake(0, 0, 0.25, 0.25)` indicates the top left sixteenth, and `CGRectMake(0.75, 0.75, 0.25, 0.25)` indicates the bottom right sixteenth. Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSInvalidArgumentException` if [focusRectOfInterestSupported](isfocusrectofinterestsupported.md) returns `false`. Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSInvalidArgumentException` if your provided rectangle’s size is smaller than the [minFocusRectOfInterestSize](minfocusrectofinterestsize.md). Setting [focusRectOfInterest](focusrectofinterest.md) throws an `NSGenericException` if you call it without first obtaining exclusive access to the device using [lockForConfiguration:](lockforconfiguration%28%29.md). Setting [focusRectOfInterest](focusrectofinterest.md) updates the device’s [focusPointOfInterest](focuspointofinterest.md) to the center of your provided rectangle of interest. If you later set the device’s [focusPointOfInterest](focuspointofinterest.md), the [focusRectOfInterest](focusrectofinterest.md) resets to the default sized rectangle of interest for the new focus point of interest. If you change your [activeFormat](activeformat.md), the point of interest and rectangle of interest both revert to their default values. You can observe automatic changes to the device’s [focusRectOfInterest](focusrectofinterest.md) by key-value observing this property.

> **Note**

> Setting [focusRectOfInterest](focusrectofinterest.md) alone does not initiate a focus operation. After setting [focusRectOfInterest](focusrectofinterest.md), set [focusMode](focusmode-swift.property.md) to apply the new rectangle of interest.

## See Also

### Setting a focus rectangle of interest

- [focusRectOfInterestSupported](isfocusrectofinterestsupported.md): Whether the receiver supports focus rectangles of interest.
- [minFocusRectOfInterestSize](minfocusrectofinterestsize.md): The minimum size you may use when specifying a rectangle of interest.
- [defaultRectForFocusPointOfInterest:](defaultrectforfocuspoint%28ofinterest_%29.md): The default rectangle of interest used for a given focus point of interest.
