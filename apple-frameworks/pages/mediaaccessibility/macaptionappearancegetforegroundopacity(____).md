> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancegetforegroundopacity(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancegetforegroundopacity(_:_:))

# MACaptionAppearanceGetForegroundOpacity(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for text opacity.

## Declaration

```swift
func MACaptionAppearanceGetForegroundOpacity(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?) -> CGFloat
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The float value, ranging from `0.0` to `1.0`, representing the opacity of the color for text opacity.

## See Also

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle(\_:\_:\_:)](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceCopyForegroundColor(\_:\_:)](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetRelativeCharacterSize(\_:\_:)](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle(\_:\_:)](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.

# MACaptionAppearanceGetForegroundOpacity (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for text opacity.

## Declaration

```objectivec
extern CGFloat MACaptionAppearanceGetForegroundOpacity(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The float value, ranging from `0.0` to `1.0`, representing the opacity of the color for text opacity.

## See Also

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceCopyForegroundColor](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetRelativeCharacterSize](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.
