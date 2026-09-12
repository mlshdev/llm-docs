> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessage/recipients](https://developer.apple.com/documentation/intents/inmessage/recipients)

# recipients (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The people who received the message.

## Declaration

```swift
var recipients: [INPerson]? { get }
```

## See Also

### Getting the Participants

- [sender](sender.md): The person who sent the message.

# recipients (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The people who received the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

## See Also

### Getting the Participants

- [sender](sender.md): The person who sent the message.
