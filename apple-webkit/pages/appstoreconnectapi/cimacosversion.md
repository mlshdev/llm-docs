> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cimacosversion](https://developer.apple.com/documentation/appstoreconnectapi/cimacosversion)

# CiMacOsVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A macOS version available in Xcode Cloud infrastructure for running workflow builds.

## Declaration

```
object CiMacOsVersion
```

## Properties

- `attributes` — `CiMacOsVersion.Attributes`: The attributes that describe the macOS Versions resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a macOS Versions resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `CiMacOsVersion.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciMacOsVersions`

## Topics

### Objects

- [CiMacOsVersion.Attributes](cimacosversion/attributes-data.dictionary.md): The attributes that describe a macOS Versions resource.
- [CiMacOsVersion.Relationships](cimacosversion/relationships-data.dictionary.md): The relationships of the macOS Versions resource you included in the request and those on which you can operate.

## See Also

### Objects

- [CiMacOsVersionResponse](cimacosversionresponse.md): A response containing a single macOS version available in Xcode Cloud.
- [CiMacOsVersionsResponse](cimacosversionsresponse.md): A response containing a list of macOS versions supported by Xcode Cloud.
- [CiMacOsVersionXcodeVersionsLinkagesResponse](cimacosversionxcodeversionslinkagesresponse.md)
