> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/bundleidcapability](https://developer.apple.com/documentation/appstoreconnectapi/bundleidcapability)

# BundleIdCapability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

An entitlement or service (such as Push Notifications or In-App Purchases) enabled for a registered bundle ID.

## Declaration

```
object BundleIdCapability
```

## Properties

- `attributes` — `BundleIdCapability.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `bundleIdCapabilities`

## Topics

### Objects

- [BundleIdCapability.Attributes](bundleidcapability/attributes-data.dictionary.md): Attributes that describe a Bundle ID Capabilities resource.

## See Also

### Object and Data Types

- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): The response body for endpoints that enable or modify a capability for a bundle ID.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): The response body for endpoints that list capabilities enabled for a bundle ID.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response containing a list of bundle ID capabilities, without related resources.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
