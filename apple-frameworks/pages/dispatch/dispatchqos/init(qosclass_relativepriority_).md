> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/init(qosclass:relativepriority:)](https://developer.apple.com/documentation/dispatch/dispatchqos/init(qosclass:relativepriority:))

# init(qosClass:relativePriority:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new `DispatchQoS` object with the specified QoS class and relative priority.

## Declaration

```swift
init(qosClass: DispatchQoS.QoSClass, relativePriority: Int)
```

## Parameters

- `qosClass`: The QoS class.

  For possible values, see [DispatchQoS.QoSClass](qosclass-swift.enum.md).
- `relativePriority`: The relative priority.

## See Also

### Creating a QoS Structure

- [DispatchQoS.QoSClass](qosclass-swift.enum.md): Quality-of-service classes that specify the priorities for executing tasks.
