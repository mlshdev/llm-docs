> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtask/options](https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/options)

# options (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The configuration options for the task.

> Use AVAssetDownloadConfiguration instead

## Declaration

```swift
var options: [String : Any]? { get }
```

## See Also

### Accessing task information

- [urlAsset](urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [destinationURL](destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.

# options (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The configuration options for the task.

> Use AVAssetDownloadConfiguration instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * options;
```

## See Also

### Accessing task information

- [URLAsset](urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [destinationURL](destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.
