> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/capabilitytype](https://developer.apple.com/documentation/appstoreconnectapi/capabilitytype)

# CapabilityType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.1+

String that represents an app’s capability type.

## Declaration

```
string CapabilityType
```

## Possible Values

- `ICLOUD`:
- `IN_APP_PURCHASE`:
- `GAME_CENTER`:
- `PUSH_NOTIFICATIONS`:
- `WALLET`:
- `INTER_APP_AUDIO`:
- `MAPS`:
- `ASSOCIATED_DOMAINS`:
- `PERSONAL_VPN`:
- `APP_GROUPS`:
- `HEALTHKIT`:
- `HOMEKIT`:
- `WIRELESS_ACCESSORY_CONFIGURATION`:
- `APPLE_PAY`:
- `DATA_PROTECTION`:
- `SIRIKIT`:
- `NETWORK_EXTENSIONS`:
- `MULTIPATH`:
- `HOT_SPOT`:
- `NFC_TAG_READING`:
- `CLASSKIT`:
- `AUTOFILL_CREDENTIAL_PROVIDER`:
- `ACCESS_WIFI_INFORMATION`:
- `NETWORK_CUSTOM_PROTOCOL`:
- `COREMEDIA_HLS_LOW_LATENCY`:
- `SYSTEM_EXTENSION_INSTALL`:
- `USER_MANAGEMENT`:
- `APPLE_ID_AUTH`:

## Mentioned In

- [App Store Connect API 1.2 release notes](app-store-connect-api-1-2-release-notes.md)

## See Also

### Object and Data Types

- [BundleIdCapability](bundleidcapability.md): An entitlement or service (such as Push Notifications or In-App Purchases) enabled for a registered bundle ID.
- [BundleIdCapabilityCreateRequest](bundleidcapabilitycreaterequest.md): The request body you use to create a Bundle ID Capability.
- [BundleIdCapabilityUpdateRequest](bundleidcapabilityupdaterequest.md): The request body you use to update a Bundle ID Capability.
- [BundleIdCapabilityResponse](bundleidcapabilityresponse.md): The response body for endpoints that enable or modify a capability for a bundle ID.
- [BundleIdCapabilitiesResponse](bundleidcapabilitiesresponse.md): The response body for endpoints that list capabilities enabled for a bundle ID.
- [BundleIdCapabilitiesWithoutIncludesResponse](bundleidcapabilitieswithoutincludesresponse.md): A response containing a list of bundle ID capabilities, without related resources.
- [CapabilityOption](capabilityoption.md): An option within a capability setting.
- [CapabilitySetting](capabilitysetting.md): An object that represents a capability setting for an app.
