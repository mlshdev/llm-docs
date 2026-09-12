> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciartifact](https://developer.apple.com/documentation/appstoreconnectapi/ciartifact)

# CiArtifact

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A file output produced by an Xcode Cloud build action, such as an app archive, test result bundle, or build log.

## Declaration

```
object CiArtifact
```

## Properties

- `attributes` — `CiArtifact.Attributes`: The attributes that describe the Artifacts resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an Artifacts resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciArtifacts`

## Topics

### Objects

- [CiArtifact.Attributes](ciartifact/attributes-data.dictionary.md): The attributes that describe the output of an artifact resource.

## See Also

### Objects

- [CiArtifactResponse](ciartifactresponse.md): The response body for endpoints that read a single artifact produced by an Xcode Cloud build action.
