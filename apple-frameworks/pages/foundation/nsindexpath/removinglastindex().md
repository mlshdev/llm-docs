> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/removinglastindex()](https://developer.apple.com/documentation/foundation/nsindexpath/removinglastindex())

# removingLastIndex() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index path with the nodes in the receiving index path, excluding the last one.

## Declaration

```swift
func removingLastIndex() -> IndexPath
```

<a id="return-value"></a>

## Return Value

A new index path with the receiving index path’s indexes, excluding the last one.

<a id="Discussion"></a>

## Discussion

Returns an empty `NSIndexPath` instance if the receiving index path’s length is 1 or less.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v10.4 this method returns `nil` when the length of the receiving index path is 1 or less. On iOS and macOS 10.5 and later this method never returns `nil`.

## See Also

### Adding and Removing Nodes

- [adding(\_:)](adding%28__%29.md): Returns an index path containing the nodes in the receiving index path plus another given index.

# indexPathByRemovingLastIndex (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index path with the nodes in the receiving index path, excluding the last one.

## Declaration

```objectivec
- (NSIndexPath *) indexPathByRemovingLastIndex;
```

<a id="return-value"></a>

## Return Value

A new index path with the receiving index path’s indexes, excluding the last one.

<a id="Discussion"></a>

## Discussion

Returns an empty `NSIndexPath` instance if the receiving index path’s length is 1 or less.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X v10.4 this method returns `nil` when the length of the receiving index path is 1 or less. On iOS and macOS 10.5 and later this method never returns `nil`.

## See Also

### Adding and Removing Nodes

- [indexPathByAddingIndex:](adding%28__%29.md): Returns an index path containing the nodes in the receiving index path plus another given index.
