> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes

# AttributeScopes.SwiftUIAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Attribute scopes that SwiftUI defines.

## Declaration

```swift
struct SwiftUIAttributes
```

## Topics

### Using Color Attributes

- [backgroundColor](swiftuiattributes/backgroundcolor.md): A property for accessing a background color attribute.
- [foregroundColor](swiftuiattributes/foregroundcolor.md): A property for accessing a foreground color attribute.

### Using Font and Layout Attributes

- [font](swiftuiattributes/font.md): A property for accessing a font attribute.
- [tracking](swiftuiattributes/tracking.md): A property for accessing a tracking attribute.

### Using Text Styling Attributes

- [baselineOffset](swiftuiattributes/baselineoffset.md): A property for accessing a baseline offset attribute.
- [kern](swiftuiattributes/kern.md): A property for accessing a kerning attribute.

### Using Foundation Attributes

- [foundation](swiftuiattributes/foundation.md): A property for accessing attributes defined by the Foundation framework.

### Instance Properties

- [accessibility](swiftuiattributes/accessibility.md)
- [adaptiveImageGlyph](swiftuiattributes/adaptiveimageglyph.md)
- [alignment](swiftuiattributes/alignment.md): The horizontal alignment of a paragraph.
- [lineHeight](swiftuiattributes/lineheight.md): The line height definition of a paragraph.
- [strikethroughStyle](swiftuiattributes/strikethroughstyle.md)
- [underlineStyle](swiftuiattributes/underlinestyle.md)

### Enumerations

- [AttributeScopes.SwiftUIAttributes.AdaptiveImageGlyphAttribute](swiftuiattributes/adaptiveimageglyphattribute.md): A key for an adaptive image glyph inside a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.BackgroundColorAttribute](swiftuiattributes/backgroundcolorattribute.md): A key for the color that fills the area behind a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.BaselineOffsetAttribute](swiftuiattributes/baselineoffsetattribute.md): A key for the distance a run of attributed text shifts from its baseline.
- [AttributeScopes.SwiftUIAttributes.FontAttribute](swiftuiattributes/fontattribute.md): A key for the font of a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.ForegroundColorAttribute](swiftuiattributes/foregroundcolorattribute.md): A key for the color that draws a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.KerningAttribute](swiftuiattributes/kerningattribute.md): A key for the space added between specific pairs of characters in a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.StrikethroughStyleAttribute](swiftuiattributes/strikethroughstyleattribute.md): A key for the line drawn through a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.TrackingAttribute](swiftuiattributes/trackingattribute.md): A key for the space added between every character of a run of attributed text.
- [AttributeScopes.SwiftUIAttributes.UnderlineStyleAttribute](swiftuiattributes/underlinestyleattribute.md): A key for the line drawn under a run of attributed text.

## Relationships

### Conforms To

- [AttributeScope](../attributescope.md)
- [DecodingConfigurationProviding](../decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](../encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### SwiftUI-Defined Attributes

- [swiftUI](swiftui.md): A property for accessing the attribute scopes that SwiftUI defines.
