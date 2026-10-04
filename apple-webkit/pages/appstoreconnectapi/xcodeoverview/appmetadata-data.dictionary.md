> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/xcodeoverview/appmetadata-data.dictionary

# xcodeOverview.AppMetadata

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

Metadata about the app that a performance overview describes.

## Declaration

```
object xcodeOverview.AppMetadata
```

## Properties

- `bundleId` — `string`: The bundle ID of the app.
- `appId` — `string`: The App Store identifier of the app.
- `latestVersion` — `string`: The most recent version of the app.
- `platform` — `string`: The platform that the performance data applies to.

## See Also

### Objects

- [xcodeOverview.Insights](insights-data.dictionary.md): Performance insights for an app, including regressions and metrics that are trending up.
- [xcodeOverview.Signatures](signatures-data.dictionary.md): The top performance signatures for an app, such as its top hang, launch, and disk-write points.
