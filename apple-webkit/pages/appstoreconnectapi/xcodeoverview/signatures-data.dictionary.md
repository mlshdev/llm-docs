> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/xcodeoverview/signatures-data.dictionary

# xcodeOverview.Signatures

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The top performance signatures for an app, such as its top hang, launch, and disk-write points.

## Declaration

```
object xcodeOverview.Signatures
```

## Properties

- `topHangPoint` — `[PerformanceSignature]`: The code locations responsible for the most hangs.
- `topLaunchPoint` — `[PerformanceSignature]`: The code locations responsible for the longest launch times.
- `topDiskWritePoint` — `[PerformanceSignature]`: The code locations responsible for the most disk writes.

## See Also

### Objects

- [xcodeOverview.AppMetadata](appmetadata-data.dictionary.md): Metadata about the app that a performance overview describes.
- [xcodeOverview.Insights](insights-data.dictionary.md): Performance insights for an app, including regressions and metrics that are trending up.
