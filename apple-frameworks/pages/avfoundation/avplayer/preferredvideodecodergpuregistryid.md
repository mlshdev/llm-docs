> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/preferredvideodecodergpuregistryid](https://developer.apple.com/documentation/avfoundation/avplayer/preferredvideodecodergpuregistryid)

# preferredVideoDecoderGPURegistryID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The registry identifier for the GPU used for video decoding.

## Declaration

```swift
nonisolated var preferredVideoDecoderGPURegistryID: UInt64 { get set }
```

<a id="Discussion"></a>

## Discussion

By default, whenever possible, the GPU associated with the display presenting the [CALayer](../../quartzcore/calayer.md) performs the video decoding. Decode transitions to a new GPU, if appropriate, when the [CALayer](../../quartzcore/calayer.md) moves to a new display. This property overrides this default behavior, forcing decode to prefer an affinity to the GPU specified regardless of which GPU displays the associated [CALayer](../../quartzcore/calayer.md). Obtain the GPU registry ID from the GPU [MTLDevice](../../metal/mtldevice.md) using [registryID](../../metal/mtldevice/registryid.md) or from OpenGL or OpenCL.

> **Important**

>  You must specify an external GPU (or a slotted GPU in Mac Pro) with this property. You can’t switch decoding between the integrated graphics and the built-in discrete graphics.

## See Also

### Configuring audio and video devices

- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): Specifies the unique ID of the Core Audio output device used to play audio.

# preferredVideoDecoderGPURegistryID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The registry identifier for the GPU used for video decoding.

## Declaration

```objectivec
@property (nonatomic) uint64_t preferredVideoDecoderGPURegistryID;
```

<a id="Discussion"></a>

## Discussion

By default, whenever possible, the GPU associated with the display presenting the [CALayer](../../quartzcore/calayer.md) performs the video decoding. Decode transitions to a new GPU, if appropriate, when the [CALayer](../../quartzcore/calayer.md) moves to a new display. This property overrides this default behavior, forcing decode to prefer an affinity to the GPU specified regardless of which GPU displays the associated [CALayer](../../quartzcore/calayer.md). Obtain the GPU registry ID from the GPU [MTLDevice](../../metal/mtldevice.md) using [registryID](../../metal/mtldevice/registryid.md) or from OpenGL or OpenCL.

> **Important**

>  You must specify an external GPU (or a slotted GPU in Mac Pro) with this property. You can’t switch decoding between the integrated graphics and the built-in discrete graphics.

## See Also

### Configuring audio and video devices

- [audioOutputDeviceUniqueID](audiooutputdeviceuniqueid.md): Specifies the unique ID of the Core Audio output device used to play audio.
