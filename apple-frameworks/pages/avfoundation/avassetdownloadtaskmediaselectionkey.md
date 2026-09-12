> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtaskmediaselectionkey](https://developer.apple.com/documentation/avfoundation/avassetdownloadtaskmediaselectionkey)

# AVAssetDownloadTaskMediaSelectionKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates which media selection to download.

> Use AVAssetDownloadConfiguration:mediaSelections instead

## Declaration

```swift
let AVAssetDownloadTaskMediaSelectionKey: String
```

<a id="Discussion"></a>

## Discussion

By default, a download task automatically retrieves all of an asset’s media selections. To download a specific media selection, provide an [AVMediaSelection](avmediaselection.md) object for this key.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

# AVAssetDownloadTaskMediaSelectionKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key that indicates which media selection to download.

> Use AVAssetDownloadConfiguration:mediaSelections instead

## Declaration

```objectivec
extern NSString * const AVAssetDownloadTaskMediaSelectionKey;
```

<a id="Discussion"></a>

## Discussion

By default, a download task automatically retrieves all of an asset’s media selections. To download a specific media selection, provide an [AVMediaSelection](avmediaselection.md) object for this key.

## See Also

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.
