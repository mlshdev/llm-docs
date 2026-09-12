> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrecurringpaymentrequest/tokennotificationurl](https://developer.apple.com/documentation/applepayontheweb/applepayrecurringpaymentrequest/tokennotificationurl)

# tokenNotificationURL

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A URL you provide for receiving life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.

## Declaration

```
DOMString tokenNotificationURL;
```

<a id="Discussion"></a>

## Discussion

The [tokenNotificationURL](tokennotificationurl.md) is optional. Set this property to receive notifications for life-cycle updates to the merchant token, for example, when the card issuer or the user deletes the merchant token.

For more information about handling merchant token life-cycle notifications, see [Receiving and handling merchant token notifications](https://developer.apple.com/documentation/applepaymerchanttokenmanagementapi/receiving-and-handling-merchant-token-notifications).
