> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchasecustomlink/noticetype](https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/noticetype)

# ExternalPurchaseCustomLink.NoticeType

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · tvOS 18.1+ · visionOS 2.1+ · watchOS 11.1+

The custom link out style that informs the type of disclosure notice to display.

## Declaration

```swift
enum NoticeType
```

<a id="overview"></a>

## Overview

Provide a notice type value when you call [showNotice(type:)](shownotice%28type_%29.md).

## Topics

### Getting notice types

- [ExternalPurchaseCustomLink.NoticeType.browser](noticetype/browser.md): A notice type that indicates your app displays external purchases in a destination of your choice.
- [ExternalPurchaseCustomLink.NoticeType.withinApp](noticetype/withinapp.md): A notice type that indicates that you display the destination in a web view or native experience within the app.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the disclosure sheet

- [showNotice(type:)](shownotice%28type_%29.md): Displays the system disclosure notice sheet and asks the customer whether to continue.
- [ExternalPurchaseCustomLink.NoticeResult](noticeresult.md): The result of showing the disclosure notice.
