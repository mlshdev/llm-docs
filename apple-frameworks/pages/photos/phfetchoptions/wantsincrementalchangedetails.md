> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/wantsincrementalchangedetails](https://developer.apple.com/documentation/photos/phfetchoptions/wantsincrementalchangedetails)

# wantsIncrementalChangeDetails (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether your app receives detailed change information for the objects in the fetch result.

## Declaration

```swift
var wantsIncrementalChangeDetails: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you have registered a change observer with the shared [PHPhotoLibrary](../phphotolibrary.md) object, fetching assets or collections automatically registers your observer to receive information about later changes to the fetch result and about the objects it contains. For a fetch result, change information (a [PHFetchResultChangeDetails](../phfetchresultchangedetails.md) object) can include a detailed list of incremental differences from the previous state of the fetch result, such as new photos captured since the original fetch.

If `true` (the default), Photos sends detailed incremental changes when such information is available. If `false`, Photos tells your app only when the fetch result has changed (in which case you can perform the fetch again to receive updated results).

# wantsIncrementalChangeDetails (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether your app receives detailed change information for the objects in the fetch result.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL wantsIncrementalChangeDetails;
```

<a id="Discussion"></a>

## Discussion

If you have registered a change observer with the shared [PHPhotoLibrary](../phphotolibrary.md) object, fetching assets or collections automatically registers your observer to receive information about later changes to the fetch result and about the objects it contains. For a fetch result, change information (a [PHFetchResultChangeDetails](../phfetchresultchangedetails.md) object) can include a detailed list of incremental differences from the previous state of the fetch result, such as new photos captured since the original fetch.

If `true` (the default), Photos sends detailed incremental changes when such information is available. If `false`, Photos tells your app only when the fetch result has changed (in which case you can perform the fetch again to receive updated results).
