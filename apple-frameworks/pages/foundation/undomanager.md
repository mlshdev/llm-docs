> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager](https://developer.apple.com/documentation/foundation/undomanager)

# UndoManager (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A general-purpose recorder of operations that enables undo and redo.

## Declaration

```swift
@MainActor class UndoManager
```

<a id="overview"></a>

## Overview

You register an undo operation by calling one of the methods described in Registering undo operations. You specify the name of the object that’s changing (or the owner of that object) and provide a closure, method, or invocation to revert its state.

After you register an undo operation, you can call [undo()](undomanager/undo%28%29.md) on the undo manager to revert to the state of the last undo operation. When undoing an action, [UndoManager](undomanager.md) saves the operations you revert to so that you can call [redo()](undomanager/redo%28%29.md) automatically.

Typically, apps with UI interactions work with [UndoManager](undomanager.md). For example, UIKit implements undo and redo in its text view object, making it easy for you to undo and redo actions in objects along the responder chain. [UndoManager](undomanager.md) also serves as a general-purpose state manager, which you can use to undo and redo many kinds of actions. For example, an interactive command-line utility can use this class to undo the last command run, or a networking library can undo a request by sending another request that invalidates the previous one.

> **Important**

> `UndoManager` is [MainActor](https://developer.apple.com/documentation/swift/mainactor)-isolated in Swift, making it safe to use in UI frameworks like [AppKit](https://developer.apple.com/documentation/appkit) and [UIKit](../uikit.md) that expect to execute code on the main thread, queue, or actor. When registering an undoable action with [registerUndo(withTarget:handler:)](undomanager/registerundo%28withtarget_handler_%29.md), the `handler` closure is also [MainActor](https://developer.apple.com/documentation/swift/mainactor)-isolated to ensure safety and simplify ergonomics.

## Topics

### Registering undo operations

- [registerUndo(withTarget:handler:)](undomanager/registerundo%28withtarget_handler_%29.md): Registers the specified closure to implement a single undo operation that the target receives.
- [registerUndo(withTarget:selector:object:)](undomanager/registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
- [prepare(withInvocationTarget:)](undomanager/prepare%28withinvocationtarget_%29.md): Prepares the undo manager for invocation-based undo with the given target as the subject of the next undo operation.

### Checking undo ability

- [canUndo](undomanager/canundo.md): A Boolean value that indicates whether the manager has any actions to undo.
- [canRedo](undomanager/canredo.md): A Boolean value that indicates whether the manager has any actions to redo.

### Performing undo and redo

- [undo()](undomanager/undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [undoNestedGroup()](undomanager/undonestedgroup%28%29.md): Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.
- [redo()](undomanager/redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

### Managing undo and redo stack depth

- [levelsOfUndo](undomanager/levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [undoCount](undomanager/undocount.md): The number of times you can invoke undo before there are no actions left to undo.
- [redoCount](undomanager/redocount.md): The number of times you can invoke redo before there are no actions left to redo.

### Creating undo groups

- [beginUndoGrouping()](undomanager/beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping()](undomanager/endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](undomanager/groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](undomanager/groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

### Enabling and disabling undo

- [disableUndoRegistration()](undomanager/disableundoregistration%28%29.md): Disables the recording of undo operations.
- [enableUndoRegistration()](undomanager/enableundoregistration%28%29.md): Enables the recording of undo operations.
- [isUndoRegistrationEnabled](undomanager/isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.

### Checking whether undo or redo is in process

- [isUndoing](undomanager/isundoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing an undo action.
- [isRedoing](undomanager/isredoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing a redo action.

### Clearing undo operations

- [removeAllActions()](undomanager/removeallactions%28%29.md): Clears the undo and redo stacks and reenables the manager.
- [removeAllActions(withTarget:)](undomanager/removeallactions%28withtarget_%29.md): Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.

### Managing the action name

- [undoActionName](undomanager/undoactionname.md): The name identifying the undo action.
- [redoActionName](undomanager/redoactionname.md): The name identifying the redo action.
- [setActionName(\_:)](undomanager/setactionname%28__%29-cci9.md): Sets the name of the action associated with the Undo or Redo command using a localized string resource.
- [setActionName(\_:)](undomanager/setactionname%28__%29-8lzip.md): Sets the name of the action associated with the Undo or Redo command.

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomanager/undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [redoMenuItemTitle](undomanager/redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [undoMenuTitle(forUndoActionName:)](undomanager/undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitle(forUndoActionName:)](undomanager/redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.

### Working with user info

- [setActionUserInfoValue(\_:forKey:)](undomanager/setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [undoActionUserInfoValue(forKey:)](undomanager/undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValue(forKey:)](undomanager/redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [UndoManager.UserInfoKey](undomanager/userinfokey.md): An extensible namespace for undo and redo user info keys.

### Working with run loops

- [runLoopModes](undomanager/runloopmodes.md): The modes governing the types of input to handle during a cycle of the run loop.
- [NSUndoCloseGroupingRunLoopOrdering](nsundoclosegroupingrunloopordering.md): A priority to use when using a run loop to close an undo group.

### Using discardable undo and redo actions

- [setActionIsDiscardable(\_:)](undomanager/setactionisdiscardable%28__%29.md): Sets whether the next undo or redo action is discardable.
- [undoActionIsDiscardable](undomanager/undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.
- [redoActionIsDiscardable](undomanager/redoactionisdiscardable.md): A Boolean value that indicates whether the next redo action is discardable.

### Working with notifications

- [NSUndoManagerWillUndoChange](nsnotification/name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChange](nsnotification/name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChange](nsnotification/name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChange](nsnotification/name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpoint](nsnotification/name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroup](nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroup](nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroup](nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

### Working with notification messages

- [UndoManager.WillUndoChangeMessage](undomanager/willundochangemessage.md): A message that an undo manager sends before undoing a change.
- [UndoManager.DidUndoChangeMessage](undomanager/didundochangemessage.md): A message that an undo manager sends after undoing a change.
- [UndoManager.WillRedoChangeMessage](undomanager/willredochangemessage.md): A message that an undo manager sends before redoing a change.
- [UndoManager.DidRedoChangeMessage](undomanager/didredochangemessage.md): A message that an undo manager sends after redoing a change.
- [UndoManager.CheckpointMessage](undomanager/checkpointmessage.md): A message that an undo manager sends at certain checkpoints.
- [UndoManager.DidOpenUndoGroupMessage](undomanager/didopenundogroupmessage.md): A message that an undo manager sends after opening an undo group.
- [UndoManager.WillCloseUndoGroupMessage](undomanager/willcloseundogroupmessage.md): A message that an undo manager sends before closing an undo group.
- [UndoManager.DidCloseUndoGroupMessage](undomanager/didcloseundogroupmessage.md): A message that an undo manager sends after closing an undo group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# NSUndoManager (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A general-purpose recorder of operations that enables undo and redo.

## Declaration

```objectivec
@interface NSUndoManager : NSObject
```

<a id="overview"></a>

## Overview

You register an undo operation by calling one of the methods described in Registering undo operations. You specify the name of the object that’s changing (or the owner of that object) and provide a closure, method, or invocation to revert its state.

After you register an undo operation, you can call [undo](undomanager/undo%28%29.md) on the undo manager to revert to the state of the last undo operation. When undoing an action, [NSUndoManager](undomanager.md) saves the operations you revert to so that you can call [redo](undomanager/redo%28%29.md) automatically.

Typically, apps with UI interactions work with [NSUndoManager](undomanager.md). For example, UIKit implements undo and redo in its text view object, making it easy for you to undo and redo actions in objects along the responder chain. [NSUndoManager](undomanager.md) also serves as a general-purpose state manager, which you can use to undo and redo many kinds of actions. For example, an interactive command-line utility can use this class to undo the last command run, or a networking library can undo a request by sending another request that invalidates the previous one.

> **Important**

> `UndoManager` is [MainActor](https://developer.apple.com/documentation/swift/mainactor)-isolated in Swift, making it safe to use in UI frameworks like [AppKit](https://developer.apple.com/documentation/appkit) and [UIKit](../uikit.md) that expect to execute code on the main thread, queue, or actor. When registering an undoable action with [registerUndo(withTarget:handler:)](undomanager/registerundo%28withtarget_handler_%29.md), the `handler` closure is also [MainActor](https://developer.apple.com/documentation/swift/mainactor)-isolated to ensure safety and simplify ergonomics.

## Topics

### Registering undo operations

- [registerUndoWithTarget:handler:](nsundomanager/registerundowithtarget_handler_.md): Records a single undo operation for a given target so that when the manager performs an undo, it executes the specified block.
- [registerUndoWithTarget:selector:object:](undomanager/registerundo%28withtarget_selector_object_%29.md): Registers the selector of the specified target to implement a single undo operation that the target receives.
- [prepareWithInvocationTarget:](undomanager/prepare%28withinvocationtarget_%29.md): Prepares the undo manager for invocation-based undo with the given target as the subject of the next undo operation.

### Checking undo ability

- [canUndo](undomanager/canundo.md): A Boolean value that indicates whether the manager has any actions to undo.
- [canRedo](undomanager/canredo.md): A Boolean value that indicates whether the manager has any actions to redo.

### Performing undo and redo

- [undo](undomanager/undo%28%29.md): Closes the top-level undo group if necessary, and then performs undo operations on the group.
- [undoNestedGroup](undomanager/undonestedgroup%28%29.md): Performs the undo operations in the last undo group (whether top-level or nested), recording the operations on the redo stack as a single group.
- [redo](undomanager/redo%28%29.md): Performs the operations in the last group on the redo stack, if there are any, recording them on the undo stack as a single group.

### Managing undo and redo stack depth

- [levelsOfUndo](undomanager/levelsofundo.md): The maximum number of top-level undo groups the undo manager holds.
- [undoCount](undomanager/undocount.md): The number of times you can invoke undo before there are no actions left to undo.
- [redoCount](undomanager/redocount.md): The number of times you can invoke redo before there are no actions left to redo.

### Creating undo groups

- [beginUndoGrouping](undomanager/beginundogrouping%28%29.md): Marks the beginning of an undo group.
- [endUndoGrouping](undomanager/endundogrouping%28%29.md): Marks the end of an undo group.
- [groupsByEvent](undomanager/groupsbyevent.md): A Boolean value that indicates whether the manager automatically creates undo groups around each pass of the run loop.
- [groupingLevel](undomanager/groupinglevel.md): The number of nested undo groups (or redo groups, if redo is the most recent operation) in the current event loop.

### Enabling and disabling undo

- [disableUndoRegistration](undomanager/disableundoregistration%28%29.md): Disables the recording of undo operations.
- [enableUndoRegistration](undomanager/enableundoregistration%28%29.md): Enables the recording of undo operations.
- [undoRegistrationEnabled](undomanager/isundoregistrationenabled.md): A Boolean value that indicates whether the recording of undo operations is enabled.

### Checking whether undo or redo is in process

- [undoing](undomanager/isundoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing an undo action.
- [redoing](undomanager/isredoing.md): Returns a Boolean value that indicates whether the manager is in the process of performing a redo action.

### Clearing undo operations

- [removeAllActions](undomanager/removeallactions%28%29.md): Clears the undo and redo stacks and reenables the manager.
- [removeAllActionsWithTarget:](undomanager/removeallactions%28withtarget_%29.md): Clears the undo and redo stacks of all operations involving the specified target as the recipient of the undo message.

### Managing the action name

- [undoActionName](undomanager/undoactionname.md): The name identifying the undo action.
- [redoActionName](undomanager/redoactionname.md): The name identifying the redo action.
- [setActionName:](undomanager/setactionname%28__%29-8lzip.md): Sets the name of the action associated with the Undo or Redo command.

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomanager/undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [redoMenuItemTitle](undomanager/redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [undoMenuTitleForUndoActionName:](undomanager/undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitleForUndoActionName:](undomanager/redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.

### Working with user info

- [setActionUserInfoValue:forKey:](undomanager/setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [undoActionUserInfoValueForKey:](undomanager/undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValueForKey:](undomanager/redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [NSUndoManagerUserInfoKey](undomanager/userinfokey.md): An extensible namespace for undo and redo user info keys.

### Working with run loops

- [runLoopModes](undomanager/runloopmodes.md): The modes governing the types of input to handle during a cycle of the run loop.
- [NSUndoCloseGroupingRunLoopOrdering](nsundoclosegroupingrunloopordering.md): A priority to use when using a run loop to close an undo group.

### Using discardable undo and redo actions

- [setActionIsDiscardable:](undomanager/setactionisdiscardable%28__%29.md): Sets whether the next undo or redo action is discardable.
- [undoActionIsDiscardable](undomanager/undoactionisdiscardable.md): A Boolean value that indicates whether the next undo action is discardable.
- [redoActionIsDiscardable](undomanager/redoactionisdiscardable.md): A Boolean value that indicates whether the next redo action is discardable.

### Working with notifications

- [NSUndoManagerWillUndoChangeNotification](nsnotification/name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSUndoManagerDidUndoChangeNotification](nsnotification/name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillRedoChangeNotification](nsnotification/name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerDidRedoChangeNotification](nsnotification/name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerCheckpointNotification](nsnotification/name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidOpenUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerWillCloseUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerDidCloseUndoGroupNotification](nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerGroupIsDiscardableKey](nsundomanagergroupisdiscardablekey.md): A key, used in a notification’s user info, that indicates the undo group contains only discardable actions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
