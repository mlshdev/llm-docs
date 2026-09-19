> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetwriterinputsettingsforcontenttype:

# assetWriterInputSettingsForContentType:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) assetWriterInputSettingsForContentType:(CNSpatialAudioContentType) contentType;
```

<a id="discussion"></a>

## Discussion

Returns a dictionary of settings that should be used to encode LPCM samples using `AVAssetWriterInput`
