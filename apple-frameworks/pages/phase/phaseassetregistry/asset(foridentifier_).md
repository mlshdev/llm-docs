> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/asset(foridentifier:)](https://developer.apple.com/documentation/phase/phaseassetregistry/asset(foridentifier:))

# asset(forIdentifier:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Provides the asset named with the designated identifier.

## Declaration

```swift
func asset(forIdentifier identifier: String) -> PHASEAsset?
```

## Parameters

- `identifier`: The unique name of the asset.

<a id="return-value"></a>

## Return Value

A framework asset by the destignated name, if the app registers the asset prior. Otherwise, returns `nil`.

## See Also

### Registering Sound Event Assets

- [registerSoundEventAsset(rootNode:identifier:)](registersoundeventasset%28rootnode_identifier_%29.md): Registers the root node of the sound event asset.

# assetForIdentifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Provides the asset named with the designated identifier.

## Declaration

```objectivec
- (PHASEAsset *) assetForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The unique name of the asset.

<a id="return-value"></a>

## Return Value

A framework asset by the destignated name, if the app registers the asset prior. Otherwise, returns `nil`.

## See Also

### Registering Sound Event Assets

- [registerSoundEventAssetWithRootNode:identifier:error:](registersoundeventasset%28rootnode_identifier_%29.md): Registers the root node of the sound event asset.
