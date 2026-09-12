> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/redoactionisdiscardable](https://developer.apple.com/documentation/foundation/undomanager/redoactionisdiscardable)

# redoActionIsDiscardable (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the next redo action is discardable.

## Declaration

```swift
var redoActionIsDiscardable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the action is discardable; [false](https://developer.apple.com/documentation/swift/false) otherwise.

Specifies that the latest redo action may be safely discarded when a document can not be saved for any reason. These are typically actions that don’t affect persistent state.

An example might be an redo action that changes the viewable area of a document.

## See Also

### Using discardable undo and redo actions

- [setActionIsDiscardable(\_:)](setactionisdiscardable%28__%29.md): Sets whether the next undo or redo action is discardable.
- [undoActionIsDiscardable](undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.

# redoActionIsDiscardable (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the next redo action is discardable.

## Declaration

```objectivec
@property (readonly) BOOL redoActionIsDiscardable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the action is discardable; [false](https://developer.apple.com/documentation/swift/false) otherwise.

Specifies that the latest redo action may be safely discarded when a document can not be saved for any reason. These are typically actions that don’t affect persistent state.

An example might be an redo action that changes the viewable area of a document.

## See Also

### Using discardable undo and redo actions

- [setActionIsDiscardable:](setactionisdiscardable%28__%29.md): Sets whether the next undo or redo action is discardable.
- [undoActionIsDiscardable](undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.
