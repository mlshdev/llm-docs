> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cixcodeversion](https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversion)

# CiXcodeVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

An Xcode version available in Xcode Cloud for running workflow builds and tests.

## Declaration

```
object CiXcodeVersion
```

## Properties

- `attributes` — `CiXcodeVersion.Attributes`: The attributes that describe the Xcode Versions resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an Xcode Versions resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `CiXcodeVersion.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciXcodeVersions`

## Topics

### Objects

- [CiXcodeVersion.Attributes](cixcodeversion/attributes-data.dictionary.md): The attributes that describe an Xcode Versions resource.
- [CiXcodeVersion.Relationships](cixcodeversion/relationships-data.dictionary.md): The relationships of the Xcode Versions resource you included in the request and those on which you can operate.

## See Also

### Objects

- [CiXcodeVersionResponse](cixcodeversionresponse.md): The response body for endpoints that read a single Xcode version available in Xcode Cloud.
- [CiXcodeVersionsResponse](cixcodeversionsresponse.md): The response body for endpoints that list Xcode versions available for Xcode Cloud.
- [CiXcodeVersionMacOsVersionsLinkagesResponse](cixcodeversionmacosversionslinkagesresponse.md)
