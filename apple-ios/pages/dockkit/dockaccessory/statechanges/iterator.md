> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/statechanges/iterator](https://developer.apple.com/documentation/dockkit/dockaccessory/statechanges/iterator)

# DockAccessory.StateChanges.Iterator

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An object that allows iteration over dock accessory state changes.

## Declaration

```swift
struct Iterator
```

## Topics

### Iterating over state changes

- [next()](iterator/next%28%29.md): Provide the next dock accessory state change in the list.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Iterating over state changes

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates and returns an iterator that traverses the list of dock accessory state changes.
- [DockAccessory.StateChanges.Element](element.md): A dock accessory state change.
