> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable/vocabularyidentifier](https://developer.apple.com/documentation/intents/inspeakable/vocabularyidentifier)

# vocabularyIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The identifier associated with the string in your app’s custom vocabulary file.

## Declaration

```swift
var vocabularyIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

For phrases that are included in your app’s `AppIntentVocabulary.plist` file, this property contains the value of the `VocabularyItemIdentifier` key associated with that phrase. When determining the resolution for speakable strings, you can use this identifier (when present) to validate and resolve the term to a known phrase.

If the specified phrase was not defined in your vocabulary file, this property is `nil`.

## See Also

### Getting the Identifier

- [identifier](identifier.md): Deprecated. The identifier associated with the string in your app’s custom vocabulary file.

# vocabularyIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The identifier associated with the string in your app’s custom vocabulary file.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * vocabularyIdentifier;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSString * vocabularyIdentifier;
```

<a id="Discussion"></a>

## Discussion

For phrases that are included in your app’s `AppIntentVocabulary.plist` file, this property contains the value of the `VocabularyItemIdentifier` key associated with that phrase. When determining the resolution for speakable strings, you can use this identifier (when present) to validate and resolve the term to a known phrase.

If the specified phrase was not defined in your vocabulary file, this property is `nil`.

## See Also

### Getting the Identifier

- [identifier](identifier.md): Deprecated. The identifier associated with the string in your app’s custom vocabulary file.
