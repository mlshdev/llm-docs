> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresultchangedetails/fetchresultafterchanges](https://developer.apple.com/documentation/photos/phfetchresultchangedetails/fetchresultafterchanges)

# fetchResultAfterChanges (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The current fetch result, incorporating recent changes.

## Declaration

```swift
var fetchResultAfterChanges: PHFetchResult<ObjectType> { get }
```

<a id="Discussion"></a>

## Discussion

You can use this object to inspect the current state of the fetched objects even if the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`. Using this fetch result is equivalent to performing once more the same fetch that returned the original fetch result.

## See Also

### Getting the Changed Fetch Result

- [fetchResultBeforeChanges](fetchresultbeforechanges.md): The original fetch result, without recent changes.

# fetchResultAfterChanges (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The current fetch result, incorporating recent changes.

## Declaration

```objectivec
@property (atomic, strong, readonly) PHFetchResult<PHObject *> * fetchResultAfterChanges;
```

<a id="Discussion"></a>

## Discussion

You can use this object to inspect the current state of the fetched objects even if the [hasIncrementalChanges](hasincrementalchanges.md) property’s value is `false`. Using this fetch result is equivalent to performing once more the same fetch that returned the original fetch result.

## See Also

### Getting the Changed Fetch Result

- [fetchResultBeforeChanges](fetchresultbeforechanges.md): The original fetch result, without recent changes.
