> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/attributename/cascadelist](https://developer.apple.com/documentation/uikit/uifontdescriptor/attributename/cascadelist)

# cascadeList (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The cascading list attribute.

## Declaration

```swift
static let cascadeList: UIFontDescriptor.AttributeName
```

<a id="Discussion"></a>

## Discussion

The value is an [NSArray](../../../foundation/nsarray.md) instance, where each member of the array is a subdescriptor. The default value is the system default cascading list for the user’s locale.

## See Also

### Constants

- [characterSet](characterset.md): The character set attribute.
- [face](face.md): The font face attribute.
- [family](family.md): The font family attribute.
- [featureSettings](featuresettings.md): The font feature settings attribute.
- [fixedAdvance](fixedadvance.md): The glyph advancement attribute.
- [matrix](matrix.md): The font’s transformation matrix attribute.
- [name](name.md): The font name attribute.
- [size](size.md): The font size attribute.
- [textStyle](textstyle.md): The text style attribute.
- [traits](traits.md): The font traits dictionary attribute.
- [visibleName](visiblename.md): The font’s visible name attribute.

# UIFontDescriptorCascadeListAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The cascading list attribute.

## Declaration

```objectivec
extern UIFontDescriptorAttributeName const UIFontDescriptorCascadeListAttribute;
```

<a id="Discussion"></a>

## Discussion

The value is an [NSArray](../../../foundation/nsarray.md) instance, where each member of the array is a subdescriptor. The default value is the system default cascading list for the user’s locale.

## See Also

### Constants

- [UIFontDescriptorCharacterSetAttribute](characterset.md): The character set attribute.
- [UIFontDescriptorFaceAttribute](face.md): The font face attribute.
- [UIFontDescriptorFamilyAttribute](family.md): The font family attribute.
- [UIFontDescriptorFeatureSettingsAttribute](featuresettings.md): The font feature settings attribute.
- [UIFontDescriptorFixedAdvanceAttribute](fixedadvance.md): The glyph advancement attribute.
- [UIFontDescriptorMatrixAttribute](matrix.md): The font’s transformation matrix attribute.
- [UIFontDescriptorNameAttribute](name.md): The font name attribute.
- [UIFontDescriptorSizeAttribute](size.md): The font size attribute.
- [UIFontDescriptorTextStyleAttribute](textstyle.md): The text style attribute.
- [UIFontDescriptorTraitsAttribute](traits.md): The font traits dictionary attribute.
- [UIFontDescriptorVisibleNameAttribute](visiblename.md): The font’s visible name attribute.
