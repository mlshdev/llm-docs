> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedassetminder/removefragmentedasset(_:)](https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/removefragmentedasset(_:))

# removeFragmentedAsset(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a fragmented asset from the array of minded assets.

## Declaration

```swift
func removeFragmentedAsset(_ asset: any AVAsset & AVFragmentMinding)
```

## Parameters

- `asset`: The fragmented asset to remove from the minder.

## See Also

### Adding and removing fragmented assets

- [addFragmentedAsset(\_:)](addfragmentedasset%28__%29.md): Adds a fragmented asset to the array of minded assets.

# removeFragmentedAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a fragmented asset from the array of minded assets.

## Declaration

```objectivec
- (void) removeFragmentedAsset:(AVAsset<AVFragmentMinding> *) asset;
```

## Parameters

- `asset`: The fragmented asset to remove from the minder.

## See Also

### Adding and removing fragmented assets

- [addFragmentedAsset:](addfragmentedasset%28__%29.md): Adds a fragmented asset to the array of minded assets.
