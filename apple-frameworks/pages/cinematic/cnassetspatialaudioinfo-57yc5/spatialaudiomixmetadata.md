> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/spatialaudiomixmetadata

# spatialAudioMixMetadata

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * spatialAudioMixMetadata;
```

<a id="discussion"></a>

## Discussion

The result of audio analysis during recording which contains metadata necessary to properly configure the Audio Mix feature during playback or editing.. Can be used with `AUAudioUnit` instances that support AudioUnitPropertyID `kProperty_SpatialAudioMixMetadata`
