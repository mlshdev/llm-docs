> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/unregisterasset(identifier:completion:)](https://developer.apple.com/documentation/phase/phaseassetregistry/unregisterasset(identifier:completion:))

# unregisterAsset(identifier:completion:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

## Declaration

```swift
func unregisterAsset(identifier: String, completion handler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func unregisterAsset(identifier: String) async -> Bool
```

## Parameters

- `identifier`: The unique name that the app defines for the sound asset.
- `handler`: Code that the system runs after it unregisters the asset.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func unregisterAsset(identifier: String) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Registering Sound Assets

- [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [registerSoundAsset(data:identifier:format:normalizationMode:)](registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.

# unregisterAssetWithIdentifier:completion: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

## Declaration

```objectivec
- (void) unregisterAssetWithIdentifier:(NSString *) identifier completion:(void (^)(bool success)) handler;
```

## Parameters

- `identifier`: The unique name that the app defines for the sound asset.
- `handler`: Code that the system runs after it unregisters the asset.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func unregisterAsset(identifier: String) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Registering Sound Assets

- [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [registerSoundAssetWithData:identifier:format:normalizationMode:error:](registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.
