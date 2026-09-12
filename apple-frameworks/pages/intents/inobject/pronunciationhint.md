> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/pronunciationhint](https://developer.apple.com/documentation/intents/inobject/pronunciationhint)

# pronunciationHint (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A hint that describes how to pronounce the custom intent object.

## Declaration

```swift
var pronunciationHint: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property provides a soundalike equivalent of the object’s [displayString](displaystring.md) to Siri, rather than a phonetic spelling. For example, the phrase “iTunes” might have “eye toons” as its pronunciation string.

## See Also

### Describing the Object for the System

- [identifier](identifier.md): A string that identifies the custom intent object within your app.
- [alternativeSpeakableMatches](alternativespeakablematches.md): An array of alternative speakable strings that identify the object.

# pronunciationHint (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A hint that describes how to pronounce the custom intent object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * pronunciationHint;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSString * pronunciationHint;
```

<a id="Discussion"></a>

## Discussion

This property provides a soundalike equivalent of the object’s [displayString](displaystring.md) to Siri, rather than a phonetic spelling. For example, the phrase “iTunes” might have “eye toons” as its pronunciation string.

## See Also

### Describing the Object for the System

- [identifier](identifier.md): A string that identifies the custom intent object within your app.
- [alternativeSpeakableMatches](alternativespeakablematches.md): An array of alternative speakable strings that identify the object.
