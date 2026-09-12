> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentminding](https://developer.apple.com/documentation/avfoundation/avfragmentminding)

# AVFragmentMinding (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines whether an asset supports fragment minding.

## Declaration

```swift
protocol AVFragmentMinding
```

## Topics

### Fragment minder association

- [isAssociatedWithFragmentMinder](avfragmentminding/isassociatedwithfragmentminder.md): A Boolean value that indicates whether an asset that supports fragment minding is currently associated with a fragment minder.

## Relationships

### Conforming Types

- [AVFragmentedAsset](avfragmentedasset.md)
- [AVFragmentedMovie](avfragmentedmovie.md)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.

# AVFragmentMinding (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines whether an asset supports fragment minding.

## Declaration

```objectivec
@protocol AVFragmentMinding
```

## Topics

### Fragment minder association

- [associatedWithFragmentMinder](avfragmentminding/isassociatedwithfragmentminder.md): A Boolean value that indicates whether an asset that supports fragment minding is currently associated with a fragment minder.

## Relationships

### Conforming Types

- [AVFragmentedAsset](avfragmentedasset.md)
- [AVFragmentedMovie](avfragmentedmovie.md)

## See Also

### Fragmented assets

- [AVFragmentedAsset](avfragmentedasset.md): An asset with a duration that the system can extend without modifying its existing media data.
- [AVFragmentedAssetTrack](avfragmentedassettrack.md): An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
- [AVFragmentedAssetMinder](avfragmentedassetminder.md): An object that periodically checks whether the system adds new fragments to a fragmented asset.
