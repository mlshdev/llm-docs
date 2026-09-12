> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/alternateproduct](https://developer.apple.com/documentation/retentionmessaging/alternateproduct)

# alternateProduct

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

A switch-plan message and product ID you provide in a real-time response to your Get Retention Message endpoint.

## Declaration

```
object alternateProduct
```

## Properties

- `messageIdentifier` — `messageIdentifier` (required): The message identifier of the text to display in the switch-plan retention message.
- `productId` — `productId` (required): The product identifier of the subscription the retention message suggests for your customer to switch to.
- `billingPlanType` — `billingPlanType`:

## Mentioned In

- [Retention Messaging API changelog](retention-messaging-changelog.md)
- [Setting up retention messages](setting-up-retention-messages.md)

<a id="Discussion"></a>

## Discussion

In your [RealtimeResponseBody](realtimeresponsebody.md) real-time response, you can choose from mutually exclusive options. Include `alternateProduct` in your response to provide a switch-plan retention message.

Use the product identifier in [DecodedRealtimeRequestBody](decodedrealtimerequestbody.md) to determine the customer’s current subscription. Choose an alternative subscription from the same subscription group.

The message identifier needs to refer to a message that doesn’t include an image and that has a [messageState](messagestate.md) of `APPROVED`; otherwise, the retention message fails. For more information about setting up messages, see [Upload Message](upload-message.md).

## See Also

### Real-time response body

- [message](message.md): A message identifier you provide in a real-time response to your Get Retention Message endpoint.
- [promotionalOffer](promotionaloffer.md): A promotional offer and message you provide in a real-time response to your Get Retention Message endpoint.
- [advancedCommerceInfo](advancedcommerceinfo.md): A response object you provide to present an offer or switch-plan recommendation message.
