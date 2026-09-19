> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetectiontrack-61x7g/discrete

# discrete

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A flag determining if the detection track has discrete detections, otherwise continuous.

## Declaration

```objectivec
@property (readonly, getter=isDiscrete) BOOL discrete;
```

<a id="Discussion"></a>

## Discussion

A discrete detection track returns detections only at the specific times a detection occurs. A continuous detection track returns a detection for any requested time and an empty array for time ranges.
