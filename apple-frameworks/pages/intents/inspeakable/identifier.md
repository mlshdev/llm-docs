> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable/identifier](https://developer.apple.com/documentation/intents/inspeakable/identifier)

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The identifier associated with the string in your app’s custom vocabulary file.

> Use [vocabularyIdentifier](vocabularyidentifier.md) instead.

## Declaration

```swift
optional var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

For phrases that are included in your app’s `AppIntentVocabulary.plist` file, this property contains the value of the `VocabularyItemIdentifier` key associated with that phrase. When determining the resolution for speakable strings, you can use this identifier (when present) to validate and resolve the term to a known phrase.

If the specified phrase was not defined in your vocabulary file, this property is `nil`.

## See Also

### Getting the Identifier

- [vocabularyIdentifier](vocabularyidentifier.md): The identifier associated with the string in your app’s custom vocabulary file.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · tvOS 14.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The identifier associated with the string in your app’s custom vocabulary file.

> Use [vocabularyIdentifier](vocabularyidentifier.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * identifier;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

For phrases that are included in your app’s `AppIntentVocabulary.plist` file, this property contains the value of the `VocabularyItemIdentifier` key associated with that phrase. When determining the resolution for speakable strings, you can use this identifier (when present) to validate and resolve the term to a known phrase.

If the specified phrase was not defined in your vocabulary file, this property is `nil`.

## See Also

### Getting the Identifier

- [vocabularyIdentifier](vocabularyidentifier.md): The identifier associated with the string in your app’s custom vocabulary file.
