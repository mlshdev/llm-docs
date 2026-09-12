> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaydeferredpaymentrequest/tokennotificationurl](https://developer.apple.com/documentation/applepayontheweb/applepaydeferredpaymentrequest/tokennotificationurl)

# tokenNotificationURL

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

## Declaration

```
DOMString tokenNotificationURL;
```

<a id="Discussion"></a>

## Discussion

If you don’t set this property, the framework doesn’t send notifications when life-cycle changes occur for the token, for example when the framework deletes the token.

## See Also

### Managing payment tokens

- [managementURL](managementurl.md): A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.
