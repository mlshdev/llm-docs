> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedassetminder/init(asset:mindinginterval:)](https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/init(asset:mindinginterval:))

# init(asset:mindingInterval:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a fragmented asset minder that monitors the specified asset at the indicated minding interval.

## Declaration

```swift
init(asset: any AVAsset & AVFragmentMinding, mindingInterval: TimeInterval)
```

## Parameters

- `asset`: The fragmented asset added to the fragmented asset minder.
- `mindingInterval`: The amount of time between checking to see if the system appended additional fragments to the minded asset.

<a id="return-value"></a>

## Return Value

The new fragmented asset minder.

# initWithAsset:mindingInterval: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a fragmented asset minder that monitors the specified asset at the indicated minding interval.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset<AVFragmentMinding> *) asset mindingInterval:(NSTimeInterval) mindingInterval;
```

## Parameters

- `asset`: The fragmented asset added to the fragmented asset minder.
- `mindingInterval`: The amount of time between checking to see if the system appended additional fragments to the minded asset.

<a id="return-value"></a>

## Return Value

The new fragmented asset minder.

## See Also

### Creating an asset minder

- [fragmentedAssetMinderWithAsset:mindingInterval:](fragmentedassetminderwithasset_mindinginterval_.md): Creates a fragmented asset minder containing the specified asset and minding interval.
