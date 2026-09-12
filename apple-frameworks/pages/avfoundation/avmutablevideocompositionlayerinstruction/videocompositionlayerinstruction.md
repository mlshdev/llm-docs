> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/videocompositionlayerinstruction](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/videocompositionlayerinstruction)

# videoCompositionLayerInstruction

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new mutable video composition layer instruction.

## Declaration

```objectivec
+ (instancetype) videoCompositionLayerInstruction;
```

<a id="return-value"></a>

## Return Value

A new mutable video composition layer instruction with no transform or opacity ramps and [trackID](trackid.md) initialized to [kCMPersistentTrackID_Invalid](../../coremedia/kcmpersistenttrackid_invalid.md).

## See Also

### Creating an instruction

- [videoCompositionLayerInstructionWithAssetTrack:](init%28assettrack_%29.md): Deprecated. Creates a new mutable video composition layer instruction for the given track.
