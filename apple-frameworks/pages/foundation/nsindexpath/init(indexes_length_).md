> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsindexpath/init(indexes:length:)

# init(indexes:length:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an index path with the given nodes and length.

## Declaration

```swift
init(indexes: UnsafePointer<Int>?, length: Int)
```

## Parameters

- `indexes`: Array of indexes to make up the index path.
- `length`: Number of nodes to include in the index path.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexPath](../nsindexpath.md) object with `indexes` up to `length`.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer of [NSIndexPath](../nsindexpath.md).

## See Also

### Creating and Initializing Index Paths

- [init(index:)](init%28index_%29.md): Initializes an index path with a single node.

# initWithIndexes:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an index path with the given nodes and length.

## Declaration

```objectivec
- (instancetype) initWithIndexes:(const NSUInteger[]) indexes length:(NSUInteger) length;
```

## Parameters

- `indexes`: Array of indexes to make up the index path.
- `length`: Number of nodes to include in the index path.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexPath](../nsindexpath.md) object with `indexes` up to `length`.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer of [NSIndexPath](../nsindexpath.md).

## See Also

### Related Documentation

- [indexPathWithIndexes:length:](indexpathwithindexes_length_.md): Creates an index path with one or more nodes.

### Creating and Initializing Index Paths

- [indexPathWithIndex:](indexpathwithindex_.md): Creates a one-node index path.
- [indexPathWithIndexes:length:](indexpathwithindexes_length_.md): Creates an index path with one or more nodes.
- [initWithIndex:](init%28index_%29.md): Initializes an index path with a single node.
