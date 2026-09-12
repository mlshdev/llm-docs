> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/init(index:)](https://developer.apple.com/documentation/foundation/nsindexset/init(index:))

# init(index:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.

## Declaration

```swift
convenience init(index value: Int)
```

## Parameters

- `value`: An index. Must be in the range `0 .. NSNotFound - 1`.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `index`.

## See Also

### Creating Index Sets

- [init(indexesIn:)](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.
- [init(indexSet:)](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.

# initWithIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.

## Declaration

```objectivec
- (instancetype) initWithIndex:(NSUInteger) value;
```

## Parameters

- `value`: An index. Must be in the range `0 .. NSNotFound - 1`.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `index`.

## See Also

### Related Documentation

- [indexSetWithIndex:](indexsetwithindex_.md): Creates an index set with an index.

### Creating Index Sets

- [indexSet](indexset.md): Creates an empty index set.
- [indexSetWithIndex:](indexsetwithindex_.md): Creates an index set with an index.
- [indexSetWithIndexesInRange:](indexsetwithindexesinrange_.md): Creates an index set with an index range.
- [initWithIndexesInRange:](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.
- [initWithIndexSet:](init%28indexset_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.
