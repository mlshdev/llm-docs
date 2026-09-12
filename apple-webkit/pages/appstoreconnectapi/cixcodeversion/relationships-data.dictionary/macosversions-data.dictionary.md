> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cixcodeversion/relationships-data.dictionary/macosversions-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversion/relationships-data.dictionary/macosversions-data.dictionary)

# CiXcodeVersion.Relationships.MacOsVersions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data, links, and paging information that describe the relationship between the Xcode Versions and the macOS Versions resources.

## Declaration

```
object CiXcodeVersion.Relationships.MacOsVersions
```

## Properties

- `data` — `[CiXcodeVersion.Relationships.MacOsVersions.Data]`: The ID and type of the related macOS Versions resource.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Topics

### Objects

- [CiXcodeVersion.Relationships.MacOsVersions.Data](macosversions-data.dictionary/data-data.dictionary.md): The type and ID of a related macOS Versions resource.
