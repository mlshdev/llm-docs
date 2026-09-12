> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/init(engine:assetidentifier:)](https://developer.apple.com/documentation/phase/phasesoundevent/init(engine:assetidentifier:))

# init(engine:assetIdentifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sound event node with the given asset.

## Declaration

```swift
init(engine: PHASEEngine, assetIdentifier: String) throws
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `assetIdentifier`: The identifier for the sound event asset from which to create the node.

## See Also

### Creating a Sound Event

- [init(engine:assetIdentifier:mixerParameters:)](init%28engine_assetidentifier_mixerparameters_%29.md): Creates a sound event node with the given asset and mixer parameters.

# initWithEngine:assetIdentifier:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a sound event node with the given asset.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine assetIdentifier:(NSString *) assetIdentifier error:(NSError **) error;
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `assetIdentifier`: The identifier for the sound event asset from which to create the node.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating a Sound Event

- [initWithEngine:assetIdentifier:mixerParameters:error:](init%28engine_assetidentifier_mixerparameters_%29.md): Creates a sound event node with the given asset and mixer parameters.
