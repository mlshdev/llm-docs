> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/statechanges/makeasynciterator()](https://developer.apple.com/documentation/dockkit/dockaccessory/statechanges/makeasynciterator())

# makeAsyncIterator()

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates and returns an iterator that traverses the list of dock accessory state changes.

## Declaration

```swift
func makeAsyncIterator() -> DockAccessory.StateChanges.Iterator
```

## See Also

### Iterating over state changes

- [DockAccessory.StateChanges.Iterator](iterator.md): An object that allows iteration over dock accessory state changes.
- [DockAccessory.StateChanges.Element](element.md): A dock accessory state change.
