> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnodedefinition/init(mixerdefinition:format:identifier:)](https://developer.apple.com/documentation/phase/phasepushstreamnodedefinition/init(mixerdefinition:format:identifier:))

# init(mixerDefinition:format:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named node definition for audio streams.

## Declaration

```swift
convenience init(mixerDefinition: PHASEMixerDefinition, format: AVAudioFormat, identifier: String)
```

## Parameters

- `mixerDefinition`: An object that combines audio layers.
- `format`: The format of the audio stream data.
- `identifier`: A unique name for the node.

## See Also

### Creating a Node

- [init(mixerDefinition:format:)](init%28mixerdefinition_format_%29.md): Creates a node definition for audio streams.

# initWithMixerDefinition:format:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named node definition for audio streams.

## Declaration

```objectivec
- (instancetype) initWithMixerDefinition:(PHASEMixerDefinition *) mixerDefinition format:(AVAudioFormat *) format identifier:(NSString *) identifier;
```

## Parameters

- `mixerDefinition`: An object that combines audio layers.
- `format`: The format of the audio stream data.
- `identifier`: A unique name for the node.

## See Also

### Creating a Node

- [initWithMixerDefinition:format:](init%28mixerdefinition_format_%29.md): Creates a node definition for audio streams.
