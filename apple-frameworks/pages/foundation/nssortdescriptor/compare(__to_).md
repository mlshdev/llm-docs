> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/compare(_:to:)](https://developer.apple.com/documentation/foundation/nssortdescriptor/compare(_:to:))

# compare(\_:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a comparison result value that indicates the sort order of two objects.

## Declaration

```swift
func compare(_ object1: Any, to object2: Any) -> ComparisonResult
```

## Parameters

- `object1`: The object to compare with `object2`. This object must have a property accessible using the key-path specified by [key](key.md).
- `object2`: The object to compare with `object1`. This object must have a property accessible using the key-path specified by [key](key.md).

<a id="return-value"></a>

## Return Value

[ComparisonResult.orderedAscending](../comparisonresult/orderedascending.md) if `object1` is less than `object2`, [ComparisonResult.orderedDescending](../comparisonresult/ordereddescending.md) if `object1` is greater than `object2`, or [ComparisonResult.orderedSame](../comparisonresult/orderedsame.md) if `object1` is equal to `object2`.

<a id="Discussion"></a>

## Discussion

The ordering is determined by comparing the values specified by [key](key.md) of `object1` and `object2` using the selector specified by [selector](selector.md).

## See Also

### Using Sort Descriptors

- [reversedSortDescriptor](reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.
- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded sort descriptor to allow evaluation.

# compareObject:toObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a comparison result value that indicates the sort order of two objects.

## Declaration

```objectivec
- (NSComparisonResult) compareObject:(id) object1 toObject:(id) object2;
```

## Parameters

- `object1`: The object to compare with `object2`. This object must have a property accessible using the key-path specified by [key](key.md).
- `object2`: The object to compare with `object1`. This object must have a property accessible using the key-path specified by [key](key.md).

<a id="return-value"></a>

## Return Value

[NSOrderedAscending](../comparisonresult/orderedascending.md) if `object1` is less than `object2`, [NSOrderedDescending](../comparisonresult/ordereddescending.md) if `object1` is greater than `object2`, or [NSOrderedSame](../comparisonresult/orderedsame.md) if `object1` is equal to `object2`.

<a id="Discussion"></a>

## Discussion

The ordering is determined by comparing the values specified by [key](key.md) of `object1` and `object2` using the selector specified by [selector](selector.md).

## See Also

### Using Sort Descriptors

- [reversedSortDescriptor](reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.
- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded sort descriptor to allow evaluation.
