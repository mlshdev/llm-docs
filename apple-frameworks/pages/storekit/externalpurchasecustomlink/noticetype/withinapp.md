> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchasecustomlink/noticetype/withinapp](https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/noticetype/withinapp)

# ExternalPurchaseCustomLink.NoticeType.withinApp

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · tvOS 18.1+ · visionOS 2.1+ · watchOS 11.1+

A notice type that indicates that you display the destination in a web view or native experience within the app.

## Declaration

```swift
case withinApp
```

<a id="Discussion"></a>

## Discussion

After displaying a notice with this notice type using [showNotice(type:)](../shownotice%28type_%29.md), if the customer chooses to continue, the app displays the destination in a web view or native experience within the app.

## See Also

### Getting notice types

- [ExternalPurchaseCustomLink.NoticeType.browser](browser.md): A notice type that indicates your app displays external purchases in a destination of your choice.
