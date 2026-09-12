> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/external-link-account](https://developer.apple.com/documentation/storekit/external-link-account)

# External link account (Swift)

**Framework:** StoreKit  
**Kind:** API Collection

Enable qualifying apps to link to an external website for account creation or management.

<a id="overview"></a>

## Overview

If you develop a qualifying app, you can complete a request for an entitlement that allows you to link to an external website for account creation or management. For more information about whether your app qualifies and how to request an entitlement, see [Distributing “reader” apps with a link to your website](https://developer.apple.com/support/reader-apps/).

If your account has the [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md) entitlement, implement the following to link to an external website for account creation and management:

- Configure the [SKExternalLinkAccount](../bundleresources/information-property-list/skexternallinkaccount.md) property list key.
- Use the [ExternalLinkAccount](externallinkaccount.md) type’s [canOpen](externallinkaccount/canopen.md) property and [open()](externallinkaccount/open%28%29.md) method.

> **Note**

>  In a compatible iPad or iPhone app running in visionOS, on a Mac with Apple silicon, or on a Mac app built with Mac Catalyst, the External Link Account APIs throw an error or return `false`.

## Topics

### External accounts

- [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md): A Boolean value that indicates whether your app can link to an external website for account creation or management.
- [SKExternalLinkAccount](../bundleresources/information-property-list/skexternallinkaccount.md): A dictionary that contains localized URLs to an external website for account creation or management.
- [ExternalLinkAccount](externallinkaccount.md): Enables qualifying apps to link to an external website for account creation or management.

# External link account (Objective-C)

**Framework:** StoreKit  
**Kind:** API Collection

Enable qualifying apps to link to an external website for account creation or management.

<a id="overview"></a>

## Overview

If you develop a qualifying app, you can complete a request for an entitlement that allows you to link to an external website for account creation or management. For more information about whether your app qualifies and how to request an entitlement, see [Distributing “reader” apps with a link to your website](https://developer.apple.com/support/reader-apps/).

If your account has the [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md) entitlement, implement the following to link to an external website for account creation and management:

- Configure the [SKExternalLinkAccount](../bundleresources/information-property-list/skexternallinkaccount.md) property list key.
- Use the [ExternalLinkAccount](externallinkaccount.md) type’s [canOpen](externallinkaccount/canopen.md) property and [open()](externallinkaccount/open%28%29.md) method.

> **Note**

>  In a compatible iPad or iPhone app running in visionOS, on a Mac with Apple silicon, or on a Mac app built with Mac Catalyst, the External Link Account APIs throw an error or return `false`.

## Topics

### External accounts

- [com.apple.developer.storekit.external-link.account](../bundleresources/entitlements/com.apple.developer.storekit.external-link.account.md): A Boolean value that indicates whether your app can link to an external website for account creation or management.
- [SKExternalLinkAccount](../bundleresources/information-property-list/skexternallinkaccount.md): A dictionary that contains localized URLs to an external website for account creation or management.
