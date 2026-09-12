> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profileswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/profileswithoutincludesresponse)

# ProfilesWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of provisioning profiles, without related resources.

## Declaration

```
object ProfilesWithoutIncludesResponse
```

## Properties

- `data` — `[Profile]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [Profile](profile.md): A provisioning profile that authorizes specific devices to run an app during development or distribution.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfileResponse](profileresponse.md): The response body for endpoints that create or read a single provisioning profile.
- [ProfilesResponse](profilesresponse.md): The response body for endpoints that list provisioning profiles.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
- [ProfileDevicesLinkagesResponse](profiledeviceslinkagesresponse.md)
