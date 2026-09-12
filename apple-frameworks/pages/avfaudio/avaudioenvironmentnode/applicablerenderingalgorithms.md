> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode/applicablerenderingalgorithms](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/applicablerenderingalgorithms)

# applicableRenderingAlgorithms (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of rendering algorithms applicable to the environment node.

## Declaration

```swift
var applicableRenderingAlgorithms: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

The `AVAudioEnvironmentNode` class supports several rendering algorithms for each input bus as [AVAudio3DMixingRenderingAlgorithm](../avaudio3dmixingrenderingalgorithm.md) defines.

Depending on the current output format of the environment node, this method returns an immutable array of the applicable rendering algorithms. This subset of applicable rendering algorithms is important when you configure the environment node to a multichannel output format because only a subset of the algorithms render to all of the channels.

Retrieve the applicable algorithms after a successful connection to the destination node through one of the [AVAudioEngine](../avaudioengine.md) connect methods.

## See Also

### Related Documentation

- [connect(\_:to:format:)](../avaudioengine/connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect(\_:to:fromBus:toBus:format:)](../avaudioengine/connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.

# applicableRenderingAlgorithms (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of rendering algorithms applicable to the environment node.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * applicableRenderingAlgorithms;
```

<a id="Discussion"></a>

## Discussion

The `AVAudioEnvironmentNode` class supports several rendering algorithms for each input bus as [AVAudio3DMixingRenderingAlgorithm](../avaudio3dmixingrenderingalgorithm.md) defines.

Depending on the current output format of the environment node, this method returns an immutable array of the applicable rendering algorithms. This subset of applicable rendering algorithms is important when you configure the environment node to a multichannel output format because only a subset of the algorithms render to all of the channels.

Retrieve the applicable algorithms after a successful connection to the destination node through one of the [AVAudioEngine](../avaudioengine.md) connect methods.

## See Also

### Related Documentation

- [connect:to:format:](../avaudioengine/connect%28__to_format_%29.md): Deprecated. Establishes a connection between two nodes.
- [connect:to:fromBus:toBus:format:](../avaudioengine/connect%28__to_frombus_tobus_format_%29.md): Deprecated. Establishes a connection between two nodes, specifying the input and output busses.
