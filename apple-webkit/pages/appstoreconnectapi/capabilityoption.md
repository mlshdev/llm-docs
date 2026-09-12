> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/capabilityoption](https://developer.apple.com/documentation/appstoreconnectapi/capabilityoption)

# CapabilityOption

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

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

- [BundleIdCapability](bundleidcapability.md): An entitlement or service (such as Push Notifications or In-App Purchases) enabled for a registered bundle ID.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): The response body for endpoints that enable or modify a capability for a bundle ID.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): The response body for endpoints that list capabilities enabled for a bundle ID.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response containing a list of bundle ID capabilities, without related resources.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
- [CapabilityType](capabilitytype.md): String that represents an app’s capability type.
