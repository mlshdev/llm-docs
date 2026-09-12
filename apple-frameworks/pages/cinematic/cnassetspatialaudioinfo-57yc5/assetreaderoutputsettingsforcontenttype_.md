> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetreaderoutputsettingsforcontenttype:](https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetreaderoutputsettingsforcontenttype:)

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
