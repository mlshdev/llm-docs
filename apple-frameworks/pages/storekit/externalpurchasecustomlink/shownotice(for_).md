> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/shownotice(for:)

# showNotice(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Displays the system disclosure notice sheet for a custom link type and asks the customer whether to continue.

## Declaration

```swift
static func showNotice(for externalPurchaseType: ExternalPurchaseCustomLink.ExternalPurchaseType) async throws -> ExternalPurchaseCustomLink.NoticeResult
```

## Parameters

- `externalPurchaseType`: An [ExternalPurchaseCustomLink.ExternalPurchaseType](externalpurchasetype.md) value you select that determines the disclosure sheet the system displays.

<a id="return-value"></a>

## Return Value

This method returns [ExternalPurchaseCustomLink.NoticeResult.continued](noticeresult/continued.md) to indicate the customer chooses to continue, or [ExternalPurchaseCustomLink.NoticeResult.cancelled](noticeresult/cancelled.md) to indicate the customer chooses not to continue to view external purchases. This method throws an error if your app isn’t eligible to use this API at runtime. In case of an error, this method throws a [StoreKitError](../storekiterror.md).

<a id="Discussion"></a>

## Discussion

Use this method in combination with a specific entitlement entitlement assigned to your app and  Information Property List key depending on the region where you want to offer external purchases, following these guidelines:

- The  [com.apple.developer.storekit.external-purchase-link](../../bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link.md) entitlement requires the [SKExternalPurchaseCustomLinkRegions](../../bundleresources/information-property-list/skexternalpurchasecustomlinkregions.md) Information Property List key.
- The [com.apple.developer.storekit.external-purchase-link-streaming](../../bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link-streaming.md) entitlement requires the [SKExternalPurchaseLinkStreamingRegions](../../bundleresources/information-property-list/skexternalpurchaselinkstreamingregions.md) Information Property List key.
- The [StoreKit external purchases or offers entitlement](../../bundleresources/entitlements/com.apple.developer.storekit.custom-purchase-link.allowed-regions.md) entitlement is a standalone entitlement and doesn’t require any additional Information Property List key.

An app needs to call this method when a customer taps on a button or scans a QR code to begin a purchase through an alternative payment processor within an app, or to go out of the app to engage with an offer.  If [isEligible](iseligible.md) is `false`, this method always fails.

Select the notice type based on how your app communicates the offers if the customer chooses to continue:

- Use [ExternalPurchaseCustomLink.ExternalPurchaseType.outOfApp(destinationURL:)](externalpurchasetype/outofapp%28destinationurl_%29.md) if the app goes to the background, and promotes offers in a destination outside of the app.
- Use [ExternalPurchaseCustomLink.ExternalPurchaseType.withinApp](externalpurchasetype/withinapp.md) if the app promotes offers in a web view or native experience within the app.

Continue with the offer if [showNotice(type:)](shownotice%28type_%29.md) returns [ExternalPurchaseCustomLink.NoticeResult.continued](noticeresult/continued.md); otherwise, don’t continue.

> **Important**

> This API only works in countries or regions where the [StoreKit external purchases or offers entitlement](../../bundleresources/entitlements/com.apple.developer.storekit.custom-purchase-link.allowed-regions.md) entitlement is available. See the entitlement documentation for additional information.

For example code that calls this method, see [ExternalPurchaseCustomLink](../externalpurchasecustomlink.md).

<a id="See-also"></a>

### See also

- [ExternalPurchaseCustomLink.NoticeResult](noticeresult.md)
- [ExternalPurchaseCustomLink.ExternalPurchaseType](externalpurchasetype.md)

## See Also

### Displaying the disclosure sheet

- [ExternalPurchaseCustomLink.NoticeResult](noticeresult.md): The result of showing the disclosure notice.
- [ExternalPurchaseCustomLink.ExternalPurchaseType](externalpurchasetype.md): Beta. Values that represent the types of external purchase an app can perform.
