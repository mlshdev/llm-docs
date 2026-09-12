> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invocabulary/removeallvocabularystrings()](https://developer.apple.com/documentation/intents/invocabulary/removeallvocabularystrings())

# removeAllVocabularyStrings() (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all user-specific vocabulary strings.

## Declaration

```swift
func removeAllVocabularyStrings()
```

<a id="Discussion"></a>

## Discussion

This method removes all strings (regardless of type) that you previously registered for this user using the [setVocabularyStrings(\_:of:)](setvocabularystrings%28__of_%29.md) method.

## See Also

### Updating the User-Specific Vocabulary

- [setVocabulary(\_:of:)](setvocabulary%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [INVocabularyStringType](../invocabularystringtype.md): Possible usages for a custom vocabulary term.
- [setVocabularyStrings(\_:of:)](setvocabularystrings%28__of_%29.md): Registers the specified vocabulary strings with the user.

# removeAllVocabularyStrings (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all user-specific vocabulary strings.

## Declaration

```objectivec
- (void) removeAllVocabularyStrings;
```

<a id="Discussion"></a>

## Discussion

This method removes all strings (regardless of type) that you previously registered for this user using the [setVocabularyStrings:ofType:](setvocabularystrings%28__of_%29.md) method.

## See Also

### Updating the User-Specific Vocabulary

- [setVocabulary:ofType:](setvocabulary%28__of_%29.md): Registers the specified vocabulary strings with the user.
- [INVocabularyStringType](../invocabularystringtype.md): Possible usages for a custom vocabulary term.
- [setVocabularyStrings:ofType:](setvocabularystrings%28__of_%29.md): Registers the specified vocabulary strings with the user.
