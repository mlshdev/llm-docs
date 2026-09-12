> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangereply/recipient](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangereply/recipient)

# recipient (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant who replies to the exchange request.

## Declaration

```swift
var recipient: GKTurnBasedParticipant { get }
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](message.md): A message from the recipient to the sender of the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.

# recipient (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant who replies to the exchange request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GKTurnBasedParticipant * recipient;
```

```objectivec
@property (atomic, readonly, nullable) GKTurnBasedParticipant * recipient;
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](message.md): A message from the recipient to the sender of the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.
