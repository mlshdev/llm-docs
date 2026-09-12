> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath/subscript(dynamicmember:)-lizi](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/subscript(dynamicmember:)-lizi)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses a typed property at the current path by name.

## Declaration

```swift
subscript<T>(dynamicMember identifier: String) -> T where T : IntentValueConvertible { get throws }
```
