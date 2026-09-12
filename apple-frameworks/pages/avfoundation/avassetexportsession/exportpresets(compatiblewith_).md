> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/exportpresets(compatiblewith:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/exportpresets(compatiblewith:))

# exportPresets(compatibleWith:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

Returns compatible export presets for the asset.

> Use [determineCompatibility(ofExportPreset:with:outputFileType:completionHandler:)](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md) instead.

## Declaration

```swift
class func exportPresets(compatibleWith asset: AVAsset) -> [String]
```

## Parameters

- `asset`: An asset to export.

<a id="return-value"></a>

## Return Value

An array of compatible presets. See [Export presets](../export-presets.md) for preset values an asset export session supports.

<a id="Discussion"></a>

## Discussion

Not all export presets are compatible with all assets. For example, video-only assets aren’t compatible with an audio-only preset. Call this method to determine the compatible presets for the asset you’re exporting.

> **Important**

>  Load the asset’s [tracks](../avasset/tracks.md) property before calling this method to avoid blocking the calling thread.

# exportPresetsCompatibleWithAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

Returns compatible export presets for the asset.

> Use [determineCompatibilityOfExportPreset:withAsset:outputFileType:completionHandler:](determinecompatibility%28ofexportpreset_with_outputfiletype_completionhandler_%29.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) exportPresetsCompatibleWithAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: An asset to export.

<a id="return-value"></a>

## Return Value

An array of compatible presets. See [Export presets](../export-presets.md) for preset values an asset export session supports.

<a id="Discussion"></a>

## Discussion

Not all export presets are compatible with all assets. For example, video-only assets aren’t compatible with an audio-only preset. Call this method to determine the compatible presets for the asset you’re exporting.

> **Important**

>  Load the asset’s [tracks](../avasset/tracks.md) property before calling this method to avoid blocking the calling thread.
