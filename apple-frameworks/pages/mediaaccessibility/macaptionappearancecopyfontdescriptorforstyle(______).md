> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopyfontdescriptorforstyle(_:_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopyfontdescriptorforstyle(_:_:_:))

# MACaptionAppearanceCopyFontDescriptorForStyle(\_:\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred font for the specified style of type.

## Declaration

```swift
func MACaptionAppearanceCopyFontDescriptorForStyle(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?, _ fontStyle: MACaptionAppearanceFontStyle) -> Unmanaged<CTFontDescriptor>
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.
- `fontStyle`: A font style, such as cursive or small caps, see [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md).

<a id="Return-Value"></a>

## Return Value

The name of the preferred font for the specified style.

## See Also

### Text settings

- [MACaptionAppearanceCopyForegroundColor(\_:\_:)](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetForegroundOpacity(\_:\_:)](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize(\_:\_:)](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle(\_:\_:)](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.

# MACaptionAppearanceCopyFontDescriptorForStyle (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preferred font for the specified style of type.

## Declaration

```objectivec
extern CTFontDescriptorRefMACaptionAppearanceCopyFontDescriptorForStyle(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior, MACaptionAppearanceFontStyle fontStyle);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.
- `fontStyle`: A font style, such as cursive or small caps, see [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md).

<a id="Return-Value"></a>

## Return Value

The name of the preferred font for the specified style.

## See Also

### Text settings

- [MACaptionAppearanceCopyForegroundColor](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetForegroundOpacity](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.
