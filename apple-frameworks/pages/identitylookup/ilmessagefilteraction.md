> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilteraction](https://developer.apple.com/documentation/identitylookup/ilmessagefilteraction)

# ILMessageFilterAction (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Responds to a received message with a filter action.

## Declaration

```swift
enum ILMessageFilterAction
```

## Topics

### Filter Actions

- [ILMessageFilterAction.none](ilmessagefilteraction/none.md): Allows the system to show the message unfiltered due to insufficient information to determine an action.
- [ILMessageFilterAction.allow](ilmessagefilteraction/allow.md): Allows the system to show the message unfiltered.
- [ILMessageFilterAction.junk](ilmessagefilteraction/junk.md): Prevents the system from showing the message normally, filtered as a Junk message.
- [ILMessageFilterAction.promotion](ilmessagefilteraction/promotion.md): Prevents the system from showing the message normally, filtered as a Promotional message.
- [ILMessageFilterAction.transaction](ilmessagefilteraction/transaction.md): Prevents the system from showing the message normally, filtered as a Transactional message.

### Deprecations

- [filter](ilmessagefilteraction/filter.md): Deprecated. Prevents the system from showing the message unfiltered.

### Initializers

- [init(rawValue:)](ilmessagefilteraction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responses

- [ILMessageFilterQueryResponse](ilmessagefilterqueryresponse.md): A response to a message filter query request.
- [ILNetworkResponse](ilnetworkresponse.md): A response to an HTTPS network request performed on behalf of a Message Filter app extension.

# ILMessageFilterAction (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Responds to a received message with a filter action.

## Declaration

```objectivec
enum ILMessageFilterAction : NSInteger;
```

## Topics

### Filter Actions

- [ILMessageFilterActionNone](ilmessagefilteraction/none.md): Allows the system to show the message unfiltered due to insufficient information to determine an action.
- [ILMessageFilterActionAllow](ilmessagefilteraction/allow.md): Allows the system to show the message unfiltered.
- [ILMessageFilterActionJunk](ilmessagefilteraction/junk.md): Prevents the system from showing the message normally, filtered as a Junk message.
- [ILMessageFilterActionPromotion](ilmessagefilteraction/promotion.md): Prevents the system from showing the message normally, filtered as a Promotional message.
- [ILMessageFilterActionTransaction](ilmessagefilteraction/transaction.md): Prevents the system from showing the message normally, filtered as a Transactional message.

### Deprecations

- [ILMessageFilterActionFilter](ilmessagefilteraction/filter.md): Deprecated. Prevents the system from showing the message unfiltered.

## See Also

### Responses

- [ILMessageFilterQueryResponse](ilmessagefilterqueryresponse.md): A response to a message filter query request.
- [ILNetworkResponse](ilnetworkresponse.md): A response to an HTTPS network request performed on behalf of a Message Filter app extension.
