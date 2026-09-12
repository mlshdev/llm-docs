> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobject/identifier](https://developer.apple.com/documentation/intents/inobject/identifier)

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A string that identifies the custom intent object within your app.

## Declaration

```swift
var identifier: String? { get }
```

## See Also

### Describing the Object for the System

- [pronunciationHint](pronunciationhint.md): A hint that describes how to pronounce the custom intent object.
- [alternativeSpeakableMatches](alternativespeakablematches.md): An array of alternative speakable strings that identify the object.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

A string that identifies the custom intent object within your app.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * identifier;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSString * identifier;
```

## See Also

### Describing the Object for the System

- [pronunciationHint](pronunciationhint.md): A hint that describes how to pronounce the custom intent object.
- [alternativeSpeakableMatches](alternativespeakablematches.md): An array of alternative speakable strings that identify the object.
