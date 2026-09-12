> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtaskminimumrequiredmediabitratekey](https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskminimumrequiredmediabitratekey)

# AVAssetDownloadTaskMinimumRequiredMediaBitrateKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates the minimum bit rate of the variant to download.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using desired comparison value against averageBitRate/peakBitRate instead

## Declaration

```swift
let AVAssetDownloadTaskMinimumRequiredMediaBitrateKey: String
```

<a id="Discussion"></a>

## Discussion

By default, a download task selects the highest bit rate variant available. To download a variant of a particular size, provide an [NSNumber](../foundation/nsnumber.md) value that indicates the preferred bit rate.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

# AVAssetDownloadTaskMinimumRequiredMediaBitrateKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates the minimum bit rate of the variant to download.

> Use AVAssetDownloadConfiguration:variantQualifiers with assetVariantQualifierWithPredicate using desired comparison value against averageBitRate/peakBitRate instead

## Declaration

```objectivec
extern NSString * const AVAssetDownloadTaskMinimumRequiredMediaBitrateKey;
```

<a id="Discussion"></a>

## Discussion

By default, a download task selects the highest bit rate variant available. To download a variant of a particular size, provide an [NSNumber](../foundation/nsnumber.md) value that indicates the preferred bit rate.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.
