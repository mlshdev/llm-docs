> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.identity-document-services.document-provider.mobile-document-types](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.identity-document-services.document-provider.mobile-document-types)

# Digital Credentials API - Mobile Document Provider

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An array of strings that represent the types of mobile documents (mdoc) that an identity document provider app can provide during an online web presentment.

## Details

`com.apple.developer.identity-document-services.document-provider.mobile-document-types`

## Possible Values

- `eu.europa.ec.av.1`: The category for age verification for EU countries.
- `eu.europa.ec.eudi.pid.1`: The category for a personal ID card for EU countries.
- `org.iso.23220.photoid.1`: The category for a photo ID card.
- `org.iso.23220.1.jp.mnc`: The category for a Japan MyNumber card.
- `org.iso.18013.5.1.mDL`: The category for a mobile driver’s license.

<a id="Discussion"></a>

## Discussion

Use this entitlement to define the types of mobile documents that the app provides.
