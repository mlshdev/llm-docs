> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/undomanager](https://developer.apple.com/documentation/uikit/uiresponder/undomanager)

# undoManager (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the nearest shared undo manager in the responder chain.

## Declaration

```swift
var undoManager: UndoManager? { get }
```

<a id="Discussion"></a>

## Discussion

By default, every window of an application has an undo manager: a shared object for managing undo and redo operations. However, the class of any object in the responder chain can have their own custom undo manager. (For example, instances of [UITextField](../uitextfield.md) have their own undo manager that’s cleared when the text field resigns first-responder status.) When you request an undo manager, the request goes up the responder chain and the [UIWindow](../uiwindow.md) object returns a usable instance.

You may add undo managers to your view controllers to perform undo and redo operations local to the managed view.

# undoManager (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the nearest shared undo manager in the responder chain.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUndoManager * undoManager;
```

<a id="Discussion"></a>

## Discussion

By default, every window of an application has an undo manager: a shared object for managing undo and redo operations. However, the class of any object in the responder chain can have their own custom undo manager. (For example, instances of [UITextField](../uitextfield.md) have their own undo manager that’s cleared when the text field resigns first-responder status.) When you request an undo manager, the request goes up the responder chain and the [UIWindow](../uiwindow.md) object returns a usable instance.

You may add undo managers to your view controllers to perform undo and redo operations local to the managed view.
