> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/exchangeid](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/exchangeid)

# exchangeID (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the exchange request.

## Declaration

```swift
var exchangeID: String { get }
```

## See Also

### Retrieving Exchange Details

- [sender](sender.md): The participant who sends the exchange request to recipients.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](timeoutdate.md): The date that the recipients must reply by before the exchange request times out.

# exchangeID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the exchange request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * exchangeID;
```

```objectivec
@property (atomic, readonly, nullable) NSString * exchangeID;
```

## See Also

### Retrieving Exchange Details

- [sender](sender.md): The participant who sends the exchange request to recipients.
- [recipients](recipients.md): The participants who receives the exchange request.
- [data](data.md): The game-specific exchange data that GameKit sends to participants.
- [message](message.md): A localized message from the sender to the recipients of an exchange request.
- [sendDate](senddate.md): The date that the sender initiates the exchange request.
- [timeoutDate](timeoutdate.md): The date that the recipients must reply by before the exchange request times out.
