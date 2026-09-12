> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgrammaticalnumber](https://developer.apple.com/documentation/foundation/nsgrammaticalnumber)

# NSGrammaticalNumber (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical number, used for inflecting strings.

## Declaration

```swift
enum NSGrammaticalNumber
```

## Topics

### Determining Grammatical Number

- [NSGrammaticalNumber.zero](nsgrammaticalnumber/zero.md): Zero persons or things, as used for a grammatical number.
- [NSGrammaticalNumber.singular](nsgrammaticalnumber/singular.md): A single person or thing, as used for a grammatical number.
- [NSGrammaticalNumber.plural](nsgrammaticalnumber/plural.md): Multiple persons or things, as used for a grammatical number.
- [NSGrammaticalNumber.pluralTwo](nsgrammaticalnumber/pluraltwo.md): Two persons or things, as used for a grammatical number.
- [NSGrammaticalNumber.pluralFew](nsgrammaticalnumber/pluralfew.md): A small number of persons or things, as used for a grammatical number.
- [NSGrammaticalNumber.pluralMany](nsgrammaticalnumber/pluralmany.md): A large number of persons or things, as used for a grammatical number.
- [NSGrammaticalNumber.notSet](nsgrammaticalnumber/notset.md): A value that indicates the number is unset.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/foundation/nsgrammaticalnumber/init%28rawvalue:%29)

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
- [NSGrammaticalPartOfSpeech](nsgrammaticalpartofspeech.md): A representation of grammatical parts of speech, used for inflecting strings.

# NSGrammaticalNumber (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of grammatical number, used for inflecting strings.

## Declaration

```objectivec
enum NSGrammaticalNumber : NSInteger;
```

## Topics

### Determining Grammatical Number

- [NSGrammaticalNumberZero](nsgrammaticalnumber/zero.md): Zero persons or things, as used for a grammatical number.
- [NSGrammaticalNumberSingular](nsgrammaticalnumber/singular.md): A single person or thing, as used for a grammatical number.
- [NSGrammaticalNumberPlural](nsgrammaticalnumber/plural.md): Multiple persons or things, as used for a grammatical number.
- [NSGrammaticalNumberPluralTwo](nsgrammaticalnumber/pluraltwo.md): Two persons or things, as used for a grammatical number.
- [NSGrammaticalNumberPluralFew](nsgrammaticalnumber/pluralfew.md): A small number of persons or things, as used for a grammatical number.
- [NSGrammaticalNumberPluralMany](nsgrammaticalnumber/pluralmany.md): A large number of persons or things, as used for a grammatical number.
- [NSGrammaticalNumberNotSet](nsgrammaticalnumber/notset.md): A value that indicates the number is unset.

## See Also

### Accessing Grammatical Properties

- [unspecified](nsmorphology/unspecified.md): A Boolean value that indicates whether this instance specifies no particular grammar.
- [grammaticalGender](nsmorphology/grammaticalgender.md): The grammatical gender used for inflecting strings with this morphology.
- [NSGrammaticalGender](nsgrammaticalgender.md): A representation of grammatical gender, used for inflecting strings.
- [number](nsmorphology/number.md): The grammatical number used for inflecting strings with this morphology.
- [partOfSpeech](nsmorphology/partofspeech.md): The grammatical part of speech used for inflecting strings with this morphology.
- [NSGrammaticalPartOfSpeech](nsgrammaticalpartofspeech.md): A representation of grammatical parts of speech, used for inflecting strings.
