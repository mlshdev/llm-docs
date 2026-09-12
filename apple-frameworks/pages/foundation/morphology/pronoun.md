> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology/pronoun](https://developer.apple.com/documentation/foundation/morphology/pronoun)

# Morphology.Pronoun

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A custom pronoun for referring to a third person.

## Declaration

```swift
struct Pronoun
```

<a id="overview"></a>

## Overview

Create instances of [Morphology.Pronoun](pronoun.md) when you need to define custom pronouns for a localized term of address.

For examples of how to create custom pronouns, see [TermOfAddress](../termofaddress.md).

## Topics

### Creating pronouns

- [init(pronoun:morphology:dependentMorphology:)](pronoun/init%28pronoun_morphology_dependentmorphology_%29.md): Creates a pronoun with the specified name, morphology, and dependent morphology.

### Using pronouns

- [pronoun](pronoun/pronoun.md): The string representation of the pronoun.
- [morphology](pronoun/morphology.md): The morphology of the pronoun form.
- [dependentMorphology](pronoun/dependentmorphology.md): The dependent morphology of the pronoun form.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Automatic grammar agreement

- [InflectionRule](../inflectionrule.md): A rule that affects how an attributed string performs automatic grammatical agreement.
- [Morphology](../morphology.md): A description of the grammatical properties of a string.
- [TermOfAddress](../termofaddress.md): The type for representing grammatical gender in localized text.
- [InflectionConcept](../inflectionconcept.md): An inflection method to use when localizing text.
