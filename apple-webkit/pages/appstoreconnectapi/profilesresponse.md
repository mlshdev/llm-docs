> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profilesresponse](https://developer.apple.com/documentation/appstoreconnectapi/profilesresponse)

# ProfilesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that list provisioning profiles.

## Declaration

```
object ProfilesResponse
```

## Properties

- `data` — `[Profile]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[*]`: **Allowed types:** `BundleId`, `Certificate`, `Device`

## See Also

### Related Documentation

- [List and download profiles](get-v1-profiles.md): Find and list provisioning profiles and download their data.

### Objects

- [Profile](profile.md): A provisioning profile that authorizes specific devices to run an app during development or distribution.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfileResponse](profileresponse.md): The response body for endpoints that create or read a single provisioning profile.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md): A response containing a list of provisioning profiles, without related resources.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
- [ProfileDevicesLinkagesResponse](profiledeviceslinkagesresponse.md)
