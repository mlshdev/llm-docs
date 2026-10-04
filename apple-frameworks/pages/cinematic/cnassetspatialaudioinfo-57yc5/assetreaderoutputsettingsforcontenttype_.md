> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetreaderoutputsettingsforcontenttype:

# assetReaderOutputSettingsForContentType:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) assetReaderOutputSettingsForContentType:(CNSpatialAudioContentType) contentType;
```

<a id="discussion"></a>

## Discussion

Returns a dictionary of settings and the source track that should be used to fetch LPCM samples from this track with the effect applied

Use the returned NSDictionary with the `defaulSpatialAudioTrack` to initialize an instance of `AVAssetReaderAudioMixOutput`
