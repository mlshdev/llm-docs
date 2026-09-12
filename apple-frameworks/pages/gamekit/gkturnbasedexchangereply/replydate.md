> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangereply/replydate](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangereply/replydate)

# replyDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date the recipient replies to the exchange request.

## Declaration

```swift
var replyDate: Date { get }
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](message.md): A message from the recipient to the sender of the exchange request.
- [recipient](recipient.md): The participant who replies to the exchange request.

# replyDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date the recipient replies to the exchange request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * replyDate;
```

```objectivec
@property (atomic, readonly, nullable) NSDate * replyDate;
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [message](message.md): A message from the recipient to the sender of the exchange request.
- [recipient](recipient.md): The participant who replies to the exchange request.
