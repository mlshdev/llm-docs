> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablesetup/register(action:)](https://developer.apple.com/documentation/tabletopkit/tablesetup/register(action:))

# register(action:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Register a custom action of given type. Each type of custom action needs to be registered before it can be used.

## Declaration

```swift
mutating func register<Action>(action type: Action.Type) where Action : BitwiseCopyable, Action : CustomAction
```

## Parameters

- `type`: The type of the custom action.
