> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopywindowcolor(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopywindowcolor(_:_:))

# MACaptionAppearanceCopyWindowColor(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for the caption window’s color.

## Declaration

```swift
func MACaptionAppearanceCopyWindowColor(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?) -> Unmanaged<CGColor>
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The preferred color displayed behind all other caption elements.

## See Also

### Caption window settings

- [MACaptionAppearanceGetWindowOpacity(\_:\_:)](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.
- [MACaptionAppearanceGetWindowRoundedCornerRadius(\_:\_:)](macaptionappearancegetwindowroundedcornerradius%28____%29.md): Returns the radius of the caption window’s corners.

# MACaptionAppearanceCopyWindowColor (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for the caption window’s color.

## Declaration

```objectivec
extern CGColorRefMACaptionAppearanceCopyWindowColor(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The preferred color displayed behind all other caption elements.

## See Also

### Caption window settings

- [MACaptionAppearanceGetWindowOpacity](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.
- [MACaptionAppearanceGetWindowRoundedCornerRadius](macaptionappearancegetwindowroundedcornerradius%28____%29.md): Returns the radius of the caption window’s corners.
