> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/init(engine:assetidentifier:mixerparameters:)](https://developer.apple.com/documentation/phase/phasesoundevent/init(engine:assetidentifier:mixerparameters:))

# init(engine:assetIdentifier:mixerParameters:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sound event node with the given asset and mixer parameters.

## Declaration

```swift
init(engine: PHASEEngine, assetIdentifier: String, mixerParameters: PHASEMixerParameters) throws
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `assetIdentifier`: The identifier for the sound event asset from which to create the node.
- `mixerParameters`: A dictionary of spatial mixer parameters to enable. The keys match available identifiers of the object’s spatial mixers.

## See Also

### Creating a Sound Event

- [init(engine:assetIdentifier:)](init%28engine_assetidentifier_%29.md): Creates a sound event node with the given asset.

# initWithEngine:assetIdentifier:mixerParameters:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sound event node with the given asset and mixer parameters.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine assetIdentifier:(NSString *) assetIdentifier mixerParameters:(PHASEMixerParameters *) mixerParameters error:(NSError **) error;
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `assetIdentifier`: The identifier for the sound event asset from which to create the node.
- `mixerParameters`: A dictionary of spatial mixer parameters to enable. The keys match available identifiers of the object’s spatial mixers.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating a Sound Event

- [initWithEngine:assetIdentifier:error:](init%28engine_assetidentifier_%29.md): Creates a sound event node with the given asset.
