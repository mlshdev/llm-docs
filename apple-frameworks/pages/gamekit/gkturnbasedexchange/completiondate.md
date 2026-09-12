> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/completiondate](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/completiondate)

# completionDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date when all recipients of the exchange request reply.

## Declaration

```swift
var completionDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

The date the exchange [status](status.md) property becomes [GKTurnBasedExchangeStatus.complete](../gkturnbasedexchangestatus/complete.md).

## See Also

### Replying to Exchange Requests

- [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](replies.md): The replies from recipients of the exchange request.
- [status](status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.

# completionDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The date when all recipients of the exchange request reply.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * completionDate;
```

```objectivec
@property (atomic, readonly, nullable) NSDate * completionDate;
```

<a id="Discussion"></a>

## Discussion

The date the exchange [status](status.md) property becomes [GKTurnBasedExchangeStatusComplete](../gkturnbasedexchangestatus/complete.md).

## See Also

### Replying to Exchange Requests

- [replyWithLocalizableMessageKey:arguments:data:completionHandler:](reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](replies.md): The replies from recipients of the exchange request.
- [status](status.md): The status of the exchange request.
- [GKTurnBasedExchangeStatus](../gkturnbasedexchangestatus.md): The status of an exchange or reply.
