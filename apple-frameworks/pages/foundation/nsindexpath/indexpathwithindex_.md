> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/indexpathwithindex:](https://developer.apple.com/documentation/foundation/nsindexpath/indexpathwithindex:)

# indexPathWithIndex:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a one-node index path.

## Declaration

```objectivec
+ (instancetype) indexPathWithIndex:(NSUInteger) index;
```

## Parameters

- `index`: Index of the item in node 0 to point to.

<a id="return-value"></a>

## Return Value

One-node index path with `index`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating and Initializing Index Paths

- [indexPathWithIndexes:length:](indexpathwithindexes_length_.md): Creates an index path with one or more nodes.
- [initWithIndex:](init%28index_%29.md): Initializes an index path with a single node.
- [initWithIndexes:length:](init%28indexes_length_%29.md): Initializes an index path with the given nodes and length.
