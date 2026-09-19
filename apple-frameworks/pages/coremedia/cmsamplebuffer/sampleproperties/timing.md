> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleproperties/timing

# timing

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Timing information of the sample.

## Declaration

```swift
var timing: CMSampleTimingInfo
```

<a id="discussion"></a>

## Discussion

Set to [invalid](../../cmsampletiminginfo/invalid.md) if unknown. Individual fields may be set to [invalid](../../cmtime/invalid.md) if unknown.
