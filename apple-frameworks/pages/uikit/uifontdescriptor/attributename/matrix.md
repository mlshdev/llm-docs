> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/attributename/matrix](https://developer.apple.com/documentation/uikit/uifontdescriptor/attributename/matrix)

# matrix (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font’s transformation matrix attribute.

## Declaration

```swift
static let matrix: UIFontDescriptor.AttributeName
```

<a id="Discussion"></a>

## Discussion

The value is a [CGAffineTransform](../../../corefoundation/cgaffinetransform.md) instance that specifies the font’s transformation matrix. The default value is the identity matrix.

Because the system applies the matrix to the text matrix at rendering time, translation isn’t available. The rendering engine determines the translation independently.

## See Also

### Constants

- [cascadeList](cascadelist.md): The cascading list attribute.
- [characterSet](characterset.md): The character set attribute.
- [face](face.md): The font face attribute.
- [family](family.md): The font family attribute.
- [featureSettings](featuresettings.md): The font feature settings attribute.
- [fixedAdvance](fixedadvance.md): The glyph advancement attribute.
- [name](name.md): The font name attribute.
- [size](size.md): The font size attribute.
- [textStyle](textstyle.md): The text style attribute.
- [traits](traits.md): The font traits dictionary attribute.
- [visibleName](visiblename.md): The font’s visible name attribute.

# UIFontDescriptorMatrixAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The font’s transformation matrix attribute.

## Declaration

```objectivec
extern UIFontDescriptorAttributeName const UIFontDescriptorMatrixAttribute;
```

<a id="Discussion"></a>

## Discussion

The value is a [CGAffineTransform](../../../corefoundation/cgaffinetransform.md) instance that specifies the font’s transformation matrix. The default value is the identity matrix.

Because the system applies the matrix to the text matrix at rendering time, translation isn’t available. The rendering engine determines the translation independently.

## See Also

### Constants

- [UIFontDescriptorCascadeListAttribute](cascadelist.md): The cascading list attribute.
- [UIFontDescriptorCharacterSetAttribute](characterset.md): The character set attribute.
- [UIFontDescriptorFaceAttribute](face.md): The font face attribute.
- [UIFontDescriptorFamilyAttribute](family.md): The font family attribute.
- [UIFontDescriptorFeatureSettingsAttribute](featuresettings.md): The font feature settings attribute.
- [UIFontDescriptorFixedAdvanceAttribute](fixedadvance.md): The glyph advancement attribute.
- [UIFontDescriptorNameAttribute](name.md): The font name attribute.
- [UIFontDescriptorSizeAttribute](size.md): The font size attribute.
- [UIFontDescriptorTextStyleAttribute](textstyle.md): The text style attribute.
- [UIFontDescriptorTraitsAttribute](traits.md): The font traits dictionary attribute.
- [UIFontDescriptorVisibleNameAttribute](visiblename.md): The font’s visible name attribute.
