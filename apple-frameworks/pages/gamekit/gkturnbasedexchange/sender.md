> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/sender](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/sender)

# sender (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant who sends the exchange request to recipients.

## Declaration

```swift
var sender: GKTurnBasedParticipant { get }
```

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

## See Also

### Retrieving Exchange Details

- [exchangeID](exchangeid.md): The identifier for the exchange request.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](timeoutdate.md): The date that the recipients must reply by before the exchange request times out.

# sender (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The participant who sends the exchange request to recipients.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GKTurnBasedParticipant * sender;
```

```objectivec
@property (atomic, readonly, nullable) GKTurnBasedParticipant * sender;
```

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

## See Also

### Retrieving Exchange Details

- [exchangeID](exchangeid.md): The identifier for the exchange request.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](timeoutdate.md): The date that the recipients must reply by before the exchange request times out.
