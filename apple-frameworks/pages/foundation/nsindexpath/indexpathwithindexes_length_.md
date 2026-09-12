> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/indexpathwithindexes:length:](https://developer.apple.com/documentation/foundation/nsindexpath/indexpathwithindexes:length:)

# indexPathWithIndexes:length:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an index path with one or more nodes.

## Declaration

```objectivec
+ (instancetype) indexPathWithIndexes:(const NSUInteger[]) indexes length:(NSUInteger) length;
```

## Parameters

- `indexes`: Array of indexes to make up the index path.
- `length`: Number of nodes to include in the index path.

<a id="return-value"></a>

## Return Value

Index path with `indexes` up to `length`.

## See Also

### Creating and Initializing Index Paths

- [indexPathWithIndex:](indexpathwithindex_.md): Creates a one-node index path.
- [initWithIndex:](init%28index_%29.md): Initializes an index path with a single node.
- [initWithIndexes:length:](init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.
