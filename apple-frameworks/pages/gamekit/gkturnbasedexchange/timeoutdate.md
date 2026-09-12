> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/timeoutdate](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/timeoutdate)

# timeoutDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date that the recipients must reply by before the exchange request times out.

## Declaration

```swift
var timeoutDate: Date? { get }
```

## See Also

### Retrieving Exchange Details

- [exchangeID](exchangeid.md): The identifier for the exchange request.
- [sender](sender.md): The participant who sends the exchange request to recipients.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.

# timeoutDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date that the recipients must reply by before the exchange request times out.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * timeoutDate;
```

```objectivec
@property (atomic, readonly, nullable) NSDate * timeoutDate;
```

## See Also

### Retrieving Exchange Details

- [exchangeID](exchangeid.md): The identifier for the exchange request.
- [sender](sender.md): The participant who sends the exchange request to recipients.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.
