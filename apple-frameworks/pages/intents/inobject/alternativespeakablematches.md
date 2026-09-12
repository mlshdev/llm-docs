> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/alternativespeakablematches](https://developer.apple.com/documentation/intents/inobject/alternativespeakablematches)

# alternativeSpeakableMatches (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array of alternative speakable strings that identify the object.

## Declaration

```swift
var alternativeSpeakableMatches: [INSpeakableString]? { get set }
```

## See Also

### Describing the Object for the System

- [identifier](identifier.md): A string that identifies the custom intent object within your app.
- [pronunciationHint](pronunciationhint.md): A hint that describes how to pronounce the custom intent object.

# alternativeSpeakableMatches (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An array of alternative speakable strings that identify the object.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSArray<INSpeakableString *> * alternativeSpeakableMatches;
```

```objectivec
@property (atomic, strong, readwrite, nullable) NSArray<INSpeakableString *> * alternativeSpeakableMatches;
```

## See Also

### Describing the Object for the System

- [identifier](identifier.md): A string that identifies the custom intent object within your app.
- [pronunciationHint](pronunciationhint.md): A hint that describes how to pronounce the custom intent object.
