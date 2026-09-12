> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityaction/registeraction()](https://developer.apple.com/documentation/realitykit/entityaction/registeraction())

# registerAction()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Registers the action into the action-types registry.

## Declaration

```swift
static func registerAction()
```

<a id="discussion"></a>

## Discussion

Registering an action allows RealityKit to retrieve its [AnimationResource](../animationresource.md) definitions.

Registering an action may not be necessary, because RealityKit automatically registers the action when you:

- Initialize an [ActionAnimation](../actionanimation.md) with this action.
- Subscribe to it in any way, including subscribing an [ActionHandlerProtocol](../actionhandlerprotocol.md).
