> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/init(assettrack:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/init(assettrack:))

# init(assetTrack:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Creates a new mutable video composition layer instruction for the given track.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
convenience init(assetTrack track: AVAssetTrack)
```

## Parameters

- `track`: The asset track to which to apply the instruction.

<a id="return-value"></a>

## Return Value

A new mutable video composition layer instruction with no transform or opacity ramps and [trackID](trackid.md) initialized to the track ID of `track`.

# videoCompositionLayerInstructionWithAssetTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a new mutable video composition layer instruction for the given track.

## Declaration

```objectivec
+ (instancetype) videoCompositionLayerInstructionWithAssetTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The asset track to which to apply the instruction.

<a id="return-value"></a>

## Return Value

A new mutable video composition layer instruction with no transform or opacity ramps and [trackID](trackid.md) initialized to the track ID of `track`.

## See Also

### Creating an instruction

- [videoCompositionLayerInstruction](videocompositionlayerinstruction.md): Returns a new mutable video composition layer instruction.
