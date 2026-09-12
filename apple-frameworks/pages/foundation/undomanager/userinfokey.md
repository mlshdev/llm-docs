> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/userinfokey](https://developer.apple.com/documentation/foundation/undomanager/userinfokey)

# UndoManager.UserInfoKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An extensible namespace for undo and redo user info keys.

## Declaration

```swift
struct UserInfoKey
```

<a id="Discussion"></a>

## Discussion

Extend this type with the names of user info keys you want to associate with undo actions, like this:

```swift
extension UndoManager.UserInfoKey {
    static let icon: UndoManager.UserInfoKey = "icon"
}
```

You then use this key when you set and get undo user info values.

```swift
self.undoManager.setActionUserInfoValue(Image(named: "new_layer"), forKey: .icon)

```

## Topics

### Creating a user info key from a raw value

- [init(\_:)](userinfokey/init%28__%29.md): Creates a user info key from the given string.
- [init(rawValue:)](userinfokey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with user info

- [setActionUserInfoValue(\_:forKey:)](setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [undoActionUserInfoValue(forKey:)](undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValue(forKey:)](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.

# NSUndoManagerUserInfoKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An extensible namespace for undo and redo user info keys.

## Declaration

```objectivec
typedef NSString * NSUndoManagerUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

Extend this type with the names of user info keys you want to associate with undo actions, like this:

```swift
extension UndoManager.UserInfoKey {
    static let icon: UndoManager.UserInfoKey = "icon"
}
```

You then use this key when you set and get undo user info values.

```swift
self.undoManager.setActionUserInfoValue(Image(named: "new_layer"), forKey: .icon)

```

## See Also

### Working with user info

- [setActionUserInfoValue:forKey:](setactionuserinfovalue%28__forkey_%29.md): Sets a user info value for an undo or redo action.
- [undoActionUserInfoValueForKey:](undoactionuserinfovalue%28forkey_%29.md): Retrieves the undo action’s user info value for the given key.
- [redoActionUserInfoValueForKey:](redoactionuserinfovalue%28forkey_%29.md): Retrieves the redo action’s user info value for the given key.
