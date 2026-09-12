> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discardingtaskgroup/addtask(name:priority:operation:)](https://developer.apple.com/documentation/swift/discardingtaskgroup/addtask(name:priority:operation:))

# addTask(name:priority:operation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds a child task to the group.

## Declaration

```swift
mutating func addTask(name: String?, priority: TaskPriority? = nil, operation: sending @escaping @isolated(any) () async -> Void)
```

## Parameters

- `name`: Human readable name of this task.
- `priority`: The priority of the operation task. Omit this parameter or pass `nil` to inherit the task group’s base priority.
- `operation`: The operation to execute as part of the task group.
