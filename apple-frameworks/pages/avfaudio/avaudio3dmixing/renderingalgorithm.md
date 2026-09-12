> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing/renderingalgorithm](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing/renderingalgorithm)

# renderingAlgorithm (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

The type of rendering algorithm the mixer uses.

## Declaration

```swift
var renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm { get set }
```

<a id="Discussion"></a>

## Discussion

Depending on the current output format of the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance, the system may only support a subset of the rendering algorithms. You can retrieve an array of valid rendering algorithms by calling the [applicableRenderingAlgorithms](../avaudioenvironmentnode/applicablerenderingalgorithms.md) function of the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance.

The default rendering algorithm is [AVAudio3DMixingRenderingAlgorithm.equalPowerPanning](../avaudio3dmixingrenderingalgorithm/equalpowerpanning.md). Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting and Setting the Rendering Algorithm

- [AVAudio3DMixingRenderingAlgorithm](../avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.

# renderingAlgorithm (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of rendering algorithm the mixer uses.

## Declaration

```objectivec
@property (nonatomic) AVAudio3DMixingRenderingAlgorithm renderingAlgorithm;
```

<a id="Discussion"></a>

## Discussion

Depending on the current output format of the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance, the system may only support a subset of the rendering algorithms. You can retrieve an array of valid rendering algorithms by calling the [applicableRenderingAlgorithms](../avaudioenvironmentnode/applicablerenderingalgorithms.md) function of the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) instance.

The default rendering algorithm is [AVAudio3DMixingRenderingAlgorithmEqualPowerPanning](../avaudio3dmixingrenderingalgorithm/equalpowerpanning.md). Only the [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) class implements this property.

## See Also

### Getting and Setting the Rendering Algorithm

- [AVAudio3DMixingRenderingAlgorithm](../avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
