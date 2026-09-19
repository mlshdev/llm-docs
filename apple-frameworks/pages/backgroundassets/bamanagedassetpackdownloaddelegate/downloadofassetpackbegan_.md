> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/bamanagedassetpackdownloaddelegate/downloadofassetpackbegan:

# downloadOfAssetPackBegan:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Notifies the receiver that the download began or resumed after being paused.

## Declaration

```objectivec
- (void) downloadOfAssetPackBegan:(BAAssetPack *) assetPack;
```

## Parameters

- `assetPack`: The asset pack.

## See Also

### Tracking downloads

- [downloadOfAssetPack:hasProgress:](downloadofassetpack_hasprogress_.md): Notifies the receiver that the download is in progress.
- [downloadOfAssetPackPaused:](downloadofassetpackpaused_.md): Notifies the receiver that the download paused.
- [downloadOfAssetPackFinished:](downloadofassetpackfinished_.md): Notifies the receiver that the download completed and that the asset pack is available locally.
- [downloadOfAssetPack:failedWithError:](downloadofassetpack_failedwitherror_.md): Notifies the receiver that the download failed.
