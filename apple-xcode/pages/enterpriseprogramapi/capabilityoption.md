> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/capabilityoption](https://developer.apple.com/documentation/enterpriseprogramapi/capabilityoption)

# CapabilityOption

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

An option within a capability setting.

## Declaration

```
object CapabilityOption
```

## Properties

- `description` — `string`:
- `enabled` — `boolean`:
- `enabledByDefault` — `boolean`:
- `key` — `string`: **Allowed values:** `XCODE_5`, `XCODE_6`, `COMPLETE_PROTECTION`, `PROTECTED_UNLESS_OPEN`, `PROTECTED_UNTIL_FIRST_USER_AUTH`, `PRIMARY_APP_CONSENT`
- `name` — `string`:
- `supportsWildcard` — `boolean`:

## See Also

### Object and Data Types

- [BundleIdCapability](bundleidcapability.md): The data structure that represents a Bundle ID Capabilities resource.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): A response that contains a single Bundle ID Capabilities resource.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): A response that contains a list of Bundle ID Capability resources.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response that contains a single Bundle IDs capability resource without includes.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
