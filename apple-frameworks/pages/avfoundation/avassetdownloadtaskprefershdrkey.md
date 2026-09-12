> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtaskprefershdrkey](https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskprefershdrkey)

# AVAssetDownloadTaskPrefersHDRKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates whether the task downloads HDR instead of SDR video, when available.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using \[NSPredicate predicateWithFormat:@'videoAttributes.videoRange == %@', AVVideoRangePQ\]

## Declaration

```swift
let AVAssetDownloadTaskPrefersHDRKey: String
```

<a id="Discussion"></a>

## Discussion

By default, a download task prefers downloading HDR content. Provide a Boolean value of [false](https://developer.apple.com/documentation/swift/false) to change this behavior.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

# AVAssetDownloadTaskPrefersHDRKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates whether the task downloads HDR instead of SDR video, when available.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using \[NSPredicate predicateWithFormat:@'videoAttributes.videoRange == %@', AVVideoRangePQ\]

## Declaration

```objectivec
extern NSString * const AVAssetDownloadTaskPrefersHDRKey;
```

<a id="Discussion"></a>

## Discussion

By default, a download task prefers downloading HDR content. Provide a Boolean value of [false](https://developer.apple.com/documentation/swift/false) to change this behavior.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.
