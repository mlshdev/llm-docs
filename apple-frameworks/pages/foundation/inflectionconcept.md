> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inflectionconcept](https://developer.apple.com/documentation/foundation/inflectionconcept)

# InflectionConcept

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An inflection method to use when localizing text.

## Declaration

```swift
enum InflectionConcept
```

<a id="overview"></a>

## Overview

Use `InflectionConcept` when you want to make a localizable string grammatically agree with a phrase or term of address that isn’t part of the text you’re localizing. Set [InflectionConcept](inflectionconcept.md) on the [concepts](attributedstring/localizationoptions/concepts.md) property of [AttributedString.LocalizationOptions](attributedstring/localizationoptions.md) to specify the inflection concepts to use while inflecting text.

For examples of how to use inflection concepts, see:

- [AttributeScopes.FoundationAttributes.ReferentConceptAttribute](attributescopes/foundationattributes/referentconceptattribute.md)
- [AttributeScopes.FoundationAttributes.AgreementConceptAttribute](attributescopes/foundationattributes/agreementconceptattribute.md)

## Topics

### Using inflection concepts

- [InflectionConcept.termsOfAddress(\_:)](inflectionconcept/termsofaddress%28__%29.md): Indicates that the system uses the associated terms of address for grammatical agreement when localizing text.
- [InflectionConcept.localizedPhrase(\_:)](inflectionconcept/localizedphrase%28__%29.md): Indicates that the system uses the associated string for grammatical agreement when localizing text.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Automatic grammar agreement

- [InflectionRule](inflectionrule.md): A rule that affects how an attributed string performs automatic grammatical agreement.
- [Morphology](morphology.md): A description of the grammatical properties of a string.
- [TermOfAddress](termofaddress.md): The type for representing grammatical gender in localized text.
- [Morphology.Pronoun](morphology/pronoun.md): A custom pronoun for referring to a third person.
