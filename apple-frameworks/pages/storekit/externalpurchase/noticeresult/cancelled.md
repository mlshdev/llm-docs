> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchase/noticeresult/cancelled](https://developer.apple.com/documentation/storekit/externalpurchase/noticeresult/cancelled)

# ExternalPurchase.NoticeResult.cancelled

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Describes when people chose to cancel and not view external purchases.

## Declaration

```swift
case cancelled
```

<a id="Discussion"></a>

## Discussion

If your app’s call to [presentNoticeSheet()](../presentnoticesheet%28%29.md) results in this value, you must not show external purchases.

## See Also

### Getting notice sheet results

- [ExternalPurchase.NoticeResult.continuedWithExternalPurchaseToken(token:)](continuedwithexternalpurchasetoken%28token_%29.md): Describes when people chose to continue to view external purchases, and provides the external purchase token.
