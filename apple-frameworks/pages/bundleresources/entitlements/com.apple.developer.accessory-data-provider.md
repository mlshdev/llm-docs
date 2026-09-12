> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.accessory-data-provider](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.accessory-data-provider)

# com.apple.developer.accessory-data-provider

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.5+ · iPadOS 26.5+

An entitlement that enables your app extension to receive data for an accessory.

## Details

`com.apple.developer.accessory-data-provider`

<a id="discussion"></a>

## Discussion

If your app implements [AccessoryDataProvider](https://developer.apple.com/documentation/accessorytransportextension/accessorydataprovider) in an app extension, the framework requires the extension to have this entitlement with a value of `true` in its signature.

For more information, see [Receiving iOS notifications on an accessory](https://developer.apple.com/documentation/accessorytransportextension/receiving-ios-notifications-on-an-accessory).

For information on adding entitlements to your app, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## See Also

### Accessory Transport Extension

- [com.apple.developer.accessory-transport-extension](com.apple.developer.accessory-transport-extension.md): An entitlement that enables your app extension to send sensitive data to an accessory.
- [com.apple.developer.accessory-transport-security](com.apple.developer.accessory-transport-security.md): An entitlement that enables your app extension to exchange cryptographic keys with an accessory.
