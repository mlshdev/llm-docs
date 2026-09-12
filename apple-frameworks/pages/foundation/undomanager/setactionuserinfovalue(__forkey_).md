> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/setactionuserinfovalue(_:forkey:)](https://developer.apple.com/documentation/foundation/undomanager/setactionuserinfovalue(_:forkey:))

# setActionUserInfoValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets a user info value for an undo or redo action.

## Declaration

```swift
func setActionUserInfoValue(_ info: Any?, forKey key: UndoManager.UserInfoKey)
```

## Parameters

- `info`: The value to save in the action’s user info.
- `key`: The key to associate with the user info value.

<a id="Discussion"></a>

## Discussion

Set user info on an undo action to provide custom information to the action beyond its action name. You can use this for things like an icon to represent the undoable action, or a timestamp of when the undo manager registers the action.

Start by extending [UndoManager.UserInfoKey](userinfokey.md) with key names to identify the user info values you want to associate with undo actions.

```swift
extension UndoManager.UserInfoKey {
    static let icon: UndoManager.UserInfoKey = "icon"
}
```

Then set the user info value with this key as part of registering the undoable action. In this example, an app’s `insertLayer()` method provides a custom icon before setting up an undo action that calls the app’s `removeLayer()` method:

```swift
func insertLayer() {
    self.undoManager.setActionName("Insert layer")
    self.undoManager.setActionUserInfoValue(Image(named: "new_layer"), forKey: .icon)

    self.layers.append(Layer())

    self.undoManager.registerUndo(withTarget: self) {
        $0.removeLayer()
    }
}
```

## See Also

### Working with user info

- [undoActionUserInfoValue(forKey:)](undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValue(forKey:)](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [UndoManager.UserInfoKey](userinfokey.md): An extensible namespace for undo and redo user info keys.

# setActionUserInfoValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets a user info value for an undo or redo action.

## Declaration

```objectivec
- (void) setActionUserInfoValue:(id) info forKey:(NSUndoManagerUserInfoKey) key;
```

## Parameters

- `info`: The value to save in the action’s user info.
- `key`: The key to associate with the user info value.

<a id="Discussion"></a>

## Discussion

Set user info on an undo action to provide custom information to the action beyond its action name. You can use this for things like an icon to represent the undoable action, or a timestamp of when the undo manager registers the action.

Start by extending [NSUndoManagerUserInfoKey](userinfokey.md) with key names to identify the user info values you want to associate with undo actions.

```swift
extension UndoManager.UserInfoKey {
    static let icon: UndoManager.UserInfoKey = "icon"
}
```

Then set the user info value with this key as part of registering the undoable action. In this example, an app’s `insertLayer()` method provides a custom icon before setting up an undo action that calls the app’s `removeLayer()` method:

```swift
func insertLayer() {
    self.undoManager.setActionName("Insert layer")
    self.undoManager.setActionUserInfoValue(Image(named: "new_layer"), forKey: .icon)

    self.layers.append(Layer())

    self.undoManager.registerUndo(withTarget: self) {
        $0.removeLayer()
    }
}
```

## See Also

### Working with user info

- [undoActionUserInfoValueForKey:](undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValueForKey:](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [NSUndoManagerUserInfoKey](userinfokey.md): An extensible namespace for undo and redo user info keys.
