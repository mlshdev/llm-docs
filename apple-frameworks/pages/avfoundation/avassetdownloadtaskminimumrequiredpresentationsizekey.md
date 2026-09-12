> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtaskminimumrequiredpresentationsizekey](https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskminimumrequiredpresentationsizekey)

# AVAssetDownloadTaskMinimumRequiredPresentationSizeKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates the minimum presentation size of the variant to download.

> Use AVAssetDownloadConfiguration:variantQualifiers with predicateForPresentationWidth and predicateForPresentationHeight instead

## Declaration

```swift
let AVAssetDownloadTaskMinimumRequiredPresentationSizeKey: String
```

<a id="Discussion"></a>

## Discussion

By default, a download task selects the variant with the largest media presentation size. To download a variant of a particular size, provide a [CGSize](../corefoundation/cgsize.md) value for this key.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

# AVAssetDownloadTaskMinimumRequiredPresentationSizeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates the minimum presentation size of the variant to download.

> Use AVAssetDownloadConfiguration:variantQualifiers with predicateForPresentationWidth and predicateForPresentationHeight instead

## Declaration

```objectivec
extern NSString * const AVAssetDownloadTaskMinimumRequiredPresentationSizeKey;
```

<a id="Discussion"></a>

## Discussion

By default, a download task selects the variant with the largest media presentation size. To download a variant of a particular size, provide a [CGSize](../corefoundation/cgsize.md) value for this key.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.
