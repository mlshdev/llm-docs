> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/appkitattributes](https://developer.apple.com/documentation/foundation/attributescopes/appkitattributes)

# AttributeScopes.AppKitAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** macOS 12.0+

Attribute scopes that AppKit defines.

## Declaration

```swift
struct AppKitAttributes
```

## Topics

### Using Color Attributes

- [backgroundColor](appkitattributes/backgroundcolor.md): A property for accessing a background color attribute.
- [foregroundColor](appkitattributes/foregroundcolor.md): A property for accessing a foreground color attribute.

### Using Font and Layout Attributes

- [font](appkitattributes/font.md): A property for accessing a font attribute.
- [kern](appkitattributes/kern.md): A property for accessing a kerning attribute.
- [ligature](appkitattributes/ligature.md): A property for accessing a ligature attribute.
- [glyphInfo](appkitattributes/glyphinfo.md): A property for accessing a glyph information attribute.
- [tracking](appkitattributes/tracking.md): A property for accessing a tracking attribute.

### Using Text Styling Attributes

- [baselineOffset](appkitattributes/baselineoffset.md): A property for accessing a baseline offset attribute.
- [obliqueness](appkitattributes/obliqueness.md): Deprecated. A property for accessing an obliqueness attribute.
- [shadow](appkitattributes/shadow.md): A property for accessing a shadow attribute.
- [strikethroughColor](appkitattributes/strikethroughcolor.md): A property for accessing a strikethrough color attribute.
- [strikethroughStyle](appkitattributes/strikethroughstyle.md): A property for accessing a strikethrough style attribute.
- [strokeColor](appkitattributes/strokecolor.md): A property for accessing a stroke color attribute.
- [strokeWidth](appkitattributes/strokewidth.md): A property for accessing a stroke width attribute.
- [textEffect](appkitattributes/texteffect.md): A property for accessing a text effect attribute.
- [underlineColor](appkitattributes/underlinecolor.md): A property for accessing an underline color attribute.
- [underlineStyle](appkitattributes/underlinestyle.md): A property for accessing an underline style attribute.

### Using Attachments and Expansions

- [attachment](appkitattributes/attachment.md): A property for accessing an attachment attribute.
- [expansion](appkitattributes/expansion.md): Deprecated. A property for accessing an expansion attribute.

### Using User Interface Attributes

- [cursor](appkitattributes/cursor.md): A property for accessing a cursor attribute.
- [toolTip](appkitattributes/tooltip.md): A property for accessing a tool tip attribute.
- [textAlternatives](appkitattributes/textalternatives.md): A property for accessing a text alternatives attribute.

### Using Foundation Attributes

- [foundation](appkitattributes/foundation.md): A property for accessing attributes defined by the Foundation framework.

### Using Text Layout and Presentation Attributes

- [markedClauseSegment](appkitattributes/markedclausesegment.md)
- [paragraphStyle](appkitattributes/paragraphstyle.md)
- [superscript](appkitattributes/superscript.md)

### Instance Properties

- [accessibility](appkitattributes/accessibility.md)
- [adaptiveImageGlyph](appkitattributes/adaptiveimageglyph.md)

### Enumerations

- [AttributeScopes.AppKitAttributes.AdaptiveImageGlyphAttribute](appkitattributes/adaptiveimageglyphattribute.md)
- [AttributeScopes.AppKitAttributes.AttachmentAttribute](appkitattributes/attachmentattribute.md)
- [AttributeScopes.AppKitAttributes.BackgroundColorAttribute](appkitattributes/backgroundcolorattribute.md)
- [AttributeScopes.AppKitAttributes.BaselineOffsetAttribute](appkitattributes/baselineoffsetattribute.md)
- [AttributeScopes.AppKitAttributes.CursorAttribute](appkitattributes/cursorattribute.md)
- [AttributeScopes.AppKitAttributes.ExpansionAttribute](appkitattributes/expansionattribute.md): Deprecated.
- [AttributeScopes.AppKitAttributes.FontAttribute](appkitattributes/fontattribute.md)
- [AttributeScopes.AppKitAttributes.ForegroundColorAttribute](appkitattributes/foregroundcolorattribute.md)
- [AttributeScopes.AppKitAttributes.GlyphInfoAttribute](appkitattributes/glyphinfoattribute.md)
- [AttributeScopes.AppKitAttributes.KernAttribute](appkitattributes/kernattribute.md)
- [AttributeScopes.AppKitAttributes.LigatureAttribute](appkitattributes/ligatureattribute.md)
- [AttributeScopes.AppKitAttributes.MarkedClauseSegmentAttribute](appkitattributes/markedclausesegmentattribute.md)
- [AttributeScopes.AppKitAttributes.ObliquenessAttribute](appkitattributes/obliquenessattribute.md): Deprecated.
- [AttributeScopes.AppKitAttributes.ParagraphStyleAttribute](appkitattributes/paragraphstyleattribute.md)
- [AttributeScopes.AppKitAttributes.ShadowAttribute](appkitattributes/shadowattribute.md)
- [AttributeScopes.AppKitAttributes.StrikethroughColorAttribute](appkitattributes/strikethroughcolorattribute.md)
- [AttributeScopes.AppKitAttributes.StrikethroughStyleAttribute](appkitattributes/strikethroughstyleattribute.md)
- [AttributeScopes.AppKitAttributes.StrokeColorAttribute](appkitattributes/strokecolorattribute.md)
- [AttributeScopes.AppKitAttributes.StrokeWidthAttribute](appkitattributes/strokewidthattribute.md)
- [AttributeScopes.AppKitAttributes.SuperscriptAttribute](appkitattributes/superscriptattribute.md)
- [AttributeScopes.AppKitAttributes.TextAlternativesAttribute](appkitattributes/textalternativesattribute.md)
- [AttributeScopes.AppKitAttributes.TextEffectAttribute](appkitattributes/texteffectattribute.md)
- [AttributeScopes.AppKitAttributes.ToolTipAttribute](appkitattributes/tooltipattribute.md)
- [AttributeScopes.AppKitAttributes.TrackingAttribute](appkitattributes/trackingattribute.md)
- [AttributeScopes.AppKitAttributes.UnderlineColorAttribute](appkitattributes/underlinecolorattribute.md)
- [AttributeScopes.AppKitAttributes.UnderlineStyleAttribute](appkitattributes/underlinestyleattribute.md)

## Relationships

### Conforms To

- [AttributeScope](../attributescope.md)
- [DecodingConfigurationProviding](../decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](../encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### AppKit-Defined Attributes

- [appKit](appkit.md): A property for accessing the attribute scopes that AppKit defines.
