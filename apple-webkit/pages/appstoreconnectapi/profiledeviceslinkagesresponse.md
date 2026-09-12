> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profiledeviceslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/profiledeviceslinkagesresponse)

# ProfileDevicesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object ProfileDevicesLinkagesResponse
```

## Properties

- `data` — `[ProfileDevicesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [ProfileDevicesLinkagesResponse.Data](profiledeviceslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [Profile](profile.md): A provisioning profile that authorizes specific devices to run an app during development or distribution.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfileResponse](profileresponse.md): The response body for endpoints that create or read a single provisioning profile.
- [ProfilesResponse](profilesresponse.md): The response body for endpoints that list provisioning profiles.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md): A response containing a list of provisioning profiles, without related resources.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
