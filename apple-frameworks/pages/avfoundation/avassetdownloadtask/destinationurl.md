> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtask/destinationurl](https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/destinationurl)

# destinationURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The local file URL to where the task downloads the asset.

> Use the URL property of URLAsset instead

## Declaration

```swift
var destinationURL: URL { get }
```

## See Also

### Accessing task information

- [urlAsset](urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [options](options.md): Deprecated. The configuration options for the task.

# destinationURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The local file URL to where the task downloads the asset.

> Use the URL property of URLAsset instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * destinationURL;
```

## See Also

### Accessing task information

- [URLAsset](urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [options](options.md): Deprecated. The configuration options for the task.
