> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/attributename/featuresettings](https://developer.apple.com/documentation/uikit/uifontdescriptor/attributename/featuresettings)

# featureSettings (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font feature settings attribute.

## Declaration

```swift
static let featureSettings: UIFontDescriptor.AttributeName
```

<a id="Discussion"></a>

## Discussion

The value is an array of dictionaries that represents nondefault font feature settings. Each dictionary contains a [type](../featurekey/type.md) and [selector](../featurekey/selector.md) key.

## See Also

### Constants

- [cascadeList](cascadelist.md): The cascading list attribute.
- [characterSet](characterset.md): The character set attribute.
- [face](face.md): The font face attribute.
- [family](family.md): The font family attribute.
- [fixedAdvance](fixedadvance.md): The glyph advancement attribute.
- [matrix](matrix.md): The font’s transformation matrix attribute.
- [name](name.md): The font name attribute.
- [size](size.md): The font size attribute.
- [textStyle](textstyle.md): The text style attribute.
- [traits](traits.md): The font traits dictionary attribute.
- [visibleName](visiblename.md): The font’s visible name attribute.

# UIFontDescriptorFeatureSettingsAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font feature settings attribute.

## Declaration

```objectivec
extern UIFontDescriptorAttributeName const UIFontDescriptorFeatureSettingsAttribute;
```

<a id="Discussion"></a>

## Discussion

The value is an array of dictionaries that represents nondefault font feature settings. Each dictionary contains a [type](../featurekey/type.md) and [selector](../featurekey/selector.md) key.

## See Also

### Constants

- [UIFontDescriptorCascadeListAttribute](cascadelist.md): The cascading list attribute.
- [UIFontDescriptorCharacterSetAttribute](characterset.md): The character set attribute.
- [UIFontDescriptorFaceAttribute](face.md): The font face attribute.
- [UIFontDescriptorFamilyAttribute](family.md): The font family attribute.
- [UIFontDescriptorFixedAdvanceAttribute](fixedadvance.md): The glyph advancement attribute.
- [UIFontDescriptorMatrixAttribute](matrix.md): The font’s transformation matrix attribute.
- [UIFontDescriptorNameAttribute](name.md): The font name attribute.
- [UIFontDescriptorSizeAttribute](size.md): The font size attribute.
- [UIFontDescriptorTextStyleAttribute](textstyle.md): The text style attribute.
- [UIFontDescriptorTraitsAttribute](traits.md): The font traits dictionary attribute.
- [UIFontDescriptorVisibleNameAttribute](visiblename.md): The font’s visible name attribute.
