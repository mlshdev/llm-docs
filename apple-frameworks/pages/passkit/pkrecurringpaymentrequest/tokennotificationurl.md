> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentrequest/tokennotificationurl](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest/tokennotificationurl)

# tokenNotificationURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.

## Declaration

```swift
var tokenNotificationURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The [tokenNotificationURL](tokennotificationurl.md) is optional. Set this property to receive notifications for life-cycle updates to the merchant token, for example, when the card issuer or the user deletes the merchant token.

For more information about handling merchant token life-cycle notifications, see [Receiving and handling merchant token notifications](../../applepaymerchanttokenmanagementapi/receiving-and-handling-merchant-token-notifications.md).

## See Also

### Managing payment tokens

- [managementURL](managementurl.md): A URL to a web page where the user can update or delete the payment method for the recurring payment.

# tokenNotificationURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSURL * tokenNotificationURL;
```

<a id="Discussion"></a>

## Discussion

The [tokenNotificationURL](tokennotificationurl.md) is optional. Set this property to receive notifications for life-cycle updates to the merchant token, for example, when the card issuer or the user deletes the merchant token.

For more information about handling merchant token life-cycle notifications, see [Receiving and handling merchant token notifications](../../applepaymerchanttokenmanagementapi/receiving-and-handling-merchant-token-notifications.md).

## See Also

### Managing payment tokens

- [managementURL](managementurl.md): A URL to a web page where the user can update or delete the payment method for the recurring payment.
