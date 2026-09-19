> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-7hdev/assetwriterinputsettings(for:)

# assetWriterInputSettings(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+ · tvOS 26.0+

Returns a dictionary of settings that should be used to encode LPCM samples using `AVAssetWriterInput`

## Declaration

```swift
func assetWriterInputSettings(for contentType: CNSpatialAudioContentType) -> Dictionary<String, Any>
```
