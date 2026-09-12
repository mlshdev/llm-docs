> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerviewcontroller/moveasset(withidentifier:afterassetwithidentifier:)](https://developer.apple.com/documentation/photosui/phpickerviewcontroller/moveasset(withidentifier:afterassetwithidentifier:))

# moveAsset(withIdentifier:afterAssetWithIdentifier:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Reorders assets that are in a selected state.

## Declaration

```swift
func moveAsset(withIdentifier identifier: String, afterAssetWithIdentifier afterIdentifier: String?)
```

## Parameters

- `identifier`: The identifier that represents the asset to move.
- `afterIdentifier`: The identifier to move the asset to.

<a id="Discussion"></a>

## Discussion

This method ignores assets that are invalid or aren’t in a selected state, and if you don’t specify a library when calling [init(photoLibrary:)](../phpickerconfiguration-swift.struct/init%28photolibrary_%29.md).

If `afterIdentifier` is `nil`, the identifier you specify moves to the beginning of the picker.

# moveAssetWithIdentifier:afterAssetWithIdentifier: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Reorders assets that are in a selected state.

## Declaration

```objectivec
- (void) moveAssetWithIdentifier:(NSString *) identifier afterAssetWithIdentifier:(NSString *) afterIdentifier;
```

## Parameters

- `identifier`: The identifier that represents the asset to move.
- `afterIdentifier`: The identifier to move the asset to.

<a id="Discussion"></a>

## Discussion

This method ignores assets that are invalid or aren’t in a selected state, and if you don’t specify a library when calling [init(photoLibrary:)](../phpickerconfiguration-swift.struct/init%28photolibrary_%29.md).

If `afterIdentifier` is `nil`, the identifier you specify moves to the beginning of the picker.
