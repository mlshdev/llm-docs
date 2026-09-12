> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/foundationattributes](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes)

# AttributeScopes.FoundationAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Attribute scopes that Foundation defines.

## Declaration

```swift
struct FoundationAttributes
```

## Topics

### Using date attributes

- [dateField](foundationattributes/datefield.md): A property for accessing a date field attribute.
- [AttributeScopes.FoundationAttributes.DateFieldAttribute](foundationattributes/datefieldattribute.md): A type for using a date field as an attribute.

### Using language attributes

- [languageIdentifier](foundationattributes/languageidentifier.md): A property for accessing a language identifier attribute.
- [AttributeScopes.FoundationAttributes.LanguageIdentifierAttribute](foundationattributes/languageidentifierattribute.md): A type for using a language identifier as an attribute.

### Using URL attributes

- [imageURL](foundationattributes/imageurl.md): A property for accessing an image URL attribute.
- [AttributeScopes.FoundationAttributes.ImageURLAttribute](foundationattributes/imageurlattribute.md): A type for using an image URL as an attribute.
- [link](foundationattributes/link.md): A property for accessing the link attribute.
- [AttributeScopes.FoundationAttributes.LinkAttribute](foundationattributes/linkattribute.md): A type for using a link as an attribute.

### Using presentation intent attributes

- [inlinePresentationIntent](foundationattributes/inlinepresentationintent.md): A property for accessing an inline presentation intent attribute.
- [AttributeScopes.FoundationAttributes.InlinePresentationIntentAttribute](foundationattributes/inlinepresentationintentattribute.md): A type for using an inline presentation intent as an attribute.
- [InlinePresentationIntent](../inlinepresentationintent.md): A type that defines presentation intent for runs of characters for traits like emphasis, strikethrough, and code voice.
- [presentationIntent](foundationattributes/presentationintent.md): A property for accessing a presentation intent attribute.
- [AttributeScopes.FoundationAttributes.PresentationIntentAttribute](foundationattributes/presentationintentattribute.md): A type for using a presentation intent as an attribute.
- [PresentationIntent](../presentationintent.md): A type that defines presentation intent for blocks of characters like paragraphs, lists, block quotes, and tables.

### Using alternative description attributes

- [alternateDescription](foundationattributes/alternatedescription.md): A property for accessing an alternative presentation attribute.
- [AttributeScopes.FoundationAttributes.AlternateDescriptionAttribute](foundationattributes/alternatedescriptionattribute.md): A type for using an alternative description as an attribute.

### Using string formatting attributes

- [replacementIndex](foundationattributes/replacementindex.md): A property for accessing a replacement index attribute.
- [AttributeScopes.FoundationAttributes.ReplacementIndexAttribute](foundationattributes/replacementindexattribute.md): A type for using a replacement index as an attribute.

### Using string localization attributes

- [localizedStringArgumentAttributes](foundationattributes/localizedstringargumentattributes-swift.property.md): A property for accessing a localized string argument attribute.
- [AttributeScopes.FoundationAttributes.LocalizedStringArgumentAttributes](foundationattributes/localizedstringargumentattributes-swift.struct.md): A type for using a localized string argument as an attribute.

### Using automatic grammar agreement attributes

- [inflect](foundationattributes/inflect.md): A scope for accessing an inflection rule attribute.
- [AttributeScopes.FoundationAttributes.InflectionRuleAttribute](foundationattributes/inflectionruleattribute.md): A type for using an inflection rule as an attribute.
- [agreementArgument](foundationattributes/agreementargument.md): A scope for accessing an agreement argument attribute.
- [AttributeScopes.FoundationAttributes.AgreementArgumentAttribute](foundationattributes/agreementargumentattribute.md): An attribute that represents grammatical agreement with an argument in a localized string.
- [agreementConcept](foundationattributes/agreementconcept.md): A scope for accessing an agreement concept attribute.
- [AttributeScopes.FoundationAttributes.AgreementConceptAttribute](foundationattributes/agreementconceptattribute.md): An attribute that represents grammatical agreement for objects that aren’t part of the inflected text.
- [morphology](foundationattributes/morphology.md): A scope for accessing a morphology attribute.
- [AttributeScopes.FoundationAttributes.MorphologyAttribute](foundationattributes/morphologyattribute.md): A type for using a morphology as an attribute.
- [referentConcept](foundationattributes/referentconcept.md): A scope for accessing a referent concept attribute.
- [AttributeScopes.FoundationAttributes.ReferentConceptAttribute](foundationattributes/referentconceptattribute.md): An attribute that specifies a grammatical agreement concept for substituting pronouns in localized text.
- [inflectionAlternative](foundationattributes/inflectionalternative.md): A scope for accessing an inflection alternative attribute.
- [AttributeScopes.FoundationAttributes.InflectionAlternativeAttribute](foundationattributes/inflectionalternativeattribute.md): An attribute that provides an alternative inflection phrase when the system can’t achieve grammatical agreement.

### Using number formatting attributes

- [numberFormat](foundationattributes/numberformat.md): A property for accessing a number format attribute.
- [AttributeScopes.FoundationAttributes.NumberFormatAttributes](foundationattributes/numberformatattributes.md): A type for using a number format as an attribute.

### Using person name component attributes

- [personNameComponent](foundationattributes/personnamecomponent.md): A property for accessing a person name component attribute.
- [AttributeScopes.FoundationAttributes.PersonNameComponentAttribute](foundationattributes/personnamecomponentattribute.md): A type for using a person name component as an attribute.

### Using Markdown source position attributes

- [markdownSourcePosition](foundationattributes/markdownsourceposition.md): A property for accessing a Markdown source position attribute.
- [AttributeScopes.FoundationAttributes.MarkdownSourcePositionAttribute](foundationattributes/markdownsourcepositionattribute.md): A type for using a markdown source position as an attribute.

### Structures

- [AttributeScopes.FoundationAttributes.MeasurementAttribute](foundationattributes/measurementattribute.md)

### Instance Properties

- [byteCount](foundationattributes/bytecount.md)
- [durationField](foundationattributes/durationfield.md)
- [listItemDelimiter](foundationattributes/listitemdelimiter.md)
- [localizedNumberFormat](foundationattributes/localizednumberformat.md)
- [measurement](foundationattributes/measurement.md)
- [writingDirection](foundationattributes/writingdirection.md): The base writing direction of a paragraph.

### Enumerations

- [AttributeScopes.FoundationAttributes.ByteCountAttribute](foundationattributes/bytecountattribute.md)
- [AttributeScopes.FoundationAttributes.DurationFieldAttribute](foundationattributes/durationfieldattribute.md)
- [AttributeScopes.FoundationAttributes.ListItemDelimiterAttribute](foundationattributes/listitemdelimiterattribute.md)
- [AttributeScopes.FoundationAttributes.LocalizedNumberFormatAttribute](foundationattributes/localizednumberformatattribute.md)
- [AttributeScopes.FoundationAttributes.WritingDirectionAttribute](foundationattributes/writingdirectionattribute.md): The attribute key for the base writing direction of a paragraph.

## Relationships

### Conforms To

- [AttributeScope](../attributescope.md)
- [DecodingConfigurationProviding](../decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](../encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Foundation-Defined Attributes

- [foundation](foundation.md): A property for accessing the attribute scopes that Foundation defines.
