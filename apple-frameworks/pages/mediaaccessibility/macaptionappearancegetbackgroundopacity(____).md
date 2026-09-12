> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancegetbackgroundopacity(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancegetbackgroundopacity(_:_:))

# MACaptionAppearanceGetBackgroundOpacity(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for the text highlight opacity.

## Declaration

```swift
func MACaptionAppearanceGetBackgroundOpacity(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?) -> CGFloat
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

A float value, ranging from `0.0` to `1.0`, representing the opacity of the color behind the text and above the window color.

## See Also

### Text highlight settings

- [MACaptionAppearanceCopyBackgroundColor(\_:\_:)](macaptionappearancecopybackgroundcolor%28____%29.md): Returns the preference for the text highlight color.

# MACaptionAppearanceGetBackgroundOpacity (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for the text highlight opacity.

## Declaration

```objectivec
extern CGFloat MACaptionAppearanceGetBackgroundOpacity(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

A float value, ranging from `0.0` to `1.0`, representing the opacity of the color behind the text and above the window color.

## See Also

### Text highlight settings

- [MACaptionAppearanceCopyBackgroundColor](macaptionappearancecopybackgroundcolor%28____%29.md): Returns the preference for the text highlight color.
