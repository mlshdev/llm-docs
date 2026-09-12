> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profile](https://developer.apple.com/documentation/appstoreconnectapi/profile)

# Profile

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

A provisioning profile that authorizes specific devices to run an app during development or distribution.

## Declaration

```
object Profile
```

## Properties

- `attributes` — `Profile.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource
- `relationships` — `Profile.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `profiles`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [Profile.Attributes](profile/attributes-data.dictionary.md): Attributes that describe a Profiles resource.
- [Profile.Relationships](profile/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfileResponse](profileresponse.md): The response body for endpoints that create or read a single provisioning profile.
- [ProfilesResponse](profilesresponse.md): The response body for endpoints that list provisioning profiles.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md): A response containing a list of provisioning profiles, without related resources.
- [ProfileBundleIdLinkageResponse](profilebundleidlinkageresponse.md)
- [ProfileCertificatesLinkagesResponse](profilecertificateslinkagesresponse.md)
- [ProfileDevicesLinkagesResponse](profiledeviceslinkagesresponse.md)
