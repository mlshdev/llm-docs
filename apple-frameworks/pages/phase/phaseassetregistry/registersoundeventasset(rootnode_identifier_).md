> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/registersoundeventasset(rootnode:identifier:)](https://developer.apple.com/documentation/phase/phaseassetregistry/registersoundeventasset(rootnode:identifier:))

# registerSoundEventAsset(rootNode:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Registers the root node of the sound event asset.

## Declaration

```swift
func registerSoundEventAsset(rootNode: PHASESoundEventNodeDefinition, identifier: String?) throws -> PHASESoundEventNodeAsset
```

## Parameters

- `rootNode`: The root node of the sound event asset to register.
- `identifier`: The identifier to assign to this parameter. Assigning `nil` generates an automatic identifier.

<a id="return-value"></a>

## Return Value

A sound event node asset.

## See Also

### Registering Sound Event Assets

- [asset(forIdentifier:)](asset%28foridentifier_%29.md): Provides the asset named with the designated identifier.

# registerSoundEventAssetWithRootNode:identifier:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Registers the root node of the sound event asset.

## Declaration

```objectivec
- (PHASESoundEventNodeAsset *) registerSoundEventAssetWithRootNode:(PHASESoundEventNodeDefinition *) rootNode identifier:(NSString *) identifier error:(NSError **) error;
```

## Parameters

- `rootNode`: The root node of the sound event asset to register.
- `identifier`: The identifier to assign to this parameter. Assigning `nil` generates an automatic identifier.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A sound event node asset. On failure, this method returns `nil`.

## See Also

### Registering Sound Event Assets

- [assetForIdentifier:](asset%28foridentifier_%29.md): Provides the asset named with the designated identifier.
