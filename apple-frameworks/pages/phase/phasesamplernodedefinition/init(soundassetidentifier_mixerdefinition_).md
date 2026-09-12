> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesamplernodedefinition/init(soundassetidentifier:mixerdefinition:)](https://developer.apple.com/documentation/phase/phasesamplernodedefinition/init(soundassetidentifier:mixerdefinition:))

# init(soundAssetIdentifier:mixerDefinition:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sampler node with the given sound asset and mixer.

## Declaration

```swift
init(soundAssetIdentifier: String, mixerDefinition: PHASEMixerDefinition)
```

## Parameters

- `soundAssetIdentifier`: A name that refers to the audio data that the node plays. See [assetIdentifier](assetidentifier.md).
- `mixerDefinition`: An object that combines audio layers.

## See Also

### Creating a Sampler Node

- [init(soundAssetIdentifier:mixerDefinition:identifier:)](init%28soundassetidentifier_mixerdefinition_identifier_%29.md): Creates a named sampler node with the given sound asset and mixer.

# initWithSoundAssetIdentifier:mixerDefinition: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sampler node with the given sound asset and mixer.

## Declaration

```objectivec
- (instancetype) initWithSoundAssetIdentifier:(NSString *) soundAssetIdentifier mixerDefinition:(PHASEMixerDefinition *) mixerDefinition;
```

## Parameters

- `soundAssetIdentifier`: A name that refers to the audio data that the node plays. See [assetIdentifier](assetidentifier.md).
- `mixerDefinition`: An object that combines audio layers.

## See Also

### Creating a Sampler Node

- [initWithSoundAssetIdentifier:mixerDefinition:identifier:](init%28soundassetidentifier_mixerdefinition_identifier_%29.md): Creates a named sampler node with the given sound asset and mixer.
