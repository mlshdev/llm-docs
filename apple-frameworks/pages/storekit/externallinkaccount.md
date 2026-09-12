> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externallinkaccount](https://developer.apple.com/documentation/storekit/externallinkaccount)

# ExternalLinkAccount

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.4+

Enables qualifying apps to link to an external website for account creation or management.

## Declaration

```swift
enum ExternalLinkAccount
```

<a id="overview"></a>

## Overview

This functionality is only available to apps with the [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md) entitlement. For more information, see [Distributing “reader” apps with a link to your website](https://developer.apple.com/support/reader-apps/).

## Topics

### Linking to external accounts

- [canOpen](externallinkaccount/canopen.md): A Boolean value that indicates whether the app can open the external link account.
- [open()](externallinkaccount/open%28%29.md): Presents a continuation sheet that enables people to choose whether to open your app’s link to an external website for account creation or management.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### External accounts

- [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md): A Boolean value that indicates whether your app can link to an external website for account creation or management.
- [SKExternalLinkAccount](../bundleresources/information-property-list/skexternallinkaccount.md): A dictionary that contains localized URLs to an external website for account creation or management.
