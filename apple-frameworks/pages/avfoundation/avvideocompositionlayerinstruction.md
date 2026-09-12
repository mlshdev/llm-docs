> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction)

# AVVideoCompositionLayerInstruction (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.

## Declaration

```swift
class AVVideoCompositionLayerInstruction
```

## Topics

### Creating a layer instruction

- [init(configuration:)](avvideocompositionlayerinstruction/init%28configuration_%29.md): Initialize an AVVideoCompositionLayerInstruction with a configuration.
- [AVVideoCompositionLayerInstruction.Configuration](avvideocompositionlayerinstruction/configuration.md): Configurable properties for initializing a new AVVideoCompositionLayerInstruction instance.

### Getting the track ID

- [trackID](avvideocompositionlayerinstruction/trackid.md): The track identifier of the source track to which the compositor will apply the instruction.

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](avvideocompositionlayerinstruction/croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](avvideocompositionlayerinstruction/croprectangleramp.md)
- [getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)](avvideocompositionlayerinstruction/getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [opacityRamp(at:)](avvideocompositionlayerinstruction/opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](avvideocompositionlayerinstruction/opacityramp.md)
- [getOpacityRamp(for:startOpacity:endOpacity:timeRange:)](avvideocompositionlayerinstruction/getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [transformRamp(at:)](avvideocompositionlayerinstruction/transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.TransformRamp](avvideocompositionlayerinstruction/transformramp.md)
- [getTransformRamp(for:start:end:timeRange:)](avvideocompositionlayerinstruction/gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.

### Initializers

- [init(coder:)](avvideocompositionlayerinstruction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md)

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
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

# AVVideoCompositionLayerInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.

## Declaration

```objectivec
@interface AVVideoCompositionLayerInstruction : NSObject
```

## Topics

### Creating a layer instruction

- [videoCompositionLayerInstructionWithLayerInstruction:](avvideocompositionlayerinstruction/videocompositionlayerinstructionwithlayerinstruction_.md): Pass-through initializer, for internal use in AVFoundation only

### Getting the track ID

- [trackID](avvideocompositionlayerinstruction/trackid.md): The track identifier of the source track to which the compositor will apply the instruction.

### Getting opacity, transform, and cropping ramps

- [getCropRectangleRampForTime:startCropRectangle:endCropRectangle:timeRange:](avvideocompositionlayerinstruction/getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [getOpacityRampForTime:startOpacity:endOpacity:timeRange:](avvideocompositionlayerinstruction/getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [getTransformRampForTime:startTransform:endTransform:timeRange:](avvideocompositionlayerinstruction/gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.
