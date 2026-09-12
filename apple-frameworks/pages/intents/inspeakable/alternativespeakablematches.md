> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable/alternativespeakablematches](https://developer.apple.com/documentation/intents/inspeakable/alternativespeakablematches)

# alternativeSpeakableMatches (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An array of alternative phrases that match the current phrase.

## Declaration

```swift
var alternativeSpeakableMatches: [any INSpeakable]? { get }
```

# alternativeSpeakableMatches (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An array of alternative phrases that match the current phrase.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSArray<id<INSpeakable>> * alternativeSpeakableMatches;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSArray<id<INSpeakable>> * alternativeSpeakableMatches;
```
