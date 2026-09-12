> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnodedefinition/init(mixerdefinition:format:)](https://developer.apple.com/documentation/phase/phasepushstreamnodedefinition/init(mixerdefinition:format:))

# init(mixerDefinition:format:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a node definition for audio streams.

## Declaration

```swift
init(mixerDefinition: PHASEMixerDefinition, format: AVAudioFormat)
```

## Parameters

- `mixerDefinition`: An object that combines audio layers.
- `format`: The format of the audio stream data.

## See Also

### Creating a Node

- [init(mixerDefinition:format:identifier:)](init%28mixerdefinition_format_identifier_%29.md): Creates a named node definition for audio streams.

# initWithMixerDefinition:format: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a node definition for audio streams.

## Declaration

```objectivec
- (instancetype) initWithMixerDefinition:(PHASEMixerDefinition *) mixerDefinition format:(AVAudioFormat *) format;
```

## Parameters

- `mixerDefinition`: An object that combines audio layers.
- `format`: The format of the audio stream data.

## See Also

### Creating a Node

- [initWithMixerDefinition:format:identifier:](init%28mixerdefinition_format_identifier_%29.md): Creates a named node definition for audio streams.
