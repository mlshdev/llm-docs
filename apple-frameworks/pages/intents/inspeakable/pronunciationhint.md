> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable/pronunciationhint](https://developer.apple.com/documentation/intents/inspeakable/pronunciationhint)

# pronunciationHint (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A hint at how the spoken phrase is pronounced.

## Declaration

```swift
var pronunciationHint: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value provides a hint to Siri about how a string is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could be have “eye toons” as its pronunciation string.

## See Also

### Getting the Spoken Attributes

- [spokenPhrase](spokenphrase.md): The phrase identified by Siri.

# pronunciationHint (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A hint at how the spoken phrase is pronounced.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * pronunciationHint;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSString * pronunciationHint;
```

<a id="Discussion"></a>

## Discussion

This value provides a hint to Siri about how a string is pronounced. This string is not a phonetic spelling of the original phrase, but is a string that has an equivalent sound when spoken. For example, the phrase “iTunes” could be have “eye toons” as its pronunciation string.

## See Also

### Getting the Spoken Attributes

- [spokenPhrase](spokenphrase.md): The phrase identified by Siri.
