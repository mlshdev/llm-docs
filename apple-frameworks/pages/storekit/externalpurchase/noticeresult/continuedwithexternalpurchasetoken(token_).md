> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchase/noticeresult/continuedwithexternalpurchasetoken(token:)](https://developer.apple.com/documentation/storekit/externalpurchase/noticeresult/continuedwithexternalpurchasetoken(token:))

# ExternalPurchase.NoticeResult.continuedWithExternalPurchaseToken(token:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Describes when people chose to continue to view external purchases, and provides the external purchase token.

## Declaration

```swift
case continuedWithExternalPurchaseToken(token: String)
```

## Parameters

- `token`: The external purchase token.

## Mentioned In

- [Receiving and decoding external purchase tokens](../../receiving-and-decoding-external-purchase-tokens.md)

<a id="Discussion"></a>

## Discussion

When your app calls [presentNoticeSheet()](../presentnoticesheet%28%29.md) and it results in this value: [ExternalPurchase.NoticeResult.continuedWithExternalPurchaseToken(token:)](continuedwithexternalpurchasetoken%28token_%29.md), your app can proceed to present external purchases.

> **Important**

>  Record and use the token to report the customer’s external purchases to Apple. For more information, see [External Purchase Server API](../../../externalpurchaseserverapi.md).

\`\`

## See Also

### Getting notice sheet results

- [ExternalPurchase.NoticeResult.cancelled](cancelled.md): Describes when people chose to cancel and not view external purchases.
