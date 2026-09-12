> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancegetwindowroundedcornerradius(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancegetwindowroundedcornerradius(_:_:))

# MACaptionAppearanceGetWindowRoundedCornerRadius(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the radius of the caption window’s corners.

## Declaration

```swift
func MACaptionAppearanceGetWindowRoundedCornerRadius(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?) -> CGFloat
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The system setting for the caption window’s corner radius.

<a id="Discussion"></a>

## Discussion

The rounded corners of the caption window are not customizable within the Accessibility preferences and do not change based on text size.

## See Also

### Caption window settings

- [MACaptionAppearanceCopyWindowColor(\_:\_:)](macaptionappearancecopywindowcolor%28____%29.md): Returns the preference for the caption window’s color.
- [MACaptionAppearanceGetWindowOpacity(\_:\_:)](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.

# MACaptionAppearanceGetWindowRoundedCornerRadius (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the radius of the caption window’s corners.

## Declaration

```objectivec
extern CGFloat MACaptionAppearanceGetWindowRoundedCornerRadius(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The system setting for the caption window’s corner radius.

<a id="Discussion"></a>

## Discussion

The rounded corners of the caption window are not customizable within the Accessibility preferences and do not change based on text size.

## See Also

### Caption window settings

- [MACaptionAppearanceCopyWindowColor](macaptionappearancecopywindowcolor%28____%29.md): Returns the preference for the caption window’s color.
- [MACaptionAppearanceGetWindowOpacity](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.
