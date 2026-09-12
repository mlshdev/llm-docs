> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedassetminder/addfragmentedasset(_:)](https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/addfragmentedasset(_:))

# addFragmentedAsset(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a fragmented asset to the array of minded assets.

## Declaration

```swift
func addFragmentedAsset(_ asset: any AVAsset & AVFragmentMinding)
```

## Parameters

- `asset`: The fragmented asset to add to the minder.

## See Also

### Adding and removing fragmented assets

- [removeFragmentedAsset(\_:)](removefragmentedasset%28__%29.md): Removes a fragmented asset from the array of minded assets.

# addFragmentedAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a fragmented asset to the array of minded assets.

## Declaration

```objectivec
- (void) addFragmentedAsset:(AVAsset<AVFragmentMinding> *) asset;
```

## Parameters

- `asset`: The fragmented asset to add to the minder.

## See Also

### Adding and removing fragmented assets

- [removeFragmentedAsset:](removefragmentedasset%28__%29.md): Removes a fragmented asset from the array of minded assets.
