> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesamplernodedefinition/init(soundassetidentifier:mixerdefinition:identifier:)](https://developer.apple.com/documentation/phase/phasesamplernodedefinition/init(soundassetidentifier:mixerdefinition:identifier:))

# init(soundAssetIdentifier:mixerDefinition:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named sampler node with the given sound asset and mixer.

## Declaration

```swift
convenience init(soundAssetIdentifier: String, mixerDefinition: PHASEMixerDefinition, identifier: String)
```

## Parameters

- `soundAssetIdentifier`: A name that refers to the audio data that the node plays. See [assetIdentifier](assetidentifier.md).
- `mixerDefinition`: An object that combines audio layers.
- `identifier`: A unique name for the sample node.

## See Also

### Creating a Sampler Node

- [init(soundAssetIdentifier:mixerDefinition:)](init%28soundassetidentifier_mixerdefinition_%29.md): Creates a sampler node with the given sound asset and mixer.

# initWithSoundAssetIdentifier:mixerDefinition:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named sampler node with the given sound asset and mixer.

## Declaration

```objectivec
- (instancetype) initWithSoundAssetIdentifier:(NSString *) soundAssetIdentifier mixerDefinition:(PHASEMixerDefinition *) mixerDefinition identifier:(NSString *) identifier;
```

## Parameters

- `soundAssetIdentifier`: A name that refers to the audio data that the node plays. See [assetIdentifier](assetidentifier.md).
- `mixerDefinition`: An object that combines audio layers.
- `identifier`: A unique name for the sample node.

## See Also

### Creating a Sampler Node

- [initWithSoundAssetIdentifier:mixerDefinition:](init%28soundassetidentifier_mixerdefinition_%29.md): Creates a sampler node with the given sound asset and mixer.
