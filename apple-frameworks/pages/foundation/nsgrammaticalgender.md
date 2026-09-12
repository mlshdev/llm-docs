> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgrammaticalgender](https://developer.apple.com/documentation/foundation/nsgrammaticalgender)

# NSGrammaticalGender (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical gender, used for inflecting strings.

## Declaration

```swift
enum NSGrammaticalGender
```

## Topics

### Determining Grammatical Gender

- [NSGrammaticalGender.feminine](nsgrammaticalgender/feminine.md): The feminine grammatical gender.
- [NSGrammaticalGender.masculine](nsgrammaticalgender/masculine.md): The masculine grammatical gender.
- [NSGrammaticalGender.neuter](nsgrammaticalgender/neuter.md): A value to not specify gender when inflecting a string.
- [NSGrammaticalGender.notSet](nsgrammaticalgender/notset.md): A value that indicates the gender is unset.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/foundation/nsgrammaticalgender/init%28rawvalue:%29)

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

- [NSGrammaticalNumber](nsgrammaticalnumber.md): A representation of grammatical number, used for inflecting strings.
- [NSGrammaticalPartOfSpeech](nsgrammaticalpartofspeech.md): A representation of grammatical parts of speech, used for inflecting strings.

# NSGrammaticalGender (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical gender, used for inflecting strings.

## Declaration

```objectivec
enum NSGrammaticalGender : NSInteger;
```

## Topics

### Determining Grammatical Gender

- [NSGrammaticalGenderFeminine](nsgrammaticalgender/feminine.md): The feminine grammatical gender.
- [NSGrammaticalGenderMasculine](nsgrammaticalgender/masculine.md): The masculine grammatical gender.
- [NSGrammaticalGenderNeuter](nsgrammaticalgender/neuter.md): A value to not specify gender when inflecting a string.
- [NSGrammaticalGenderNotSet](nsgrammaticalgender/notset.md): A value that indicates the gender is unset.

## See Also

### Accessing Grammatical Properties

- [unspecified](nsmorphology/unspecified.md): A Boolean value that indicates whether this instance specifies no particular grammar.
- [grammaticalGender](nsmorphology/grammaticalgender.md): The grammatical gender used for inflecting strings with this morphology.
- [number](nsmorphology/number.md): The grammatical number used for inflecting strings with this morphology.
- [NSGrammaticalNumber](nsgrammaticalnumber.md): A representation of grammatical number, used for inflecting strings.
- [partOfSpeech](nsmorphology/partofspeech.md): The grammatical part of speech used for inflecting strings with this morphology.
- [NSGrammaticalPartOfSpeech](nsgrammaticalpartofspeech.md): A representation of grammatical parts of speech, used for inflecting strings.
