> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/delegate](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/delegate)

# delegate

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that receives notifications about events that occur as an asset pack is downloaded.

## Declaration

```objectivec
@property (weak, readwrite, nullable) id<BAManagedAssetPackDownloadDelegate> delegate;
```

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)

## See Also

### Tracking downloads

- [BAManagedAssetPackDownloadDelegate](../bamanagedassetpackdownloaddelegate.md): An object that handles status updates when downloading an asset pack.
