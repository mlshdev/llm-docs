> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/compatibletrack(for:)](https://developer.apple.com/documentation/avfoundation/avurlasset/compatibletrack(for:))

# compatibleTrack(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns an asset track from which you can insert any time range into a given composition track.

> Use [findCompatibleTrack(for:completionHandler:)](findcompatibletrack%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func compatibleTrack(for compositionTrack: AVCompositionTrack) -> AVAssetTrack?
```

## Parameters

- `compositionTrack`: The composition track.

<a id="return-value"></a>

## Return Value

An asset track managed by the asset from which any time range can be inserted into a given composition track.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load compatible tracks asynchronously using [findCompatibleTrack(for:completionHandler:)](findcompatibletrack%28for_completionhandler_%29.md) instead.

This method is the logical complement of [mutableTrack(compatibleWith:)](../avmutablecomposition/mutabletrack%28compatiblewith_%29.md).

# compatibleTrackForCompositionTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns an asset track from which you can insert any time range into a given composition track.

> Use [findCompatibleTrackForCompositionTrack:completionHandler:](findcompatibletrack%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (AVAssetTrack *) compatibleTrackForCompositionTrack:(AVCompositionTrack *) compositionTrack;
```

## Parameters

- `compositionTrack`: The composition track.

<a id="return-value"></a>

## Return Value

An asset track managed by the asset from which any time range can be inserted into a given composition track.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load compatible tracks asynchronously using [findCompatibleTrackForCompositionTrack:completionHandler:](findcompatibletrack%28for_completionhandler_%29.md) instead.

This method is the logical complement of [mutableTrackCompatibleWithTrack:](../avmutablecomposition/mutabletrack%28compatiblewith_%29.md).
