> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inmessage/sender

# sender (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person who sent the message.

## Declaration

```swift
@NSCopying var sender: INPerson? { get }
```

## See Also

### Getting the Participants

- [recipients](recipients.md): The people who received the message.

# sender (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person who sent the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * sender;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * sender;
```

## See Also

### Getting the Participants

- [recipients](recipients.md): The people who received the message.
