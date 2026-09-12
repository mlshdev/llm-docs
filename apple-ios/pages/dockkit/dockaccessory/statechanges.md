> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/statechanges](https://developer.apple.com/documentation/dockkit/dockaccessory/statechanges)

# DockAccessory.StateChanges

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An asynchronous sequence of dock accessory state changes.

## Declaration

```swift
struct StateChanges
```

## Topics

### Iterating over state changes

- [DockAccessory.StateChanges.Iterator](statechanges/iterator.md): An object that allows iteration over dock accessory state changes.
- [makeAsyncIterator()](statechanges/makeasynciterator%28%29.md): Creates and returns an iterator that traverses the list of dock accessory state changes.
- [DockAccessory.StateChanges.Element](statechanges/element.md): A dock accessory state change.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Getting accessory information

- [firmwareVersion](firmwareversion.md): The firmware version of the dock accessory.
- [hardwareModel](hardwaremodel.md): The model of the dock accessory.
- [identifier](identifier-swift.property.md): The name and unique identifer of the dock accessory.
- [DockAccessory.Identifier](identifier-swift.struct.md): Information that uniquely identifies the dock accessory.
- [DockAccessory.Category](category.md): Types of supported dock accesories.
- [DockAccessory.State](state.md): The state of a dock accessory.
- [DockAccessory.StateChange](statechange.md): An event that indicates a change in the state of a dock accessory.
