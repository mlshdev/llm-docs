> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bamanagedassetpackdownloaddelegate/downloadofassetpackfinished:](https://developer.apple.com/documentation/backgroundassets/bamanagedassetpackdownloaddelegate/downloadofassetpackfinished:)

# downloadOfAssetPackFinished:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Notifies the receiver that the download completed and that the asset pack is available locally.

## Declaration

```objectivec
- (void) downloadOfAssetPackFinished:(BAAssetPack *) assetPack;
```

## Parameters

- `assetPack`: The asset pack.

## See Also

### Tracking downloads

- [downloadOfAssetPackBegan:](downloadofassetpackbegan_.md): Notifies the receiver that the download began or resumed after being paused.
- [downloadOfAssetPack:hasProgress:](downloadofassetpack_hasprogress_.md): Notifies the receiver that the download is in progress.
- [downloadOfAssetPackPaused:](downloadofassetpackpaused_.md): Notifies the receiver that the download paused.
- [downloadOfAssetPack:failedWithError:](downloadofassetpack_failedwitherror_.md): Notifies the receiver that the download failed.
