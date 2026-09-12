> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/capabilitysetting](https://developer.apple.com/documentation/enterpriseprogramapi/capabilitysetting)

# CapabilitySetting

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

An object that  represents a capability setting for an app.

## Declaration

```
object CapabilitySetting
```

## Properties

- `allowedInstances` — `string`: **Allowed values:** `ENTRY`, `SINGLE`, `MULTIPLE`
- `description` — `string`:
- `enabledByDefault` — `boolean`:
- `key` — `string`: **Allowed values:** `ICLOUD_VERSION`, `DATA_PROTECTION_PERMISSION_LEVEL`, `APPLE_ID_AUTH_APP_CONSENT`
- `minInstances` — `integer`:
- `name` — `string`:
- `options` — `[CapabilityOption]`:
- `visible` — `boolean`:

## See Also

### Object and Data Types

- [BundleIdCapability](bundleidcapability.md): The data structure that represents a Bundle ID Capabilities resource.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): A response that contains a single Bundle ID Capabilities resource.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): A response that contains a list of Bundle ID Capability resources.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response that contains a single Bundle IDs capability resource without includes.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
