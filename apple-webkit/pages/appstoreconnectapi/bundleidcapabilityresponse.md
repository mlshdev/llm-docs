> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/bundleidcapabilityresponse](https://developer.apple.com/documentation/appstoreconnectapi/bundleidcapabilityresponse)

# BundleIdCapabilityResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that enable or modify a capability for a bundle ID.

## Declaration

```
object BundleIdCapabilityResponse
```

## Properties

- `data` — `BundleIdCapability` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Object and Data Types

- [BundleIdCapability](bundleidcapability.md): An entitlement or service (such as Push Notifications or In-App Purchases) enabled for a registered bundle ID.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): The response body for endpoints that list capabilities enabled for a bundle ID.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response containing a list of bundle ID capabilities, without related resources.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
