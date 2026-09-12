> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionhandlerprotocol/register(_:)](https://developer.apple.com/documentation/realitykit/actionhandlerprotocol/register(_:))

# register(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Registers a handler that responds to raised action events for a particular action type.

## Declaration

```swift
static func register(_ creationHandler: @escaping (Self.EventType) -> (any ActionHandlerProtocol)?)
```

## Parameters

- `creationHandler`: The closure that instantiates the handler.

## Default Implementations

### ActionHandlerProtocol Implementations

- [register(\_:)](register%28__%29-1jigj.md): Registers a handler that creates an action handler, and subscribes to one or more events.
- [register(\_:)](register%28__%29-1kxs4.md): Conforms when `ActionType` conforms to `Decodable`, `ActionType` conforms to `Encodable`, `ActionType.EventParameterType` conforms to `Decodable`, and `ActionType.EventParameterType` conforms to `Encodable`.
