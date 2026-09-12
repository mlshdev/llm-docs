> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/identifier(_:)](https://developer.apple.com/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/identifier(_:))

# identifier(\_:)

**Framework:** SwiftData  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Tells SwiftData to use the specified group container as the root location for the app’s persistent storage.

## Declaration

```swift
static func identifier(_ groupName: String) -> ModelConfiguration.GroupContainer
```

## Parameters

- `groupName`: The identifier of the group container to use. You find these in the App Groups capabilities section of your Xcode project. For more information, see [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups).

## See Also

### Getting discovery options

- [automatic](automatic.md): Tells SwiftData to use the app’s primary group container as the root location for the persistent storage.
- [none](none.md): Prevents SwiftData from using a group container as the root location for the app’s persistent storage.
