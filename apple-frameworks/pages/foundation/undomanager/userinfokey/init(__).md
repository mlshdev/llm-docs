> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/userinfokey/init(_:)](https://developer.apple.com/documentation/foundation/undomanager/userinfokey/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a user info key from the given string.

## Declaration

```swift
init(_ rawValue: String)
```

## Parameters

- `rawValue`: The raw value string.

<a id="Discussion"></a>

## Discussion

Don’t use this initializer. Instead, extend the [UndoManager.UserInfoKey](../userinfokey.md) namespace as follows:

```swift
extension UndoManager.UserInfoKey {
    static let icon: UndoManager.UserInfoKey = "icon"
}
```

## See Also

### Creating a user info key from a raw value

- [init(rawValue:)](init%28rawvalue_%29.md)
