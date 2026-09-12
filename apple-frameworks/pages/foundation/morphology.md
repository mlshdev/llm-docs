> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/morphology](https://developer.apple.com/documentation/foundation/morphology)

# Morphology

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A description of the grammatical properties of a string.

## Declaration

```swift
struct Morphology
```

<a id="overview"></a>

## Overview

Use a morphology with an [InflectionRule](inflectionrule.md) to specify how to interpret a specific word when inflecting an [AttributedString](attributedstring.md). This affects grammatical agreement with traits like number and gender, as well as declaring the word’s part of speech.

The [Morphology](morphology.md) type’s design is language-independent; the concepts it can specify encompass the spectrum of what languages can do. Even for languages that don’t have one or more of those properties benefit the system as hints to make appropriate choices even when an exact inflection isn’t possible. Examples of properties absent from languages include Spanish’s lack of a grammatical gender of neuter, or the nonexistence of a paucal (plural few) pronoun in English.

## Topics

### Creating a Morphology Instance

- [init()](morphology/init%28%29.md): Creates an empty morphology instance.

### Accessing the User’s Morphology

- [user](morphology/user.md): The addressing preferences of the current user.

### Accessing Grammatical Properties

- [isUnspecified](morphology/isunspecified.md): A Boolean value that indicates whether this instance specifies no particular grammar.
- [grammaticalGender](morphology/grammaticalgender-swift.property.md): The grammatical gender used for inflecting strings with this morphology.
- [Morphology.GrammaticalGender](morphology/grammaticalgender-swift.enum.md): A representation of grammatical gender, used for inflecting strings.
- [number](morphology/number.md): The grammatical number used for inflecting strings with this morphology.
- [Morphology.GrammaticalNumber](morphology/grammaticalnumber.md): A representation of grammatical number, used for inflecting strings.
- [partOfSpeech](morphology/partofspeech-swift.property.md): The grammatical part of speech used for inflecting strings with this morphology.
- [Morphology.PartOfSpeech](morphology/partofspeech-swift.enum.md): A representation of grammatical parts of speech, used for inflecting strings.

### Accessing Per-Language Features

- [setCustomPronoun(\_:forLanguage:)](morphology/setcustompronoun%28__forlanguage_%29.md): Deprecated. Sets a custom pronoun behavior for this morphology to apply to the given language.
- [customPronoun(forLanguage:)](morphology/custompronoun%28forlanguage_%29.md): Deprecated. Returns any custom pronoun behavior this morphology applies to the given language.
- [Morphology.CustomPronoun](morphology/custompronoun.md): Deprecated. A custom pronoun behavior for use in a specific langauge.

### Structures

- [Morphology.Pronoun](morphology/pronoun.md): A custom pronoun for referring to a third person.

### Instance Properties

- [definiteness](morphology/definiteness-swift.property.md)
- [determination](morphology/determination-swift.property.md)
- [grammaticalCase](morphology/grammaticalcase-swift.property.md)
- [grammaticalPerson](morphology/grammaticalperson-swift.property.md)
- [pronounType](morphology/pronountype-swift.property.md)

### Enumerations

- [Morphology.Definiteness](morphology/definiteness-swift.enum.md)
- [Morphology.Determination](morphology/determination-swift.enum.md)
- [Morphology.GrammaticalCase](morphology/grammaticalcase-swift.enum.md)
- [Morphology.GrammaticalPerson](morphology/grammaticalperson-swift.enum.md)
- [Morphology.PronounType](morphology/pronountype-swift.enum.md)

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

- [InflectionRule](inflectionrule.md): A rule that affects how an attributed string performs automatic grammatical agreement.
- [TermOfAddress](termofaddress.md): The type for representing grammatical gender in localized text.
- [InflectionConcept](inflectionconcept.md): An inflection method to use when localizing text.
- [Morphology.Pronoun](morphology/pronoun.md): A custom pronoun for referring to a third person.
