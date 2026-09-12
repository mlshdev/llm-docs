> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangereply/data](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangereply/data)

# data (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The game-specific data that the recipent provides in the exchange request reply.

## Declaration

```swift
var data: Data? { get }
```

## See Also

### Retrieving Reply Details

- [message](message.md): A message from the recipient to the sender of the exchange request.
- [recipient](recipient.md): The participant who replies to the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.

# data (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The game-specific data that the recipent provides in the exchange request reply.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * data;
```

```objectivec
@property (atomic, readonly, nullable) NSData * data;
```

## See Also

### Retrieving Reply Details

- [message](message.md): A message from the recipient to the sender of the exchange request.
- [recipient](recipient.md): The participant who replies to the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.
