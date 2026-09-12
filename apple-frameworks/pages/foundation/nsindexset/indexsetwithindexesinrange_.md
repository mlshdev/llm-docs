> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/indexsetwithindexesinrange:](https://developer.apple.com/documentation/foundation/nsindexset/indexsetwithindexesinrange:)

# indexSetWithIndexesInRange:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an index set with an index range.

## Declaration

```objectivec
+ (instancetype) indexSetWithIndexesInRange:(NSRange) range;
```

## Parameters

- `range`: An index range. Must be in the range `0 .. NSNotFound - 1`.

<a id="return-value"></a>

## Return Value

[NSIndexSet](../nsindexset.md) object containing `indexRange`.

<a id="Discussion"></a>

## Discussion

The resulting index set has a [firstIndex](firstindex.md) equal to the `location` of `indexRange`, and a [count](count.md) equal to the `length` of `indexRange`. Specifying a zero-length range results in an empty index set.

## See Also

### Creating Index Sets

- [indexSet](indexset.md): Creates an empty index set.
- [indexSetWithIndex:](indexsetwithindex_.md): Creates an index set with an index.
- [initWithIndex:](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [initWithIndexesInRange:](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.
- [initWithIndexSet:](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.
