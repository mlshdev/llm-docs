> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackageversion/attributes-data.dictionary

# AlternativeDistributionPackageVersion.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

Attributes that describe an alternative distribution package version resource.

## Declaration

```
object AlternativeDistributionPackageVersion.Attributes
```

## Properties

- `fileChecksum` — `string`:
- `state` — `string`: **Allowed values:** `COMPLETED`, `REPLACED`
- `url` — `uri`:
- `urlExpirationDate` — `date-time`:
- `version` — `string`:

## See Also

### Objects

- [AlternativeDistributionPackageVersion.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
