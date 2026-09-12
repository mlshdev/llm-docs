> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordfilter/participants](https://developer.apple.com/documentation/intents/incallrecordfilter/participants)

# participants (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The recipient of the user’s call request.

## Declaration

```swift
var participants: [INPerson]? { get }
```

# participants (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

The recipient of the user’s call request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * participants;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * participants;
```
