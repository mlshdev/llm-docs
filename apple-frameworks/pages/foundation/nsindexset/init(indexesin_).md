> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/init(indexesin:)](https://developer.apple.com/documentation/foundation/nsindexset/init(indexesin:))

# init(indexesIn:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.

## Declaration

```swift
init(indexesIn range: NSRange)
```

## Parameters

- `range`: An index range. Must be in the range `0 .. NSNotFound - 1`..

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `indexRange`.

<a id="Discussion"></a>

## Discussion

This method raises an [rangeException](../nsexceptionname/rangeexception.md) when `indexRange` would add an index that exceeds the maximum allowed value for unsigned integers.

The resulting index set has a [firstIndex](firstindex.md) equal to the `location` of `indexRange`, and a [count](count.md) equal to the `length` of `indexRange`. Specifying a zero-length range results in an empty index set.

This method is a designated initializer for [NSIndexSet](../nsindexset.md).

## See Also

### Creating Index Sets

- [init(index:)](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [init(indexSet:)](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.

# initWithIndexesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.

## Declaration

```objectivec
- (instancetype) initWithIndexesInRange:(NSRange) range;
```

## Parameters

- `range`: An index range. Must be in the range `0 .. NSNotFound - 1`..

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `indexRange`.

<a id="Discussion"></a>

## Discussion

This method raises an [NSRangeException](../nsexceptionname/rangeexception.md) when `indexRange` would add an index that exceeds the maximum allowed value for unsigned integers.

The resulting index set has a [firstIndex](firstindex.md) equal to the `location` of `indexRange`, and a [count](count.md) equal to the `length` of `indexRange`. Specifying a zero-length range results in an empty index set.

This method is a designated initializer for [NSIndexSet](../nsindexset.md).

## See Also

### Related Documentation

- [indexSetWithIndexesInRange:](indexsetwithindexesinrange_.md): Creates an index set with an index range.

### Creating Index Sets

- [indexSet](indexset.md): Creates an empty index set.
- [indexSetWithIndex:](indexsetwithindex_.md): Creates an index set with an index.
- [indexSetWithIndexesInRange:](indexsetwithindexesinrange_.md): Creates an index set with an index range.
- [initWithIndex:](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [initWithIndexSet:](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.
