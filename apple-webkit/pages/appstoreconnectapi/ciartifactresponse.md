> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciartifactresponse](https://developer.apple.com/documentation/appstoreconnectapi/ciartifactresponse)

# CiArtifactResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single artifact produced by an Xcode Cloud build action.

## Declaration

```
object CiArtifactResponse
```

## Properties

- `data` — `CiArtifact` (required): The resource data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [CiArtifact](ciartifact.md): A file output produced by an Xcode Cloud build action, such as an app archive, test result bundle, or build log.
