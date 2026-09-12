> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undoactionuserinfovalue(forkey:)](https://developer.apple.com/documentation/foundation/undomanager/undoactionuserinfovalue(forkey:))

# undoActionUserInfoValue(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Retrieves the undo action’s user info value for the given key.

## Declaration

```swift
func undoActionUserInfoValue(forKey key: UndoManager.UserInfoKey) -> Any?
```

## Parameters

- `key`: The key associated with the value to return.

<a id="return-value"></a>

## Return Value

The value that you previously registered to this key with [setActionUserInfoValue(\_:forKey:)](setactionuserinfovalue%28__forkey_%29.md), or `nil` if the key is absent.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve a user info value for the undo action you previously set with [setActionUserInfoValue(\_:forKey:)](setactionuserinfovalue%28__forkey_%29.md).

In this example, an app’s `undoButton()` method provides a SwiftUI view that incorporates a previously assigned icon for the undo action:

```swift
func undoButton() -> some SwiftUI.View {
    Button(action: {
        self.undoManager.undo()
    }) {
        Label(self.undoManager.undoActionName,
              image: self.undoManager.undoActionUserInfoValue(forKey: .icon) as? Image)
    }
}
```

## See Also

### Working with user info

- [setActionUserInfoValue(\_:forKey:)](setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [redoActionUserInfoValue(forKey:)](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [UndoManager.UserInfoKey](userinfokey.md): An extensible namespace for undo and redo user info keys.

# undoActionUserInfoValueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Retrieves the undo action’s user info value for the given key.

## Declaration

```objectivec
- (id) undoActionUserInfoValueForKey:(NSUndoManagerUserInfoKey) key;
```

## Parameters

- `key`: The key associated with the value to return.

<a id="return-value"></a>

## Return Value

The value that you previously registered to this key with [setActionUserInfoValue:forKey:](setactionuserinfovalue%28__forkey_%29.md), or `nil` if the key is absent.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve a user info value for the undo action you previously set with [setActionUserInfoValue:forKey:](setactionuserinfovalue%28__forkey_%29.md).

In this example, an app’s `undoButton()` method provides a SwiftUI view that incorporates a previously assigned icon for the undo action:

```swift
func undoButton() -> some SwiftUI.View {
    Button(action: {
        self.undoManager.undo()
    }) {
        Label(self.undoManager.undoActionName,
              image: self.undoManager.undoActionUserInfoValue(forKey: .icon) as? Image)
    }
}
```

## See Also

### Working with user info

- [setActionUserInfoValue:forKey:](setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [redoActionUserInfoValueForKey:](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
- [NSUndoManagerUserInfoKey](userinfokey.md): An extensible namespace for undo and redo user info keys.
