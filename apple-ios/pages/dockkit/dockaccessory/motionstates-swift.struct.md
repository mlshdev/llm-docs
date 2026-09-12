> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/motionstates-swift.struct](https://developer.apple.com/documentation/dockkit/dockaccessory/motionstates-swift.struct)

# DockAccessory.MotionStates

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An asynchronous sequence of orientation and velocity updates from the device.

## Declaration

```swift
struct MotionStates
```

## Topics

### Iterating over motion states

- [DockAccessory.MotionStates.Iterator](motionstates-swift.struct/iterator.md): An object that allows iteration over dock accessory motion states.
- [makeAsyncIterator()](motionstates-swift.struct/makeasynciterator%28%29.md): Creates and returns an iterator that traverses the list of dock accessory motion states.
- [DockAccessory.MotionStates.Element](motionstates-swift.struct/element.md): A dock accessory motion state.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Getting position and limits

- [motionStates](motionstates-swift.property.md): Motion information from the dock accessory that includes current orientation and velocity of all axes.
- [limits](limits-swift.property.md): Current limits for the axes of rotation and maximum angular velocity.
- [DockAccessory.MotionState](motionstate.md): An event that indicates the state of a dock accessory’s current position and speed.
- [DockAccessory.Limits](limits-swift.struct.md): Soft limits on multiple axes of rotation.
