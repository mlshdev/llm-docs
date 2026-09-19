> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/register(_:)-1jigj

# register(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Registers a handler that creates an action handler, and subscribes to one or more events.

## Declaration

```swift
static func register(_ creationHandler: @escaping (Self.EventType) -> (any ActionHandlerProtocol)?)
```

## Parameters

- `creationHandler`: The closure that instantiates the handler.
