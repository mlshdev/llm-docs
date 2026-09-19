> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setshouldmixstereotomono(_:)

# setShouldMixStereoToMono(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the shouldMixStereoToMono property.

## Declaration

```swift
func setShouldMixStereoToMono(_ doMix: Bool) throws
```

## Parameters

- `doMix`: A Bool where a value of true indicates that devices should mix stereo signals down to mono.
