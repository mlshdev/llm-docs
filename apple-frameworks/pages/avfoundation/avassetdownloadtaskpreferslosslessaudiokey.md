> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtaskpreferslosslessaudiokey](https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskpreferslosslessaudiokey)

# AVAssetDownloadTaskPrefersLosslessAudioKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.5+ (deprecated in 27.0) · iPadOS 14.5+ (deprecated in 27.0) · Mac Catalyst 14.5+ (deprecated in 27.0) · macOS 11.3+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates whether the task downloads media selections in lossless audio format, when available.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using \[NSPredicate predicateWithFormat:@'%d in audioAttributes.formatIDs', kAudioFormatAppleLossless\]

## Declaration

```swift
let AVAssetDownloadTaskPrefersLosslessAudioKey: String
```

<a id="Discussion"></a>

## Discussion

By default, a download task prefers downloading lossy audio formats. Provide a Boolean value of [true](https://developer.apple.com/documentation/swift/true) to change this behavior.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.

# AVAssetDownloadTaskPrefersLosslessAudioKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.5+ (deprecated in 27.0) · iPadOS 14.5+ (deprecated in 27.0) · Mac Catalyst 14.5+ (deprecated in 27.0) · macOS 11.3+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates whether the task downloads media selections in lossless audio format, when available.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using \[NSPredicate predicateWithFormat:@'%d in audioAttributes.formatIDs', kAudioFormatAppleLossless\]

## Declaration

```objectivec
extern NSString * const AVAssetDownloadTaskPrefersLosslessAudioKey;
```

<a id="Discussion"></a>

## Discussion

By default, a download task prefers downloading lossy audio formats. Provide a Boolean value of [true](https://developer.apple.com/documentation/swift/true) to change this behavior.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
