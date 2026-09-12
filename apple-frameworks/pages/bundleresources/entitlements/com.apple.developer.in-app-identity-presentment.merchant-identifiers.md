> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.in-app-identity-presentment.merchant-identifiers](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.in-app-identity-presentment.merchant-identifiers)

# com.apple.developer.in-app-identity-presentment.merchant-identifiers

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+

An entitlement for the merchant identifier associated with the in-app identity presentment entitlement.

## Details

`com.apple.developer.in-app-identity-presentment.merchant-identifiers`

<a id="Discussion"></a>

## Discussion

For identity verification, you must add this entitlement even if you’re using the same merchant ID for Apple Pay. Apple Pay’s [Merchant IDs Entitlement](com.apple.developer.in-app-payments.md) entitlement isn’t recognized for identity verification.

## See Also

### Wallet

- [Pass Type IDs Entitlement](com.apple.developer.pass-type-identifiers.md): A list of identifiers that specify pass types that your app can access in Wallet.
- [Merchant IDs Entitlement](com.apple.developer.in-app-payments.md): A list of merchant IDs your app uses for Apple Pay support.
- [com.apple.developer.in-app-identity-presentment](com.apple.developer.in-app-identity-presentment.md): An entitlement that verifies age or identity.
- [ID Verifier - Display Only](com.apple.developer.proximity-reader.identity.display.md)
- [ID Verifier - Data Transfer](com.apple.developer.proximity-reader.identity.read.md)
