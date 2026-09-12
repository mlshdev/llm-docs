> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable/spokenphrase](https://developer.apple.com/documentation/intents/inspeakable/spokenphrase)

# spokenPhrase (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The phrase identified by Siri.

## Declaration

```swift
var spokenPhrase: String { get }
```

## Mentioned In

- [Handling an Intent](../../sirikit/handling-an-intent.md)

<a id="Discussion"></a>

## Discussion

Typically, this phrase corresponds to a custom term defined in the `AppIntentVocabulary.plist` file of your Intents extension, but it may also be a custom phrase spoken by the user. In both cases, it represents a term that you must resolve as part of handling an intent. For example, it might contain a workout name that you must resolve.

## See Also

### Getting the Spoken Attributes

- [pronunciationHint](pronunciationhint.md): A hint at how the spoken phrase is pronounced.

# spokenPhrase (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The phrase identified by Siri.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) NSString * spokenPhrase;
```

```objectivec
@property (atomic, strong, readonly, nonnull) NSString * spokenPhrase;
```

## Mentioned In

- [Handling an Intent](../../sirikit/handling-an-intent.md)

<a id="Discussion"></a>

## Discussion

Typically, this phrase corresponds to a custom term defined in the `AppIntentVocabulary.plist` file of your Intents extension, but it may also be a custom phrase spoken by the user. In both cases, it represents a term that you must resolve as part of handling an intent. For example, it might contain a workout name that you must resolve.

## See Also

### Getting the Spoken Attributes

- [pronunciationHint](pronunciationhint.md): A hint at how the spoken phrase is pronounced.
