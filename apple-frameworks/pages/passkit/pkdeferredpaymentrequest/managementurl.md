> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/managementurl](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/managementurl)

# managementURL (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.

## Declaration

```swift
var managementURL: URL { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  It’s a best practice to use a universal link for this URL. Using a universal link, the same link can direct a person to a page in the app (if they’ve installed the app) or to a page on the merchant’s web site. For more information on adopting universal links, see [Universal links](https://developer.apple.com/ios/universal-links/).

## See Also

### Managing payment tokens

- [tokenNotificationURL](tokennotificationurl.md): A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

# managementURL (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.

## Declaration

```objectivec
@property (nonatomic, strong) NSURL * managementURL;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  It’s a best practice to use a universal link for this URL. Using a universal link, the same link can direct a person to a page in the app (if they’ve installed the app) or to a page on the merchant’s web site. For more information on adopting universal links, see [Universal links](https://developer.apple.com/ios/universal-links/).

## See Also

### Managing payment tokens

- [tokenNotificationURL](tokennotificationurl.md): A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.
