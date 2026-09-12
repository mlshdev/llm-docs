> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityaction/subscribe(to:_:)](https://developer.apple.com/documentation/realitykit/entityaction/subscribe(to:_:))

# subscribe(to:\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Subscribes to an action event.

## Declaration

```swift
@MainActor @preconcurrency static func subscribe(to eventType: ActionEventType, _ handler: @escaping @MainActor (ActionEvent<Self>) -> Void)
```

<a id="discussion"></a>

## Discussion

For example, you can call this method to subscribe to the update event, which the system calls each frame it evaluates the action:

```swift
struct MyAction: EntityAction {
    ...
}
MyAction.subscribe(to: .updated) { event in
    // RealityKit calls this closure in lock step as it
    // processes each animation frame.
}
```
