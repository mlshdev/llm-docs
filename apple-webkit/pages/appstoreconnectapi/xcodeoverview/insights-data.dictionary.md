> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/xcodeoverview/insights-data.dictionary

# xcodeOverview.Insights

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

Performance insights for an app, including regressions and metrics that are trending up.

## Declaration

```
object xcodeOverview.Insights
```

## Properties

- `regressions` — `[MetricsInsight]`: The metrics that regressed relative to a previous version.
- `trendingUp` — `[MetricsInsight]`: The metrics that are improving relative to a previous version.

## See Also

### Objects

- [xcodeOverview.AppMetadata](appmetadata-data.dictionary.md): Metadata about the app that a performance overview describes.
- [xcodeOverview.Signatures](signatures-data.dictionary.md): The top performance signatures for an app, such as its top hang, launch, and disk-write points.
