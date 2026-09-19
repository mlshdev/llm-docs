> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avexposurebiasrange/minexposurebias

# minExposureBias

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The minimum exposure bias in EV units that this range supports.

## Declaration

```objectivec
@property (nonatomic, readonly) float minExposureBias;
```

## See Also

### Inspecting the exposure bias range

- [maxExposureBias](maxexposurebias.md): The maximum exposure bias in EV units that this range supports.
- [containsExposureBias:](containsexposurebias_.md): Determines whether the range contains the specified exposure bias.
