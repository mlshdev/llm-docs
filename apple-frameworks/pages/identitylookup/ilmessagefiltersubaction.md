> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltersubaction](https://developer.apple.com/documentation/identitylookup/ilmessagefiltersubaction)

# ILMessageFilterSubAction (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Responds to a received message with a filter subaction.

## Declaration

```swift
enum ILMessageFilterSubAction
```

## Topics

### Transactional Subactions

- [ILMessageFilterSubAction.none](ilmessagefiltersubaction/none.md): Allows the system to show the message unfiltered due to insufficient information to determine an action.
- [ILMessageFilterSubAction.transactionalOthers](ilmessagefiltersubaction/transactionalothers.md): Prevents the system from showing the message normally, filtered as an Others message.
- [ILMessageFilterSubAction.transactionalFinance](ilmessagefiltersubaction/transactionalfinance.md): Prevents the system from showing the message normally, filtered as a Finance message.
- [ILMessageFilterSubAction.transactionalOrders](ilmessagefiltersubaction/transactionalorders.md): Prevents the system from showing the message normally, filtered as an Orders (eCommerce) message.
- [ILMessageFilterSubAction.transactionalReminders](ilmessagefiltersubaction/transactionalreminders.md): Prevents the system from showing the message normally, filtered as a Reminder message.
- [ILMessageFilterSubAction.transactionalHealth](ilmessagefiltersubaction/transactionalhealth.md): Prevents the system from showing the message normally, filtered as a Health message.
- [ILMessageFilterSubAction.transactionalWeather](ilmessagefiltersubaction/transactionalweather.md): Prevents the system from showing the message normally, filtered as a Weather message.
- [ILMessageFilterSubAction.transactionalCarrier](ilmessagefiltersubaction/transactionalcarrier.md): Prevents the system from showing the message normally, filtered as a Carrier message.
- [ILMessageFilterSubAction.transactionalRewards](ilmessagefiltersubaction/transactionalrewards.md): Prevents the system from showing the message normally, filtered as a Rewards message.
- [ILMessageFilterSubAction.transactionalPublicServices](ilmessagefiltersubaction/transactionalpublicservices.md): Prevents the system from showing the message normally, filtered as a Government message.

### Promotional Subactions

- [ILMessageFilterSubAction.promotionalOthers](ilmessagefiltersubaction/promotionalothers.md): Prevents the system from showing the message normally, filtered as an Others message.
- [ILMessageFilterSubAction.promotionalOffers](ilmessagefiltersubaction/promotionaloffers.md): Prevents the system from showing the message normally, filtered as an Offers message.
- [ILMessageFilterSubAction.promotionalCoupons](ilmessagefiltersubaction/promotionalcoupons.md): Prevents the system from showing the message normally, filtered as an Coupons message.

### Initializers

- [init(rawValue:)](ilmessagefiltersubaction/init%28rawvalue_%29.md)

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

- [ILMessageFilterCapabilitiesQueryResponse](ilmessagefiltercapabilitiesqueryresponse.md): A response to a message filter capabilities query request.

# ILMessageFilterSubAction (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Responds to a received message with a filter subaction.

## Declaration

```objectivec
enum ILMessageFilterSubAction : NSInteger;
```

## Topics

### Transactional Subactions

- [ILMessageFilterSubActionNone](ilmessagefiltersubaction/none.md): Allows the system to show the message unfiltered due to insufficient information to determine an action.
- [ILMessageFilterSubActionTransactionalOthers](ilmessagefiltersubaction/transactionalothers.md): Prevents the system from showing the message normally, filtered as an Others message.
- [ILMessageFilterSubActionTransactionalFinance](ilmessagefiltersubaction/transactionalfinance.md): Prevents the system from showing the message normally, filtered as a Finance message.
- [ILMessageFilterSubActionTransactionalOrders](ilmessagefiltersubaction/transactionalorders.md): Prevents the system from showing the message normally, filtered as an Orders (eCommerce) message.
- [ILMessageFilterSubActionTransactionalReminders](ilmessagefiltersubaction/transactionalreminders.md): Prevents the system from showing the message normally, filtered as a Reminder message.
- [ILMessageFilterSubActionTransactionalHealth](ilmessagefiltersubaction/transactionalhealth.md): Prevents the system from showing the message normally, filtered as a Health message.
- [ILMessageFilterSubActionTransactionalWeather](ilmessagefiltersubaction/transactionalweather.md): Prevents the system from showing the message normally, filtered as a Weather message.
- [ILMessageFilterSubActionTransactionalCarrier](ilmessagefiltersubaction/transactionalcarrier.md): Prevents the system from showing the message normally, filtered as a Carrier message.
- [ILMessageFilterSubActionTransactionalRewards](ilmessagefiltersubaction/transactionalrewards.md): Prevents the system from showing the message normally, filtered as a Rewards message.
- [ILMessageFilterSubActionTransactionalPublicServices](ilmessagefiltersubaction/transactionalpublicservices.md): Prevents the system from showing the message normally, filtered as a Government message.

### Promotional Subactions

- [ILMessageFilterSubActionPromotionalOthers](ilmessagefiltersubaction/promotionalothers.md): Prevents the system from showing the message normally, filtered as an Others message.
- [ILMessageFilterSubActionPromotionalOffers](ilmessagefiltersubaction/promotionaloffers.md): Prevents the system from showing the message normally, filtered as an Offers message.
- [ILMessageFilterSubActionPromotionalCoupons](ilmessagefiltersubaction/promotionalcoupons.md): Prevents the system from showing the message normally, filtered as an Coupons message.

## See Also

### Responses

- [ILMessageFilterCapabilitiesQueryResponse](ilmessagefiltercapabilitiesqueryresponse.md): A response to a message filter capabilities query request.
