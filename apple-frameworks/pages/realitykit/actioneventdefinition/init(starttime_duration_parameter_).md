> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actioneventdefinition/init(starttime:duration:parameter:)](https://developer.apple.com/documentation/realitykit/actioneventdefinition/init(starttime:duration:parameter:))

# init(startTime:duration:parameter:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Constructs an event definition.

## Declaration

```swift
init(startTime: TimeInterval, duration: TimeInterval, parameter: ActionEventDefinition<ActionType>.EventParameterType? = nil)
```

## Parameters

- `startTime`: The time when the event becomes active.
- `duration`: The duration of the event.
- `parameter`: The event parameter to return to the event handler when the event occurs.
