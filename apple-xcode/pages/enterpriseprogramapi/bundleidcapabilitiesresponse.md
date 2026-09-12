> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/bundleidcapabilitiesresponse](https://developer.apple.com/documentation/enterpriseprogramapi/bundleidcapabilitiesresponse)

# BundleIdCapabilitiesResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of Bundle ID Capability resources.

## Declaration

```
object BundleIdCapabilitiesResponse
```

## Properties

- `data` — `[BundleIdCapability]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Object and Data Types

- [BundleIdCapability](bundleidcapability.md): The data structure that represents a Bundle ID Capabilities resource.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): A response that contains a single Bundle ID Capabilities resource.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response that contains a single Bundle IDs capability resource without includes.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
