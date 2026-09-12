> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchasecustomlink/noticeresult](https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/noticeresult)

# ExternalPurchaseCustomLink.NoticeResult

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · tvOS 18.1+ · visionOS 2.1+ · watchOS 11.1+

The result of showing the disclosure notice.

## Declaration

```swift
enum NoticeResult
```

<a id="overview"></a>

## Overview

This value is the result of calling [showNotice(type:)](shownotice%28type_%29.md).

If the value is [ExternalPurchaseCustomLink.NoticeResult.continued](noticeresult/continued.md), the customer choses to continue and your app can communicate and promote offers for purchase in a distribution channel of your choice. Otherwise, don’t continue.

## Topics

### Getting notice results

- [ExternalPurchaseCustomLink.NoticeResult.cancelled](noticeresult/cancelled.md): The customer chooses to cancel; don’t offer external purchases.
- [ExternalPurchaseCustomLink.NoticeResult.continued](noticeresult/continued.md): The customer chooses to continue; the app can offer external purchases.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the disclosure sheet

- [showNotice(type:)](shownotice%28type_%29.md): Displays the system disclosure notice sheet and asks the customer whether to continue.
- [ExternalPurchaseCustomLink.NoticeType](noticetype.md): The custom link out style that informs the type of disclosure notice to display.
