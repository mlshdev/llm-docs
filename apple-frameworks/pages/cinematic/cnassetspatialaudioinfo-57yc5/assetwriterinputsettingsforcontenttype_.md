> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetwriterinputsettingsforcontenttype:](https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/assetwriterinputsettingsforcontenttype:)

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
