> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakablestring/init(vocabularyidentifier:spokenphrase:pronunciationhint:)](https://developer.apple.com/documentation/intents/inspeakablestring/init(vocabularyidentifier:spokenphrase:pronunciationhint:))

# init(vocabularyIdentifier:spokenPhrase:pronunciationHint:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the string with a phrase from your app’s vocabulary.

## Declaration

```swift
init(vocabularyIdentifier: String, spokenPhrase: String, pronunciationHint: String?)
```

## Parameters

- `vocabularyIdentifier`: The identifier of a phrase that your app registered as part of its vocabulary.
- `spokenPhrase`: The spoken phrase associated with that vocabulary.
- `pronunciationHint`: A hint at how the spoken phrase is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could have “eye toons” as its pronunciation string.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [init(spokenPhrase:)](init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [init(identifier:spokenPhrase:pronunciationHint:)](init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.

# initWithVocabularyIdentifier:spokenPhrase:pronunciationHint: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes the string with a phrase from your app’s vocabulary.

## Declaration

```objectivec
- (instancetype) initWithVocabularyIdentifier:(NSString *) vocabularyIdentifier spokenPhrase:(NSString *) spokenPhrase pronunciationHint:(NSString *) pronunciationHint;
```

## Parameters

- `vocabularyIdentifier`: The identifier of a phrase that your app registered as part of its vocabulary.
- `spokenPhrase`: The spoken phrase associated with that vocabulary.
- `pronunciationHint`: A hint at how the spoken phrase is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could have “eye toons” as its pronunciation string.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [initWithSpokenPhrase:](init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [initWithIdentifier:spokenPhrase:pronunciationHint:](init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.
