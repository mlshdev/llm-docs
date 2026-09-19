> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-7hdev/assetreaderoutputsettings(for:)

# assetReaderOutputSettings(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+ · tvOS 26.0+

Returns a dictionary of settings and the source track that should be used to fetch LPCM samples from this track with the effect applied

## Declaration

```swift
func assetReaderOutputSettings(for contentType: CNSpatialAudioContentType) -> Dictionary<String, Any>
```
