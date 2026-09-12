> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexpath/makeiterator()](https://developer.apple.com/documentation/foundation/indexpath/makeiterator())

# makeIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an iterator over the nodes of the index path.

## Declaration

```swift
func makeIterator() -> IndexingIterator<IndexPath>
```

## See Also

### Selecting Nodes

- [append(\_:)](append%28__%29-6dxrh.md): Appends the nodes of another index path to this one.
- [append(\_:)](append%28__%29-6vsd5.md): Appends an array of elements to this index path as additional nodes.
- [append(\_:)](append%28__%29-7qv6f.md): Appends a single element to this index path as a new node.
- [appending(\_:)](appending%28__%29-93eco.md): Returns a new index path containing the elements of this one plus the given element.
- [appending(\_:)](appending%28__%29-53tcl.md): Returns a new index path containing the elements of this one plus those of another index path.
- [appending(\_:)](appending%28__%29-174v0.md): Returns a new index path containing the elements of this one plus an array of additional elements.
- [compare(\_:)](compare%28__%29.md): Compares this index path to another in depth-first traversal order.
- [dropLast()](droplast%28%29.md): Return a new index path containing all but the last element.
- [index(after:)](index%28after_%29.md): Returns the index that follows the given index.
- [index(before:)](index%28before_%29.md): Returns the index that precedes the given index.
