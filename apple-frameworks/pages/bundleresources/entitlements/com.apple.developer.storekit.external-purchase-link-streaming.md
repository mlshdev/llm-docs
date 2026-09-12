> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link-streaming](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link-streaming)

# com.apple.developer.storekit.external-purchase-link-streaming

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.2+ · iPadOS 18.2+

An entitlement that grants a qualifying music-streaming app the ability to communicate and promote offers.

## Details

`com.apple.developer.storekit.external-purchase-link-streaming`

<a id="Discussion"></a>

## Discussion

This entitlement enables qualifying music-streaming apps to communicate and promote offers.

If your account receives this entitlement, you can add it to your app by opening the project’s `.entitlements` file in Xcode. Then add the following key and set the corresponding value to `true`:

```
<plist>
<dict>
    <key>com.apple.developer.storekit.external-purchase-link-streaming</key>
    <true/>
</dict>
</plist>
```

For more information, see [External Purchase](../../storekit/external-purchase.md).

## See Also

### StoreKit

- [StoreKit external purchases or offers entitlement](com.apple.developer.storekit.custom-purchase-link.allowed-regions.md): An entitlement that enables a qualifying app to offer external purchases within app or at a website, in specific regions.
- [com.apple.developer.storekit.external-link.account](com.apple.developer.storekit.external-link.account.md): A Boolean value that indicates whether your app can link to an external website for account creation or management.
- [com.apple.developer.storekit.external-purchase](com.apple.developer.storekit.external-purchase.md): A Boolean value that indicates whether your app can offer external purchases.
- [com.apple.developer.storekit.external-purchase-link](com.apple.developer.storekit.external-purchase-link.md): A Boolean value that indicates whether your app can include a link that directs people to a website to make an external purchase.
