> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/status](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/status)

# status (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of the exchange request.

## Declaration

```swift
var status: GKTurnBasedExchangeStatus { get }
```

## See Also

### Replying to Exchange Requests

- [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](replies.md): The replies from recipients of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](completiondate.md): The date when all recipients of the exchange request reply.

# status (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of the exchange request.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) GKTurnBasedExchangeStatus status;
```

```objectivec
@property (atomic, assign, readonly) GKTurnBasedExchangeStatus status;
```

## See Also

### Replying to Exchange Requests

- [replyWithLocalizableMessageKey:arguments:data:completionHandler:](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](replies.md): The replies from recipients of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](completiondate.md): The date when all recipients of the exchange request reply.
