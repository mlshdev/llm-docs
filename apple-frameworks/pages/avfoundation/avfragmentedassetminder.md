> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedassetminder](https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder)

# AVFragmentedAssetMinder (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that periodically checks whether the system adds new fragments to a fragmented asset.

## Declaration

```swift
class AVFragmentedAssetMinder
```

## Topics

### Creating an asset minder

- [init(asset:mindingInterval:)](avfragmentedassetminder/init%28asset_mindinginterval_%29.md): Creates a fragmented asset minder that monitors the specified asset at the indicated minding interval.

### Configuring the minding interval

- [mindingInterval](avfragmentedassetminder/mindinginterval.md): An interval that specifies when to perform a check for additional fragments.

### Inspecting a fragment asset

- [assets](avfragmentedassetminder/assets.md): The minded array of fragmented assets.

### Adding and removing fragmented assets

- [addFragmentedAsset(\_:)](avfragmentedassetminder/addfragmentedasset%28__%29.md): Adds a fragmented asset to the array of minded assets.
- [removeFragmentedAsset(\_:)](avfragmentedassetminder/removefragmentedasset%28__%29.md): Removes a fragmented asset from the array of minded assets.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVFragmentedMovieMinder](avfragmentedmovieminder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

# AVFragmentedAssetMinder (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that periodically checks whether the system adds new fragments to a fragmented asset.

## Declaration

```objectivec
@interface AVFragmentedAssetMinder : NSObject
```

## Topics

### Creating an asset minder

- [initWithAsset:mindingInterval:](avfragmentedassetminder/init%28asset_mindinginterval_%29.md): Creates a fragmented asset minder that monitors the specified asset at the indicated minding interval.
- [fragmentedAssetMinderWithAsset:mindingInterval:](avfragmentedassetminder/fragmentedassetminderwithasset_mindinginterval_.md): Creates a fragmented asset minder containing the specified asset and minding interval.

### Configuring the minding interval

- [mindingInterval](avfragmentedassetminder/mindinginterval.md): An interval that specifies when to perform a check for additional fragments.

### Inspecting a fragment asset

- [assets](avfragmentedassetminder/assets.md): The minded array of fragmented assets.

### Adding and removing fragmented assets

- [addFragmentedAsset:](avfragmentedassetminder/addfragmentedasset%28__%29.md): Adds a fragmented asset to the array of minded assets.
- [removeFragmentedAsset:](avfragmentedassetminder/removefragmentedasset%28__%29.md): Removes a fragmented asset from the array of minded assets.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVFragmentedMovieMinder](avfragmentedmovieminder.md)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.
