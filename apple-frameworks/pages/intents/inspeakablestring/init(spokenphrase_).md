> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakablestring/init(spokenphrase:)](https://developer.apple.com/documentation/intents/inspeakablestring/init(spokenphrase:))

# init(spokenPhrase:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.1+

Initializes the string with the specified phrase.

## Declaration

```swift
convenience init(spokenPhrase: String)
```

## Parameters

- `spokenPhrase`: The phrase to be spoken.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [init(vocabularyIdentifier:spokenPhrase:pronunciationHint:)](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.
- [init(identifier:spokenPhrase:pronunciationHint:)](init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.

# initWithSpokenPhrase: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the string with the specified phrase.

## Declaration

```objectivec
- (instancetype) initWithSpokenPhrase:(NSString *) spokenPhrase;
```

## Parameters

- `spokenPhrase`: The phrase to be spoken.

<a id="return-value"></a>

## Return Value

An initialized speakable string object.

## See Also

### Initializing a Speakable String

- [initWithVocabularyIdentifier:spokenPhrase:pronunciationHint:](init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.
- [initWithIdentifier:spokenPhrase:pronunciationHint:](init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.
