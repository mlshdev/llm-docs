> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/replies](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/replies)

# replies (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The replies from recipients of the exchange request.

## Declaration

```swift
var replies: [GKTurnBasedExchangeReply]? { get }
```

## See Also

### Replying to Exchange Requests

- [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [status](status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](completiondate.md): The date when all recipients of the exchange request reply.

# replies (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The replies from recipients of the exchange request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<GKTurnBasedExchangeReply *> * replies;
```

```objectivec
@property (atomic, readonly, nullable) NSArray<GKTurnBasedExchangeReply *> * replies;
```

## See Also

### Replying to Exchange Requests

- [replyWithLocalizableMessageKey:arguments:data:completionHandler:](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [status](status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.
- [completionDate](completiondate.md): The date when all recipients of the exchange request reply.
