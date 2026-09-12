> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/askpermission](https://developer.apple.com/documentation/swiftui/environmentvalues/askpermission)

# askPermission

**Framework:** PermissionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+ · macOS 26.5+ · visionOS 26.5+

An action that sends a permission question to a parent or guardian.

## Declaration

```swift
var askPermission: AskPermissionAction { get }
```

<a id="discussion"></a>

## Discussion

Use this environment value to get an `AskPermissionAction` instance for the current [Environment](../environment.md). Then call the instance to send a permission question. You call the instance directly because it defines a `AskPermissionAction/callAsFunction(_:)` method that Swift calls when you call the instance directly.
