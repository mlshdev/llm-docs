> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tipkit/tips/action/init(id:title:perform:)

# init(id:title:perform:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tip action that generates its label from a string.

## Declaration

```swift
@preconcurrency nonisolated init(id: String? = nil, title: some StringProtocol, perform handler: @escaping @MainActor @Sendable () -> Void = {})
```

## Parameters

- `id`: An optional identifier associated with the action. If you don’t specify a value, the system assigns the action’s `index` to this value.
- `title`: A string that describes the purpose of the tip action.
- `handler`: The function the system calls when the action triggers.

## See Also

### Initializers

- [init(id:perform:\_:)](init%28id_perform___%29.md): Creates a tip action that displays a custom label.
