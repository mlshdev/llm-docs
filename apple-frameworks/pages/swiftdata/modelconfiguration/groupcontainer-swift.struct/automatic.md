> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/automatic](https://developer.apple.com/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct/automatic)

# automatic

**Framework:** SwiftData  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Tells SwiftData to use the app’s primary group container as the root location for the persistent storage.

## Declaration

```swift
static var automatic: ModelConfiguration.GroupContainer { get }
```

## See Also

### Getting discovery options

- [identifier(\_:)](identifier%28__%29.md): Tells SwiftData to use the specified group container as the root location for the app’s persistent storage.
- [none](none.md): Prevents SwiftData from using a group container as the root location for the app’s persistent storage.
