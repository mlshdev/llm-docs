> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopyforegroundcolor(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopyforegroundcolor(_:_:))

# MACaptionAppearanceCopyForegroundColor(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for text color.

## Declaration

```swift
func MACaptionAppearanceCopyForegroundColor(_ domain: MACaptionAppearanceDomain, _ behavior: UnsafeMutablePointer<MACaptionAppearanceBehavior>?) -> Unmanaged<CGColor>
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [MACaptionAppearanceDomain.user](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The preferred color for caption text.

## See Also

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle(\_:\_:\_:)](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceGetForegroundOpacity(\_:\_:)](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize(\_:\_:)](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle(\_:\_:)](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.

# MACaptionAppearanceCopyForegroundColor (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for text color.

## Declaration

```objectivec
extern CGColorRefMACaptionAppearanceCopyForegroundColor(MACaptionAppearanceDomain domain, MACaptionAppearanceBehavior *behavior);
```

## Parameters

- `domain`: The domain to retrieve the preference value from. See [MACaptionAppearanceDomain](macaptionappearancedomain.md). Pass [kMACaptionAppearanceDomainUser](macaptionappearancedomain/user.md) unless the system defaults are needed for comparison.
- `behavior`: A pointer to memory. On return, this memory holds the caption appearance behavior for this preference setting. For possible values see [MACaptionAppearanceBehavior](macaptionappearancebehavior.md). Pass `NULL` when you do not need the behavior setting.

<a id="Return-Value"></a>

## Return Value

The preferred color for caption text.

## See Also

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceGetForegroundOpacity](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.
