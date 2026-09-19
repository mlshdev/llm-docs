> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/timerange

# timeRange

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The time range of the Cinematic asset.

## Declaration

```objectivec
@property (readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

All frames, decisions, and detections are within this time range.
