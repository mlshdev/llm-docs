> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakablestring/init(identifier:spokenphrase:pronunciationhint:)](https://developer.apple.com/documentation/intents/inspeakablestring/init(identifier:spokenphrase:pronunciationhint:))

# init(identifier:spokenPhrase:pronunciationHint:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes the string with the specified identifier and phrase information.

> Use [init(vocabularyIdentifier:spokenPhrase:pronunciationHint:)](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md) instead.

## Declaration

```swift
convenience init(identifier: String, spokenPhrase: String, pronunciationHint: String?)
```

## Parameters

- `identifier`: The identifier associated with the phrase in your Intents extension’s custom vocabulary file.
- `spokenPhrase`: The phrase to be spoken.
- `pronunciationHint`: A hint about how the phrase is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could have “eye toons” as its pronunciation string.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [init(spokenPhrase:)](init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [init(vocabularyIdentifier:spokenPhrase:pronunciationHint:)](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.

# initWithIdentifier:spokenPhrase:pronunciationHint: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes the string with the specified identifier and phrase information.

> Use [initWithVocabularyIdentifier:spokenPhrase:pronunciationHint:](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier spokenPhrase:(NSString *) spokenPhrase pronunciationHint:(NSString *) pronunciationHint;
```

## Parameters

- `identifier`: The identifier associated with the phrase in your Intents extension’s custom vocabulary file.
- `spokenPhrase`: The phrase to be spoken.
- `pronunciationHint`: A hint about how the phrase is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could have “eye toons” as its pronunciation string.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [initWithSpokenPhrase:](init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [initWithVocabularyIdentifier:spokenPhrase:pronunciationHint:](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.
