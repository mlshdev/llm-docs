> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tipkit/tipgroup/init(_:_:)

# init(\_:\_:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a tip group with the specified presentation priority.

## Declaration

```swift
init(_ priority: TipGroup.Priority = .firstAvailable, @Tips.GroupBuilder _ builder: () -> [any Tip])
```

## Parameters

- `priority`: Presentation priority of the tips. The default value is [`firstAvailable`](priority/firstavailable.md).
- `builder`: The tips to display.
