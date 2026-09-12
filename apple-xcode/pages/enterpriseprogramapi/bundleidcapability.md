> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/bundleidcapability](https://developer.apple.com/documentation/enterpriseprogramapi/bundleidcapability)

# BundleIdCapability

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a Bundle ID Capabilities resource.

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
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): A response that contains a single Bundle ID Capabilities resource.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): A response that contains a list of Bundle ID Capability resources.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response that contains a single Bundle IDs capability resource without includes.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
