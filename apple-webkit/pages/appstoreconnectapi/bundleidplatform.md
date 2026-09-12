> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/bundleidplatform](https://developer.apple.com/documentation/appstoreconnectapi/bundleidplatform)

# BundleIdPlatform

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.1+

Strings that represent the operating system intended for the bundle.

## Declaration

```
string BundleIdPlatform
```

## Possible Values

- `IOS`:
- `MAC_OS`:
- `UNIVERSAL`:

## Mentioned In

- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

<a id="discussion"></a>

## Discussion

-`IOS`: A string that represents iOS. -`MAC_OS`: A string that represents macOS. -`UNIVERSAL`: A string that represents all possible platforms.

## See Also

### Objects and types

- [BundleId](bundleid.md): An App ID registered with Apple, associating a specific bundle identifier with capabilities and provisioning profiles.
- [BundleIdCreateRequest](bundleidcreaterequest.md): The request body you use to create a Bundle ID.
- [BundleIdUpdateRequest](bundleidupdaterequest.md): The request body you use to update a Bundle ID.
- [BundleIdResponse](bundleidresponse.md): The response body for endpoints that create, read, or modify a single bundle ID.
- [BundleIdWithoutIncludesResponse](bundleidwithoutincludesresponse.md): A response containing a single bundle ID, without including capability and profile details.
- [BundleIdsResponse](bundleidsresponse.md): The response body for endpoints that list bundle IDs.
- [BundleIdAppLinkageResponse](bundleidapplinkageresponse.md)
- [BundleIdBundleIdCapabilitiesLinkagesResponse](bundleidbundleidcapabilitieslinkagesresponse.md)
- [BundleIdProfilesLinkagesResponse](bundleidprofileslinkagesresponse.md)
