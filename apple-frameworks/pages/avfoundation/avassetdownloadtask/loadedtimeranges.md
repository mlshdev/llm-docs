> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtask/loadedtimeranges](https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/loadedtimeranges)

# loadedTimeRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The time ranges of the downloaded media that are ready for playback.

> Use NSURLSessionTask.progress instead

## Declaration

```swift
var loadedTimeRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

The time ranges that this property provides may be discontinuous.

## See Also

### Accessing task information

- [urlAsset](urlasset.md): The asset that this task downloads.
- [options](options.md): Deprecated. The configuration options for the task.
- [destinationURL](destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.

# loadedTimeRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The time ranges of the downloaded media that are ready for playback.

> Use NSURLSessionTask.progress instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSValue *> * loadedTimeRanges;
```

<a id="Discussion"></a>

## Discussion

The time ranges that this property provides may be discontinuous.

## See Also

### Accessing task information

- [URLAsset](urlasset.md): The asset that this task downloads.
- [options](options.md): Deprecated. The configuration options for the task.
- [destinationURL](destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.
