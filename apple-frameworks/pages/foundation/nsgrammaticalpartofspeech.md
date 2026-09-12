> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgrammaticalpartofspeech](https://developer.apple.com/documentation/foundation/nsgrammaticalpartofspeech)

# NSGrammaticalPartOfSpeech (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical parts of speech, used for inflecting strings.

## Declaration

```swift
enum NSGrammaticalPartOfSpeech
```

## Topics

### Determining Part of Speech

- [NSGrammaticalPartOfSpeech.determiner](nsgrammaticalpartofspeech/determiner.md): A determiner, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.pronoun](nsgrammaticalpartofspeech/pronoun.md): A pronoun, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.letter](nsgrammaticalpartofspeech/letter.md): A letter, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.adverb](nsgrammaticalpartofspeech/adverb.md): An adverb, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.particle](nsgrammaticalpartofspeech/particle.md): A particle, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.adjective](nsgrammaticalpartofspeech/adjective.md): An adjective, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.adposition](nsgrammaticalpartofspeech/adposition.md): An adposition, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.verb](nsgrammaticalpartofspeech/verb.md): A verb, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.noun](nsgrammaticalpartofspeech/noun.md): A noun, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.conjunction](nsgrammaticalpartofspeech/conjunction.md): A conjunction, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.numeral](nsgrammaticalpartofspeech/numeral.md): A numeral, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.interjection](nsgrammaticalpartofspeech/interjection.md): An interjection, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.preposition](nsgrammaticalpartofspeech/preposition.md): A preposition, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.abbreviation](nsgrammaticalpartofspeech/abbreviation.md): An abbreviation, as used as a part of speech.
- [NSGrammaticalPartOfSpeech.notSet](nsgrammaticalpartofspeech/notset.md): A value that indicates the part of speech is unset.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/foundation/nsgrammaticalpartofspeech/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Grammatical Properties

- [NSGrammaticalGender](nsgrammaticalgender.md): A representation of grammatical gender, used for inflecting strings.
- [NSGrammaticalNumber](nsgrammaticalnumber.md): A representation of grammatical number, used for inflecting strings.

# NSGrammaticalPartOfSpeech (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical parts of speech, used for inflecting strings.

## Declaration

```objectivec
enum NSGrammaticalPartOfSpeech : NSInteger;
```

## Topics

### Determining Part of Speech

- [NSGrammaticalPartOfSpeechDeterminer](nsgrammaticalpartofspeech/determiner.md): A determiner, as used as a part of speech.
- [NSGrammaticalPartOfSpeechPronoun](nsgrammaticalpartofspeech/pronoun.md): A pronoun, as used as a part of speech.
- [NSGrammaticalPartOfSpeechLetter](nsgrammaticalpartofspeech/letter.md): A letter, as used as a part of speech.
- [NSGrammaticalPartOfSpeechAdverb](nsgrammaticalpartofspeech/adverb.md): An adverb, as used as a part of speech.
- [NSGrammaticalPartOfSpeechParticle](nsgrammaticalpartofspeech/particle.md): A particle, as used as a part of speech.
- [NSGrammaticalPartOfSpeechAdjective](nsgrammaticalpartofspeech/adjective.md): An adjective, as used as a part of speech.
- [NSGrammaticalPartOfSpeechAdposition](nsgrammaticalpartofspeech/adposition.md): An adposition, as used as a part of speech.
- [NSGrammaticalPartOfSpeechVerb](nsgrammaticalpartofspeech/verb.md): A verb, as used as a part of speech.
- [NSGrammaticalPartOfSpeechNoun](nsgrammaticalpartofspeech/noun.md): A noun, as used as a part of speech.
- [NSGrammaticalPartOfSpeechConjunction](nsgrammaticalpartofspeech/conjunction.md): A conjunction, as used as a part of speech.
- [NSGrammaticalPartOfSpeechNumeral](nsgrammaticalpartofspeech/numeral.md): A numeral, as used as a part of speech.
- [NSGrammaticalPartOfSpeechInterjection](nsgrammaticalpartofspeech/interjection.md): An interjection, as used as a part of speech.
- [NSGrammaticalPartOfSpeechPreposition](nsgrammaticalpartofspeech/preposition.md): A preposition, as used as a part of speech.
- [NSGrammaticalPartOfSpeechAbbreviation](nsgrammaticalpartofspeech/abbreviation.md): An abbreviation, as used as a part of speech.
- [NSGrammaticalPartOfSpeechNotSet](nsgrammaticalpartofspeech/notset.md): A value that indicates the part of speech is unset.

## See Also

### Accessing Grammatical Properties

- [unspecified](nsmorphology/unspecified.md): A Boolean value that indicates whether this instance specifies no particular grammar.
- [grammaticalGender](nsmorphology/grammaticalgender.md): The grammatical gender used for inflecting strings with this morphology.
- [NSGrammaticalGender](nsgrammaticalgender.md): A representation of grammatical gender, used for inflecting strings.
- [number](nsmorphology/number.md): The grammatical number used for inflecting strings with this morphology.
- [NSGrammaticalNumber](nsgrammaticalnumber.md): A representation of grammatical number, used for inflecting strings.
- [partOfSpeech](nsmorphology/partofspeech.md): The grammatical part of speech used for inflecting strings with this morphology.
