> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/foundationattributes/referentconceptattribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/referentconceptattribute)

# AttributeScopes.FoundationAttributes.ReferentConceptAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An attribute that specifies a grammatical agreement concept for substituting pronouns in localized text.

## Declaration

```swift
@frozen enum ReferentConceptAttribute
```

<a id="overview"></a>

## Overview

Use the [referentConcept](referentconcept.md) formatting attribute for cases where you need to refer to a person using their preferred pronoun in a string.

For an example of how to use a `referentConcept`, see [TermOfAddress](../../termofaddress.md).

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [MarkdownDecodableAttributedStringKey](../../markdowndecodableattributedstringkey.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using automatic grammar agreement attributes

- [inflect](inflect.md): A scope for accessing an inflection rule attribute.
- [AttributeScopes.FoundationAttributes.InflectionRuleAttribute](inflectionruleattribute.md): A type for using an inflection rule as an attribute.
- [agreementArgument](agreementargument.md): A scope for accessing an agreement argument attribute.
- [AttributeScopes.FoundationAttributes.AgreementArgumentAttribute](agreementargumentattribute.md): An attribute that represents grammatical agreement with an argument in a localized string.
- [agreementConcept](agreementconcept.md): A scope for accessing an agreement concept attribute.
- [AttributeScopes.FoundationAttributes.AgreementConceptAttribute](agreementconceptattribute.md): An attribute that represents grammatical agreement for objects that aren’t part of the inflected text.
- [morphology](morphology.md): A scope for accessing a morphology attribute.
- [AttributeScopes.FoundationAttributes.MorphologyAttribute](morphologyattribute.md): A type for using a morphology as an attribute.
- [referentConcept](referentconcept.md): A scope for accessing a referent concept attribute.
- [inflectionAlternative](inflectionalternative.md): A scope for accessing an inflection alternative attribute.
- [AttributeScopes.FoundationAttributes.InflectionAlternativeAttribute](inflectionalternativeattribute.md): An attribute that provides an alternative inflection phrase when the system can’t achieve grammatical agreement.
