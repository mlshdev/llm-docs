> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitytransferrepresentation/init(exporting:)](https://developer.apple.com/documentation/groupactivities/groupactivitytransferrepresentation/init(exporting:))

# init(exporting:)

**Framework:** Group Activities  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a type that exports a group activity for the specified item.

## Declaration

```swift
init<ActivityType>(exporting: @escaping @Sendable (Item) async throws -> ActivityType) where ActivityType : GroupActivity
```

## Parameters

- `exporting`: A closure that creates the [GroupActivity](../groupactivity.md) for the given item.
