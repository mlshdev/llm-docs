> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/bundleidupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/bundleidupdaterequest)

# BundleIdUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The request body you use to update a Bundle ID.

## Declaration

```
object BundleIdUpdateRequest
```

## Properties

- `data` — `BundleIdUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BundleIdUpdateRequest.Data](bundleidupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and types

- [BundleId](bundleid.md): An App ID registered with Apple, associating a specific bundle identifier with capabilities and provisioning profiles.
- [BundleIdPlatform](bundleidplatform.md): Strings that represent the operating system intended for the bundle.
- [BundleIdCreateRequest](bundleidcreaterequest.md): The request body you use to create a Bundle ID.
- [BundleIdResponse](bundleidresponse.md): The response body for endpoints that create, read, or modify a single bundle ID.
- [BundleIdWithoutIncludesResponse](bundleidwithoutincludesresponse.md): A response containing a single bundle ID, without including capability and profile details.
- [BundleIdsResponse](bundleidsresponse.md): The response body for endpoints that list bundle IDs.
- [BundleIdAppLinkageResponse](bundleidapplinkageresponse.md)
- [BundleIdBundleIdCapabilitiesLinkagesResponse](bundleidbundleidcapabilitieslinkagesresponse.md)
- [BundleIdProfilesLinkagesResponse](bundleidprofileslinkagesresponse.md)
