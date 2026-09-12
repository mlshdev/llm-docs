> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangereply/message](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangereply/message)

# message (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A message from the recipient to the sender of the exchange request.

## Declaration

```swift
var message: String? { get }
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [recipient](recipient.md): The participant who replies to the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.

# message (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A message from the recipient to the sender of the exchange request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * message;
```

```objectivec
@property (atomic, readonly, nullable) NSString * message;
```

## See Also

### Retrieving Reply Details

- [data](data.md): The game-specific data that the recipent provides in the exchange request reply.
- [recipient](recipient.md): The participant who replies to the exchange request.
- [replyDate](replydate.md): The date the recipient replies to the exchange request.
