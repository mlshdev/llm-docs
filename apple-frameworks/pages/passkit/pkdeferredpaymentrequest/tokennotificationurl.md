> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/tokennotificationurl](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/tokennotificationurl)

# tokenNotificationURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

## Declaration

```swift
var tokenNotificationURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t set this property, the framework doesn’t send notifications when life-cycle changes occur for the token, for example when the framework deletes the token.

## See Also

### Managing payment tokens

- [managementURL](managementurl.md): A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.

# tokenNotificationURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSURL * tokenNotificationURL;
```

<a id="Discussion"></a>

## Discussion

If you don’t set this property, the framework doesn’t send notifications when life-cycle changes occur for the token, for example when the framework deletes the token.

## See Also

### Managing payment tokens

- [managementURL](managementurl.md): A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.
