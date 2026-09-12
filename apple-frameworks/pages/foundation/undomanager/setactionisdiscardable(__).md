> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/setactionisdiscardable(_:)](https://developer.apple.com/documentation/foundation/undomanager/setactionisdiscardable(_:))

# setActionIsDiscardable(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets whether the next undo or redo action is discardable.

## Declaration

```swift
func setActionIsDiscardable(_ discardable: Bool)
```

## Parameters

- `discardable`: Specifies if the action is discardable. [true](https://developer.apple.com/documentation/swift/true) if the next undo or redo action can be discarded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Specifies that the latest undo action may be safely discarded when a document can not be saved for any reason.

An example might be an undo action that changes the viewable area of a document.

To find out if an undo group contains only discardable actions, look for the `NSUndoManagerGroupIsDiscardableKey` in the [userInfo](../nsnotification/userinfo.md) dictionary of the [NSUndoManagerWillCloseUndoGroup](../nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md).

## See Also

### Using discardable undo and redo actions

- [undoActionIsDiscardable](undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.
- [redoActionIsDiscardable](redoactionisdiscardable.md): A Boolean value that indicates whether the next redo action is discardable.

# setActionIsDiscardable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets whether the next undo or redo action is discardable.

## Declaration

```objectivec
- (void) setActionIsDiscardable:(BOOL) discardable;
```

## Parameters

- `discardable`: Specifies if the action is discardable. [true](https://developer.apple.com/documentation/swift/true) if the next undo or redo action can be discarded; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Specifies that the latest undo action may be safely discarded when a document can not be saved for any reason.

An example might be an undo action that changes the viewable area of a document.

To find out if an undo group contains only discardable actions, look for the `NSUndoManagerGroupIsDiscardableKey` in the [userInfo](../nsnotification/userinfo.md) dictionary of the [NSUndoManagerWillCloseUndoGroupNotification](../nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md).

## See Also

### Using discardable undo and redo actions

- [undoActionIsDiscardable](undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.
- [redoActionIsDiscardable](redoactionisdiscardable.md): A Boolean value that indicates whether the next redo action is discardable.
