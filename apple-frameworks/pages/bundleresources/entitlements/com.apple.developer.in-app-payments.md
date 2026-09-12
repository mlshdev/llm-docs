> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.in-app-payments](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.in-app-payments)

# Merchant IDs Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · visionOS 1.0+ · watchOS 2.0+

A list of merchant IDs your app uses for Apple Pay support.

## Details

`com.apple.developer.in-app-payments`

<a id="Discussion"></a>

## Discussion

The value for this key is an array of strings containing the merchant IDs—typically in reverse domain name notation, starting with the string ‘`merchant`’.

To add this entitlement, enable the Apple Pay capability in Xcode and select the merchant IDs you want to use in your app. Alternatively, see [Setting up Apple Pay](../../passkit/setting-up-apple-pay.md) for how to create merchant IDs in your developer account.

## See Also

### Wallet

- [Pass Type IDs Entitlement](com.apple.developer.pass-type-identifiers.md): A list of identifiers that specify pass types that your app can access in Wallet.
- [com.apple.developer.in-app-identity-presentment](com.apple.developer.in-app-identity-presentment.md): An entitlement that verifies age or identity.
- [com.apple.developer.in-app-identity-presentment.merchant-identifiers](com.apple.developer.in-app-identity-presentment.merchant-identifiers.md): An entitlement for the merchant identifier associated with the in-app identity presentment entitlement.
- [ID Verifier - Display Only](com.apple.developer.proximity-reader.identity.display.md)
- [ID Verifier - Data Transfer](com.apple.developer.proximity-reader.identity.read.md)
