> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/action/init(id:perform:_:)](https://developer.apple.com/documentation/tipkit/tips/action/init(id:perform:_:))

# init(id:perform:\_:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tip action that displays a custom label.

## Declaration

```swift
@preconcurrency init(id: String? = nil, perform handler: @escaping @MainActor @Sendable () -> Void = {}, _ label: @escaping @Sendable () -> Text)
```

## Parameters

- `id`: An optional identifier associated with the action. If you don’t specify a value, the system assigns the action’s `index` to this value.
- `handler`: The function the system calls when the action triggers.
- `label`: A view that describes the purpose of the tip action.

## See Also

### Initializers

- [init(id:title:perform:)](init%28id_title_perform_%29.md): Creates a tip action that generates its label from a string.
