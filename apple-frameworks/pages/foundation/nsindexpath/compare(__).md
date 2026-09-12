> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/compare(_:)](https://developer.apple.com/documentation/foundation/nsindexpath/compare(_:))

# compare(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the depth-first traversal order of the receiving index path and another index path.

## Declaration

```swift
func compare(_ otherObject: IndexPath) -> ComparisonResult
```

## Parameters

- `otherObject`: Index path to compare.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The depth-first traversal ordering of the receiving index path and `indexPath`.

<a id="discussion"></a>

## Discussion

- [ComparisonResult.orderedAscending](../comparisonresult/orderedascending.md): The receiving index path comes before `indexPath`.
- [ComparisonResult.orderedDescending](../comparisonresult/ordereddescending.md): The receiving index path comes after `indexPath`.
- [ComparisonResult.orderedSame](../comparisonresult/orderedsame.md): The receiving index path and `indexPath` are the same index path.

# compare: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the depth-first traversal order of the receiving index path and another index path.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSIndexPath *) otherObject;
```

## Parameters

- `otherObject`: Index path to compare.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The depth-first traversal ordering of the receiving index path and `indexPath`.

<a id="discussion"></a>

## Discussion

- [NSOrderedAscending](../comparisonresult/orderedascending.md): The receiving index path comes before `indexPath`.
- [NSOrderedDescending](../comparisonresult/ordereddescending.md): The receiving index path comes after `indexPath`.
- [NSOrderedSame](../comparisonresult/orderedsame.md): The receiving index path and `indexPath` are the same index path.
