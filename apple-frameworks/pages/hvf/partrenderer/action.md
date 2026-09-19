> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hvf/partrenderer/action

# PartRenderer.Action

**Framework:** hvf  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Action requested by the render context after processing an instruction

## Declaration

```swift
enum Action
```

## Topics

### Enumeration Cases

- [PartRenderer.Action.continue](action/continue.md): Continue rendering
- [PartRenderer.Action.skip](action/skip.md): Skip this part (only in response to beginPart)
- [PartRenderer.Action.stop](action/stop.md): Stop rendering

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
