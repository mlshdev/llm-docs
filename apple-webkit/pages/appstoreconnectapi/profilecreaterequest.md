> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profilecreaterequest](https://developer.apple.com/documentation/appstoreconnectapi/profilecreaterequest)

# ProfileCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The request body you use to create a Profile.

## Declaration

```
object ProfileCreateRequest
```

## Properties

- `data` — `ProfileCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [ProfileCreateRequest.Data](profilecreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [Profile](profile.md): A provisioning profile that authorizes specific devices to run an app during development or distribution.
- [ProfileResponse](profileresponse.md): The response body for endpoints that create or read a single provisioning profile.
- [ProfilesResponse](profilesresponse.md): The response body for endpoints that list provisioning profiles.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md): A response containing a list of provisioning profiles, without related resources.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
- [ProfileDevicesLinkagesResponse](profiledeviceslinkagesresponse.md)
