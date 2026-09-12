> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/init(index:)](https://developer.apple.com/documentation/foundation/nsindexpath/init(index:))

# init(index:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an index path with a single node.

## Declaration

```swift
convenience init(index: Int)
```

## Parameters

- `index`: Index of the item in node 0 to point to.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexPath](../nsindexpath.md) object representing a one-node index path with `index`.

## See Also

### Creating and Initializing Index Paths

- [init(indexes:length:)](init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.

# initWithIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an index path with a single node.

## Declaration

```objectivec
- (instancetype) initWithIndex:(NSUInteger) index;
```

## Parameters

- `index`: Index of the item in node 0 to point to.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexPath](../nsindexpath.md) object representing a one-node index path with `index`.

## See Also

### Related Documentation

- [indexPathWithIndex:](indexpathwithindex_.md): Creates a one-node index path.

### Creating and Initializing Index Paths

- [indexPathWithIndex:](indexpathwithindex_.md): Creates a one-node index path.
- [indexPathWithIndexes:length:](indexpathwithindexes_length_.md): Creates an index path with one or more nodes.
- [initWithIndexes:length:](init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.
