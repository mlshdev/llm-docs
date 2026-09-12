> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectprotocol/register(_:)](https://developer.apple.com/documentation/realitykit/forceeffectprotocol/register(_:))

# register(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Registers the custom effect.

## Declaration

```swift
@MainActor @preconcurrency static func register(_ updateHandler: (@MainActor (inout ForceEffectEvent<Self>) -> Void)? = nil)
```

## Parameters

- `updateHandler`: A closure that computes custom forces for rigid bodies.

<a id="discussion"></a>

## Discussion

If a handler is specified, the physics system calls the handler and ignores the update function.
