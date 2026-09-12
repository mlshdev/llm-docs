> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreeaction/subscribe(to:_:)-9mrvx](https://developer.apple.com/documentation/realitykit/behaviortreeaction/subscribe(to:_:)-9mrvx)

# subscribe(to:\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Subscribes to a serializable action event and returns a `ActionResult`.

## Declaration

```swift
@MainActor @preconcurrency static func subscribe(to eventType: ActionEventType, _ handler: @escaping @MainActor (ActionEvent<Self>) -> ActionResult)
```

<a id="discussion"></a>

## Discussion

For example, you can call this method to subscribe to the update event, which the system calls each frame it evaluates the action:

```swift
struct MyAction: BehaviorTreeAction, Codable {
    // ...
}
MyAction.subscribe(to: .updated) { event in
    // Return value is the action result.
    return .success
}
```

## See Also

### Subscribing to events

- [subscribe(to:\_:)](subscribe%28to___%29-3p0pj.md): Shadows the `EntityAction.subscribe(to:_:)` overload that takes a `-> Void` closure.
