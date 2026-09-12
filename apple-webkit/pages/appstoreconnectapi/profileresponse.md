> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profileresponse](https://developer.apple.com/documentation/appstoreconnectapi/profileresponse)

# ProfileResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that create or read a single provisioning profile.

## Declaration

```
object ProfileResponse
```

## Properties

- `data` — `Profile` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: **Allowed types:** `BundleId`, `Certificate`, `Device`

## See Also

### Related Documentation

- [Create a profile](post-v1-profiles.md): Create a new provisioning profile.

### Objects

- [Profile](profile.md): A provisioning profile that authorizes specific devices to run an app during development or distribution.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfilesResponse](profilesresponse.md): The response body for endpoints that list provisioning profiles.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md): A response containing a list of provisioning profiles, without related resources.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
- [ProfileDevicesLinkagesResponse](profiledeviceslinkagesresponse.md)
