> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key](https://developer.apple.com/documentation/foundation/nsattributedstring/key)

# NSAttributedString.Key (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes you apply to ranges of characters in an attributed string.

## Declaration

```swift
struct Key
```

<a id="Discussion"></a>

## Discussion

The [NSAttributedString.Key](key.md) type defines the attributes you apply to ranges of characters in an attributed string. Some attributes provide information about how to render, lay out, or interpret the text, while other attributes provide transient or collaborative information. Attributes like the [font](key/font.md), [kern](key/kern.md), and [strokeColor](key/strokecolor.md) contain information that the rendering system uses to display the text. Attributes like the [spellingState](key/spellingstate.md), [textHighlightStyle](key/texthighlightstyle.md), or [accessibilityCustomText](key/accessibilitycustomtext.md) contain semantic information from other parts of the system. Some of these semantic attributes also affect how the system renders the text, but they are transient attributes unlike the core rendering attributes.

## Topics

### Getting rendering attribute keys

- [backgroundColor](key/backgroundcolor.md): The color of the background behind the text.
- [baselineOffset](key/baselineoffset.md): The vertical offset for the position of the text.
- [font](key/font.md): The font of the text.
- [foregroundColor](key/foregroundcolor.md): The color of the text.
- [glyphInfo](key/glyphinfo.md): The name of a glyph info object.
- [kern](key/kern.md): The kerning of the text.
- [ligature](key/ligature.md): The ligature of the text.
- [paragraphStyle](key/paragraphstyle.md): The paragraph style of the text.
- [strikethroughColor](key/strikethroughcolor.md): The color of the strikethrough.
- [strikethroughStyle](key/strikethroughstyle.md): The strikethrough style of the text.
- [strokeColor](key/strokecolor.md): The color of the stroke.
- [strokeWidth](key/strokewidth.md): The width of the stroke.
- [superscript](key/superscript.md): The superscript of the text.
- [tracking](key/tracking.md): The amount to modify the default tracking.
- [underlineColor](key/underlinecolor.md): The color of the underline.
- [underlineStyle](key/underlinestyle.md): The underline style of the text.
- [writingDirection](key/writingdirection.md): The writing direction of the text.

### Getting text attribute keys

- [cursor](key/cursor.md): The cursor object.
- [link](key/link.md): The link for the text.
- [markedClauseSegment](key/markedclausesegment.md): The index of the marked clause segment.
- [replacementIndex](key/replacementindex.md): The replacement position associated with a format string specifier.
- [shadow](key/shadow.md): The shadow of the text.
- [spellingState](key/spellingstate.md): The spelling state of the text.
- [suggestionHighlight](key/suggestionhighlight.md): A highlight associated with a Spotlight suggestion.
- [textAlternatives](key/textalternatives.md): The alternatives for the text.
- [textEffect](key/texteffect.md): An attribute that applies a text effect to the text.
- [textHighlightColorScheme](key/texthighlightcolorscheme.md): The custom highlight color to apply to the text.
- [textHighlightStyle](key/texthighlightstyle.md): An attribute that adds a highlight color to the text to emphasize it.
- [textItemTag](key/textitemtag.md): The name of a custom tag associated with a text item.
- [toolTip](key/tooltip.md): The tooltip text.

### Getting attachment attribute keys

- [adaptiveImageGlyph](key/adaptiveimageglyph.md): The adaptive image glyph for the text.
- [attachment](key/attachment.md): The attachment for the text.

### Getting accessibility attribute keys

- [accessibilityAlignment](key/accessibilityalignment.md)
- [accessibilityAnnotationTextAttribute](key/accessibilityannotationtextattribute.md)
- [accessibilityAttachment](key/accessibilityattachment.md): Deprecated. Text attachment (`id`).
- [accessibilityAutocorrected](key/accessibilityautocorrected.md): Autocorrected text (`NSNumber` as a Boolean value).
- [accessibilityBackgroundColor](key/accessibilitybackgroundcolor.md): Text background color (`CGColorRef`).
- [accessibilityCustomText](key/accessibilitycustomtext.md)
- [accessibilityFont](key/accessibilityfont.md): Font keys (`NSDictionary`).
- [accessibilityFontBoldAttribute](key/accessibilityfontboldattribute.md)
- [accessibilityFontItalicAttribute](key/accessibilityfontitalicattribute.md)
- [accessibilityForegroundColor](key/accessibilityforegroundcolor.md): Text foreground color (`CGColorRef`).
- [accessibilityLanguage](key/accessibilitylanguage.md)
- [accessibilityLink](key/accessibilitylink.md): Text link (`id`).
- [accessibilityListItemIndex](key/accessibilitylistitemindex.md)
- [accessibilityListItemLevel](key/accessibilitylistitemlevel.md)
- [accessibilityListItemPrefix](key/accessibilitylistitemprefix.md)
- [accessibilityMarkedMisspelled](key/accessibilitymarkedmisspelled.md): Misspelled text that is visibly marked as misspelled (`NSNumber` as a Boolean value). If you’re implementing a custom text-editing app, use `NSAccessibilityMarkedMisspelledTextAttribute` to ensure that VoiceOver properly identifies misspelled text to users.
- [accessibilityMisspelled](key/accessibilitymisspelled.md): Misspelled text that isn’t necessarily visibly marked as misspelled ([NSNumber](../nsnumber.md) as a Boolean value). Beginning in macOS 10.9, VoiceOver no longer checks for this attribute; instead, VoiceOver uses [accessibilityMarkedMisspelled](key/accessibilitymarkedmisspelled.md).
- [accessibilityShadow](key/accessibilityshadow.md): Text shadow (`NSNumber` as a Boolean value).
- [accessibilitySpeechAnnouncementPriority](key/accessibilityspeechannouncementpriority.md)
- [accessibilitySpeechIPANotation](key/accessibilityspeechipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [accessibilitySpeechLanguage](key/accessibilityspeechlanguage.md): A key that indicates the language to use when speaking a string.
- [accessibilitySpeechPitch](key/accessibilityspeechpitch.md): A key that indicates the pitch to apply to spoken content.
- [accessibilitySpeechPunctuation](key/accessibilityspeechpunctuation.md): A key that indicates whether to speak punctuation.
- [accessibilitySpeechQueueAnnouncement](key/accessibilityspeechqueueannouncement.md): Deprecated. A key that indicates whether to queue an announcement behind existing speech or to interrupt it.
- [accessibilitySpeechSpellOut](key/accessibilityspeechspellout.md)
- [accessibilityTextCustom](key/accessibilitytextcustom.md): A key for specifying custom attributes to apply to the text.
- [accessibilityTextHeadingLevel](key/accessibilitytextheadinglevel.md): A key for specifying the heading level of the text.
- [accessibilityStrikethrough](key/accessibilitystrikethrough.md): Text strikethrough (`NSNumber` as a Boolean value).
- [accessibilityStrikethroughColor](key/accessibilitystrikethroughcolor.md): Text strikethrough color (`CGColorRef`).
- [accessibilitySuperscript](key/accessibilitysuperscript.md): Text superscript style (`NSNumber`). Values \> 0 are superscript; values \< 0 are subscript.
- [accessibilityUnderline](key/accessibilityunderline.md): Text underline style (`NSNumber`).
- [accessibilityUnderlineColor](key/accessibilityunderlinecolor.md): Text underline color (`CGColorRef`).
- [UIAccessibilityTextAttributeContext](key/uiaccessibilitytextattributecontext.md)

### Getting Markdown attribute keys

- [inlinePresentationIntent](key/inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [presentationIntentAttributeName](key/presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [markdownSourcePosition](key/markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [alternateDescription](key/alternatedescription.md): An alternate description for a URL or image.
- [imageURL](key/imageurl.md): The URL for an image in Markdown text.

### Getting translation-related attribute keys

- [languageIdentifier](key/languageidentifier.md): The language identifier associated with the range of text.
- [morphology](key/morphology.md): An attribute that contains grammatical properties to apply to the text.
- [inflectionRule](key/inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [inflectionAlternative](key/inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [agreeWithArgument](key/agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [agreeWithConcept](key/agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [referentConcept](key/referentconcept.md): An attribute key whose value indicates the referent concept for inflection.
- [localizedNumberFormat](key/localizednumberformat.md): An attribute key whose value specifies a localized number format.

### Getting formatting attribute keys

- [listItemDelimiter](key/listitemdelimiter.md): The delimiter used when declaring the current list item.

### Getting writing tools attribute keys

- [writingToolsExclusionAttributeName](key/writingtoolsexclusionattributename.md)

### Deprecated Keys

- [expansion](key/expansion.md): Deprecated. The expansion factor of the text.
- [obliqueness](key/obliqueness.md): Deprecated. The obliqueness of the text.
- [verticalGlyphForm](key/verticalglyphform.md): Deprecated. The vertical glyph form of the text.
- [characterShapeAttributeName](key/charactershapeattributename.md): Deprecated. The character shape attribute.
- [usesScreenFontsDocumentAttribute](key/usesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.

### Initializers

- [init(\_:)](key/init%28__%29.md): Creates an attributed string key.
- [init(rawValue:)](key/init%28rawvalue_%29.md): Creates an attributed string key with the specified raw value.

### Type Properties

- [AXSpeechAttributeSSML](key/axspeechattributessml.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting text content attributes

- [NSAttributedString.TextHighlightStyle](texthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSAttributedString.TextHighlightColorScheme](texthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSAttributedString.TextEffectStyle](texteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSAttributedString.SpellingState](spellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.

# NSAttributedStringKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The attributes you apply to ranges of characters in an attributed string.

## Declaration

```objectivec
typedef NSString * NSAttributedStringKey;
```

<a id="Discussion"></a>

## Discussion

The [NSAttributedStringKey](key.md) type defines the attributes you apply to ranges of characters in an attributed string. Some attributes provide information about how to render, lay out, or interpret the text, while other attributes provide transient or collaborative information. Attributes like the [font](key/font.md), [kern](key/kern.md), and [strokeColor](key/strokecolor.md) contain information that the rendering system uses to display the text. Attributes like the [spellingState](key/spellingstate.md), [textHighlightStyle](key/texthighlightstyle.md), or [accessibilityCustomText](key/accessibilitycustomtext.md) contain semantic information from other parts of the system. Some of these semantic attributes also affect how the system renders the text, but they are transient attributes unlike the core rendering attributes.

## Topics

### Getting rendering attribute keys

- [NSBackgroundColorAttributeName](../../uikit/nsbackgroundcolorattributename.md): The color of the background behind the text.
- [NSBaselineOffsetAttributeName](../../uikit/nsbaselineoffsetattributename.md): The vertical offset for the position of the text.
- [NSFontAttributeName](../../uikit/nsfontattributename.md): The font of the text.
- [NSForegroundColorAttributeName](../../uikit/nsforegroundcolorattributename.md): The color of the text.
- [NSGlyphInfoAttributeName](https://developer.apple.com/documentation/appkit/nsglyphinfoattributename): The name of a glyph info object.
- [NSKernAttributeName](../../uikit/nskernattributename.md): The kerning of the text.
- [NSLigatureAttributeName](../../uikit/nsligatureattributename.md): The ligature of the text.
- [NSParagraphStyleAttributeName](../../uikit/nsparagraphstyleattributename.md): The paragraph style of the text.
- [NSStrikethroughColorAttributeName](../../uikit/nsstrikethroughcolorattributename.md): The color of the strikethrough.
- [NSStrikethroughStyleAttributeName](../../uikit/nsstrikethroughstyleattributename.md): The strikethrough style of the text.
- [NSStrokeColorAttributeName](../../uikit/nsstrokecolorattributename.md): The color of the stroke.
- [NSStrokeWidthAttributeName](../../uikit/nsstrokewidthattributename.md): The width of the stroke.
- [NSSuperscriptAttributeName](https://developer.apple.com/documentation/appkit/nssuperscriptattributename): The superscript of the text.
- [NSTrackingAttributeName](../../uikit/nstrackingattributename.md): The amount to modify the default tracking.
- [NSUnderlineColorAttributeName](../../uikit/nsunderlinecolorattributename.md): The color of the underline.
- [NSUnderlineStyleAttributeName](../../uikit/nsunderlinestyleattributename.md): The underline style of the text.
- [NSWritingDirectionAttributeName](../../uikit/nswritingdirectionattributename.md): The writing direction of the text.

### Getting text attribute keys

- [NSCursorAttributeName](https://developer.apple.com/documentation/appkit/nscursorattributename): The cursor object.
- [NSLinkAttributeName](../../uikit/nslinkattributename.md): The link for the text.
- [NSMarkedClauseSegmentAttributeName](https://developer.apple.com/documentation/appkit/nsmarkedclausesegmentattributename): The index of the marked clause segment.
- [NSReplacementIndexAttributeName](key/replacementindex.md): The replacement position associated with a format string specifier.
- [NSShadowAttributeName](../../uikit/nsshadowattributename.md): The shadow of the text.
- [NSSpellingStateAttributeName](https://developer.apple.com/documentation/appkit/nsspellingstateattributename): The spelling state of the text.
- [CSSuggestionHighlightAttributeName](../../corespotlight/cssuggestionhighlightattributename.md)
- [NSTextAlternativesAttributeName](https://developer.apple.com/documentation/appkit/nstextalternativesattributename): The alternatives for the text.
- [NSTextEffectAttributeName](../../uikit/nstexteffectattributename.md): An attribute that applies a text effect to the text.
- [NSTextHighlightColorSchemeAttributeName](../../uikit/nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](../../uikit/nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [UITextItemTagAttributeName](../../uikit/uitextitemtagattributename.md): The name of a custom tag associated with a text item.
- [NSToolTipAttributeName](https://developer.apple.com/documentation/appkit/nstooltipattributename): The tooltip text.

### Getting attachment attribute keys

- [NSAdaptiveImageGlyphAttributeName](../../uikit/nsadaptiveimageglyphattributename.md): The adaptive image glyph for the text.
- [NSAttachmentAttributeName](../../uikit/nsattachmentattributename.md): The attachment for the text.

### Getting accessibility attribute keys

- [NSAccessibilityTextAlignmentAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitytextalignmentattribute)
- [NSAccessibilityAnnotationTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityannotationtextattribute)
- [NSAccessibilityAttachmentTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityattachmenttextattribute): Deprecated. Text attachment (`id`).
- [NSAccessibilityAutocorrectedTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityautocorrectedtextattribute): Autocorrected text (`NSNumber` as a Boolean value).
- [NSAccessibilityBackgroundColorTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitybackgroundcolortextattribute): Text background color (`CGColorRef`).
- [NSAccessibilityCustomTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomtextattribute)
- [NSAccessibilityFontTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityfonttextattribute): Font keys (`NSDictionary`).
- [NSAccessibilityForegroundColorTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityforegroundcolortextattribute): Text foreground color (`CGColorRef`).
- [NSAccessibilityLanguageTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitylanguagetextattribute)
- [NSAccessibilityLinkTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitylinktextattribute): Text link (`id`).
- [NSAccessibilityListItemIndexTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitylistitemindextextattribute)
- [NSAccessibilityListItemLevelTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitylistitemleveltextattribute)
- [NSAccessibilityListItemPrefixTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitylistitemprefixtextattribute)
- [NSAccessibilityMarkedMisspelledTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitymarkedmisspelledtextattribute): Misspelled text that is visibly marked as misspelled (`NSNumber` as a Boolean value). If you’re implementing a custom text-editing app, use `NSAccessibilityMarkedMisspelledTextAttribute` to ensure that VoiceOver properly identifies misspelled text to users.
- [NSAccessibilityMisspelledTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitymisspelledtextattribute): Misspelled text that isn’t necessarily visibly marked as misspelled (`NSNumber` as a Boolean value).
- [NSAccessibilityShadowTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityshadowtextattribute): Text shadow (`NSNumber` as a Boolean value).
- [UIAccessibilitySpeechAttributeAnnouncementPriority](../../uikit/uiaccessibilityspeechattributeannouncementpriority.md)
- [UIAccessibilitySpeechAttributeIPANotation](../../uikit/uiaccessibilityspeechattributeipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [UIAccessibilitySpeechAttributeLanguage](../../uikit/uiaccessibilityspeechattributelanguage.md): A key that indicates the language to use when speaking a string.
- [UIAccessibilitySpeechAttributePitch](../../uikit/uiaccessibilityspeechattributepitch.md): A key that indicates the pitch to apply to spoken content.
- [UIAccessibilitySpeechAttributePunctuation](../../uikit/uiaccessibilityspeechattributepunctuation.md): A key that indicates whether to speak punctuation.
- [UIAccessibilitySpeechAttributeQueueAnnouncement](../../uikit/uiaccessibilityspeechattributequeueannouncement.md): Deprecated. A key that indicates whether to queue an announcement behind existing speech or to interrupt it.
- [UIAccessibilitySpeechAttributeSpellOut](../../uikit/uiaccessibilityspeechattributespellout.md)
- [UIAccessibilityTextAttributeCustom](../../uikit/uiaccessibilitytextattributecustom.md): A key for specifying custom attributes to apply to the text.
- [UIAccessibilityTextAttributeHeadingLevel](../../uikit/uiaccessibilitytextattributeheadinglevel.md): A key for specifying the heading level of the text.
- [NSAccessibilityStrikethroughTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitystrikethroughtextattribute): Text strikethrough (`NSNumber` as a Boolean value).
- [NSAccessibilityStrikethroughColorTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitystrikethroughcolortextattribute): Text strikethrough color (`CGColorRef`).
- [NSAccessibilitySuperscriptTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilitysuperscripttextattribute): Text superscript style (`NSNumber`). Values \> 0 are superscript; values \< 0 are subscript.
- [NSAccessibilityUnderlineTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityunderlinetextattribute): Text underline style (`NSNumber`).
- [NSAccessibilityUnderlineColorTextAttribute](https://developer.apple.com/documentation/appkit/nsaccessibilityunderlinecolortextattribute): Text underline color (`CGColorRef`).
- [UIAccessibilityTextAttributeContext](../../uikit/uiaccessibilitytextattributecontext.md)

### Getting Markdown attribute keys

- [NSInlinePresentationIntentAttributeName](key/inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [NSPresentationIntentAttributeName](key/presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [NSMarkdownSourcePositionAttributeName](key/markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [NSAlternateDescriptionAttributeName](key/alternatedescription.md): An alternate description for a URL or image.
- [NSImageURLAttributeName](key/imageurl.md): The URL for an image in Markdown text.

### Getting translation-related attribute keys

- [NSLanguageIdentifierAttributeName](key/languageidentifier.md): The language identifier associated with the range of text.
- [NSMorphologyAttributeName](key/morphology.md): An attribute that contains grammatical properties to apply to the text.
- [NSInflectionRuleAttributeName](key/inflectionrule.md): An attribute that tells the system how to apply grammar rules and other modifiers to the range of text.
- [NSInflectionAlternativeAttributeName](key/inflectionalternative.md): The alternative translation for a string when no suitable inflection exists.
- [NSInflectionAgreementArgumentAttributeName](key/agreewithargument.md): An attribute key whose value indicates inflection agreement with a specific argument.
- [NSInflectionAgreementConceptAttributeName](key/agreewithconcept.md): An attribute key whose value indicates inflection agreement with a specific concept.
- [NSInflectionReferentConceptAttributeName](key/referentconcept.md): An attribute key whose value indicates the referent concept for inflection.
- [NSLocalizedNumberFormatAttributeName](key/localizednumberformat.md): An attribute key whose value specifies a localized number format.

### Getting formatting attribute keys

- [NSListItemDelimiterAttributeName](key/listitemdelimiter.md): The delimiter used when declaring the current list item.

### Deprecated Keys

- [NSExpansionAttributeName](../../uikit/nsexpansionattributename.md): Deprecated. The expansion factor of the text.
- [NSObliquenessAttributeName](../../uikit/nsobliquenessattributename.md): Deprecated. The obliqueness of the text.
- [NSVerticalGlyphFormAttributeName](../../uikit/nsverticalglyphformattributename.md): Deprecated. The vertical glyph form of the text.
- [NSCharacterShapeAttributeName](https://developer.apple.com/documentation/appkit/nscharactershapeattributename): Deprecated. The character shape attribute.
- [NSUsesScreenFontsDocumentAttribute](https://developer.apple.com/documentation/appkit/nsusesscreenfontsdocumentattribute): Deprecated. The screen fonts attribute.

## See Also

### Getting text content attributes

- [NSTextHighlightStyle](../../uikit/nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](../../uikit/nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](../../uikit/nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSSpellingState](https://developer.apple.com/documentation/appkit/nsspellingstate): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.
