> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchangestatus](https://developer.apple.com/documentation/gamekit/gkturnbasedexchangestatus)

# GKTurnBasedExchangeStatus (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of an exchange or reply.

## Declaration

```swift
enum GKTurnBasedExchangeStatus
```

## Topics

### Statuses

- [GKTurnBasedExchangeStatus.unknown](gkturnbasedexchangestatus/unknown.md): The state of the exchange request is unknown.
- [GKTurnBasedExchangeStatus.active](gkturnbasedexchangestatus/active.md): GameKit sent the exchange request to recipients but not all recipients replied.
- [GKTurnBasedExchangeStatus.complete](gkturnbasedexchangestatus/complete.md): All recipients of the exchange request replied.
- [GKTurnBasedExchangeStatus.resolved](gkturnbasedexchangestatus/resolved.md): The current participant saved the exchange request.
- [GKTurnBasedExchangeStatus.canceled](gkturnbasedexchangestatus/canceled.md): The sender canceled the exchange request.

### Initializers

- [init(rawValue:)](gkturnbasedexchangestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Replying to Exchange Requests

- [reply(withLocalizableMessageKey:arguments:data:completionHandler:)](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](gkturnbasedexchange/replies.md): The replies from recipients of the exchange request.
- [status](gkturnbasedexchange/status.md): The status of the exchange request.
- [completionDate](gkturnbasedexchange/completiondate.md): The date when all recipients of the exchange request reply.

# GKTurnBasedExchangeStatus (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The status of an exchange or reply.

## Declaration

```objectivec
enum GKTurnBasedExchangeStatus : int8_t;
```

## Topics

### Statuses

- [GKTurnBasedExchangeStatusUnknown](gkturnbasedexchangestatus/unknown.md): The state of the exchange request is unknown.
- [GKTurnBasedExchangeStatusActive](gkturnbasedexchangestatus/active.md): GameKit sent the exchange request to recipients but not all recipients replied.
- [GKTurnBasedExchangeStatusComplete](gkturnbasedexchangestatus/complete.md): All recipients of the exchange request replied.
- [GKTurnBasedExchangeStatusResolved](gkturnbasedexchangestatus/resolved.md): The current participant saved the exchange request.
- [GKTurnBasedExchangeStatusCanceled](gkturnbasedexchangestatus/canceled.md): The sender canceled the exchange request.

## See Also

### Replying to Exchange Requests

- [replyWithLocalizableMessageKey:arguments:data:completionHandler:](gkturnbasedexchange/reply%28withlocalizablemessagekey_arguments_data_completionhandler_%29.md): Replies to an exchange request on behalf of a recipient.
- [replies](gkturnbasedexchange/replies.md): The replies from recipients of the exchange request.
- [status](gkturnbasedexchange/status.md): The status of the exchange request.
- [completionDate](gkturnbasedexchange/completiondate.md): The date when all recipients of the exchange request reply.
