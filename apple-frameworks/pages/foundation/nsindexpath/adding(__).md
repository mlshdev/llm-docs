> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/adding(_:)](https://developer.apple.com/documentation/foundation/nsindexpath/adding(_:))

# adding(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index path containing the nodes in the receiving index path plus another given index.

## Declaration

```swift
func adding(_ index: Int) -> IndexPath
```

## Parameters

- `index`: Index to append to the index path’s indexes.

<a id="return-value"></a>

## Return Value

A new index path containing the receiving index path’s indexes and `index`.

## See Also

### Adding and Removing Nodes

- [removingLastIndex()](removinglastindex%28%29.md): Returns an index path with the nodes in the receiving index path, excluding the last one.

# indexPathByAddingIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index path containing the nodes in the receiving index path plus another given index.

## Declaration

```objectivec
- (NSIndexPath *) indexPathByAddingIndex:(NSUInteger) index;
```

## Parameters

- `index`: Index to append to the index path’s indexes.

<a id="return-value"></a>

## Return Value

A new index path containing the receiving index path’s indexes and `index`.

## See Also

### Adding and Removing Nodes

- [indexPathByRemovingLastIndex](removinglastindex%28%29.md): Returns an index path with the nodes in the receiving index path, excluding the last one.
