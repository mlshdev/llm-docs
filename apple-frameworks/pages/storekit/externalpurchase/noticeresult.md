> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchase/noticeresult](https://developer.apple.com/documentation/storekit/externalpurchase/noticeresult)

# ExternalPurchase.NoticeResult

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The options available to people while viewing the external purchase notice sheet.

## Declaration

```swift
enum NoticeResult
```

<a id="overview"></a>

## Overview

These values return when your app calls [presentNoticeSheet()](presentnoticesheet%28%29.md).

## Topics

### Getting notice sheet results

- [ExternalPurchase.NoticeResult.cancelled](noticeresult/cancelled.md): Describes when people chose to cancel and not view external purchases.
- [ExternalPurchase.NoticeResult.continuedWithExternalPurchaseToken(token:)](noticeresult/continuedwithexternalpurchasetoken%28token_%29.md): Describes when people chose to continue to view external purchases, and provides the external purchase token.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Offering an external purchase

- [canPresent](canpresent.md): A Boolean value that indicates whether the app can successfully present the notice sheet to inform people about external purchases.
- [presentNoticeSheet()](presentnoticesheet%28%29.md): Presents a notice sheet from Apple that informs people of external purchases before showing them, and determines if your app can present external purchases
- [SKExternalPurchase](../../bundleresources/information-property-list/skexternalpurchase.md): A string array of country codes that indicates your app supports external purchases.
