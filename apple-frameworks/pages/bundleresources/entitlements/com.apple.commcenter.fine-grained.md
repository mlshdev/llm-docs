> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.commcenter.fine-grained](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.commcenter.fine-grained)

# com.apple.CommCenter.fine-grained

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+

An entitlement that grants access to CoreTelephony services.

## Details

`com.apple.CommCenter.fine-grained`

## Possible Values

- `public-cellular-plan`: Add this value to discover whether a device supports eSIM, add a carrier eSIM, and update eSIM information using [CTCellularPlanProvisioning](../../coretelephony/ctcellularplanprovisioning.md). To request the entitlement with this value, fill out the [eSIM Access Entitlement request form](https://developer.apple.com/contact/request/esim-access-entitlement/).
- `public-subscriber-info`: Add this value to get information about a cellular network subscriber using [CTSubscriber](../../coretelephony/ctsubscriber.md). To request the entitlement with this value, fill out the [Carrier Refresh Token request form](https://developer.apple.com/contact/request/carrier-refresh-token/).

<a id="Discussion"></a>

## Discussion

Add this entitlement to your app, and include specific values in the array, to use [Core Telephony](../../coretelephony.md) APIs. This entitlement is also available to App Clips. For more information about functionality available to App Clips, see [Choosing the right functionality for your App Clip](https://developer.apple.com/documentation/appclip/choosing-the-right-functionality-for-your-app-clip).

To request this entitlement for your app, fill out the request form for the specific value you need to use.
