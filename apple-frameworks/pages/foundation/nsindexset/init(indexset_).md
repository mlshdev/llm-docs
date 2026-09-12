> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/init(indexset:)](https://developer.apple.com/documentation/foundation/nsindexset/init(indexset:))

# init(indexSet:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.

## Declaration

```swift
init(indexSet: IndexSet)
```

## Parameters

- `indexSet`: An index set.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `indexSet`.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for [NSIndexSet](../nsindexset.md).

## See Also

### Creating Index Sets

- [init(index:)](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [init(indexesIn:)](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.

# initWithIndexSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index set.

## Declaration

```objectivec
- (instancetype) initWithIndexSet:(NSIndexSet *) indexSet;
```

## Parameters

- `indexSet`: An index set.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSet](../nsindexset.md) object with `indexSet`.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for [NSIndexSet](../nsindexset.md).

## See Also

### Creating Index Sets

- [indexSet](indexset.md): Creates an empty index set.
- [indexSetWithIndex:](indexsetwithindex_.md): Creates an index set with an index.
- [indexSetWithIndexesInRange:](indexsetwithindexesinrange_.md): Creates an index set with an index range.
- [initWithIndex:](init%28index_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index.
- [initWithIndexesInRange:](init%28indexesin_%29.md): Initializes an allocated [NSIndexSet](../nsindexset.md) object with an index range.
