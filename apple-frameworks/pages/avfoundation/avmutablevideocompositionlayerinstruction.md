> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction)

# AVMutableVideoCompositionLayerInstruction (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

> Use [AVVideoCompositionLayerInstruction.Configuration](avvideocompositionlayerinstruction/configuration.md) instead.

## Declaration

```swift
class AVMutableVideoCompositionLayerInstruction
```

## Topics

### Creating an instruction

- [init(assetTrack:)](avmutablevideocompositionlayerinstruction/init%28assettrack_%29.md): Deprecated. Creates a new mutable video composition layer instruction for the given track.

### Configuring a track ID

- [trackID](avmutablevideocompositionlayerinstruction/trackid.md): Deprecated. The track identifier of the source track to which the compositor applies the instruction.

### Managing properties

- [setOpacity(\_:at:)](avmutablevideocompositionlayerinstruction/setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRamp(fromStartOpacity:toEndOpacity:timeRange:)](avmutablevideocompositionlayerinstruction/setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform(\_:at:)](avmutablevideocompositionlayerinstruction/settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRamp(fromStart:toEnd:timeRange:)](avmutablevideocompositionlayerinstruction/settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.

### Setting crop rectangle values

- [setCropRectangle(\_:at:)](avmutablevideocompositionlayerinstruction/setcroprectangle%28__at_%29.md): Deprecated. Sets the crop rectangle value at a time within the time range of the instruction.
- [setCropRectangleRamp(fromStartCropRectangle:toEndCropRectangle:timeRange:)](avmutablevideocompositionlayerinstruction/setcroprectangleramp%28fromstartcroprectangle_toendcroprectangle_timerange_%29.md): Deprecated. Sets a crop rectangle ramp to apply during the specified time range.

## Relationships

### Inherits From

- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [Debugging AVFoundation audio mixes, compositions, and video compositions](debugging-avfoundation-audio-mixes-compositions-and-video-compositions.md): Resolve common problems when creating compositions, video compositions, and audio mixes.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.

# AVMutableVideoCompositionLayerInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

## Declaration

```objectivec
@interface AVMutableVideoCompositionLayerInstruction : AVVideoCompositionLayerInstruction
```

## Topics

### Creating an instruction

- [videoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction/videocompositionlayerinstruction.md): Returns a new mutable video composition layer instruction.
- [videoCompositionLayerInstructionWithAssetTrack:](avmutablevideocompositionlayerinstruction/init%28assettrack_%29.md): Deprecated. Creates a new mutable video composition layer instruction for the given track.

### Configuring a track ID

- [trackID](avmutablevideocompositionlayerinstruction/trackid.md): Deprecated. The track identifier of the source track to which the compositor applies the instruction.

### Managing properties

- [setOpacity:atTime:](avmutablevideocompositionlayerinstruction/setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRampFromStartOpacity:toEndOpacity:timeRange:](avmutablevideocompositionlayerinstruction/setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform:atTime:](avmutablevideocompositionlayerinstruction/settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRampFromStartTransform:toEndTransform:timeRange:](avmutablevideocompositionlayerinstruction/settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.

### Setting crop rectangle values

- [setCropRectangle:atTime:](avmutablevideocompositionlayerinstruction/setcroprectangle%28__at_%29.md): Deprecated. Sets the crop rectangle value at a time within the time range of the instruction.
- [setCropRectangleRampFromStartCropRectangle:toEndCropRectangle:timeRange:](avmutablevideocompositionlayerinstruction/setcroprectangleramp%28fromstartcroprectangle_toendcroprectangle_timerange_%29.md): Deprecated. Sets a crop rectangle ramp to apply during the specified time range.

## Relationships

### Inherits From

- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
