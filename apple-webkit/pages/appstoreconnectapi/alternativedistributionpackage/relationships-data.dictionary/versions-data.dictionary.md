> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackage/relationships-data.dictionary/versions-data.dictionary

# AlternativeDistributionPackage.Relationships.Versions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The relationship container linking an alternative distribution package to its associated versions.

## Declaration

```
object AlternativeDistributionPackage.Relationships.Versions
```

## Properties

- `data` — `[AlternativeDistributionPackage.Relationships.Versions.Data]`:
- `links` — `RelationshipLinks`:
- `meta` — `PagingInformation`:

<a id="Discussion"></a>

## Discussion

For more information on the object that owns these versions, see [AlternativeDistributionPackage.Relationships](../relationships-data.dictionary.md).

## Topics

### Objects

- [AlternativeDistributionPackage.Relationships.Versions.Data](versions-data.dictionary/data-data.dictionary.md): The resource linkage identifying an alternative distribution package version associated with a package.
