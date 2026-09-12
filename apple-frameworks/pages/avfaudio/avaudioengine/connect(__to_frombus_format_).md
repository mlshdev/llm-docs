> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioengine/connect(_:to:frombus:format:)](https://developer.apple.com/documentation/avfaudio/avaudioengine/connect(_:to:frombus:format:))

# connect(\_:to:fromBus:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Establishes a connection between a source node and multiple destination nodes.

## Declaration

```swift
func connect(_ sourceNode: AVAudioNode, to destNodes: [AVAudioConnectionPoint], fromBus sourceBus: AVAudioNodeBus, format: AVAudioFormat?)
```

## Parameters

- `sourceNode`: The source node.
- `destNodes`: An array of [AVAudioConnectionPoint](../avaudioconnectionpoint.md) objects that specify destination nodes and busses.
- `sourceBus`: The output bus on the source node.
- `format`: If not `NULL`, the framework uses this value for the format of the source audio node’s output bus. In all cases, the framework matches the format of the destination audio node’s input bus to the source audio node’s output bus.

<a id="Discussion"></a>

## Discussion

Connections that use this method are either one-to-one or one-to-many.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [inputConnectionPoint(for:inputBus:)](inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPoints(for:outputBus:)](outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.

# connect:toConnectionPoints:fromBus:format: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Establishes a connection between a source node and multiple destination nodes.

## Declaration

```objectivec
- (void) connect:(AVAudioNode *) sourceNode toConnectionPoints:(NSArray<AVAudioConnectionPoint *> *) destNodes fromBus:(AVAudioNodeBus) sourceBus format:(AVAudioFormat *) format;
```

## Parameters

- `sourceNode`: The source node.
- `destNodes`: An array of [AVAudioConnectionPoint](../avaudioconnectionpoint.md) objects that specify destination nodes and busses.
- `sourceBus`: The output bus on the source node.
- `format`: If not `NULL`, the framework uses this value for the format of the source audio node’s output bus. In all cases, the framework matches the format of the destination audio node’s input bus to the source audio node’s output bus.

<a id="Discussion"></a>

## Discussion

Connections that use this method are either one-to-one or one-to-many.

## See Also

### Using Connection Points

- [AVAudioConnectionPoint](../avaudioconnectionpoint.md): A representation of either a source or destination connection point in the audio engine.
- [inputConnectionPointForNode:inputBus:](inputconnectionpoint%28for_inputbus_%29.md): Returns connection information about a node’s input bus.
- [outputConnectionPointsForNode:outputBus:](outputconnectionpoints%28for_outputbus_%29.md): Returns connection information about a node’s output bus.
