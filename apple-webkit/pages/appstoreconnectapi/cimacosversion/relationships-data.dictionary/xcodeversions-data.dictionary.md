> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cimacosversion/relationships-data.dictionary/xcodeversions-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cimacosversion/relationships-data.dictionary/xcodeversions-data.dictionary)

# CiMacOsVersion.Relationships.XcodeVersions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data, links, and paging information that describe the relationship between the macOS Versions and Xcode Versions resources.

## Declaration

```
object CiMacOsVersion.Relationships.XcodeVersions
```

## Properties

- `data` — `[CiMacOsVersion.Relationships.XcodeVersions.Data]`: The ID and type of the related Xcode Versions resource.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Topics

### Objects

- [CiMacOsVersion.Relationships.XcodeVersions.Data](xcodeversions-data.dictionary/data-data.dictionary.md): The type and ID of a related Xcode Versions resource.
