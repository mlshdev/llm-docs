> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/dragforceeffect/update(parameters:)](https://developer.apple.com/documentation/realitykit/dragforceeffect/update(parameters:))

# update(parameters:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Calculates the drag forces for rigid bodies from the force effect.

## Declaration

```swift
func update(parameters: inout ForceEffectParameters)
```

## Parameters

- `parameters`: On input, the parameters that calculate forces to the affected physics bodies; on output, the updates to those forces.

<a id="discussion"></a>

## Discussion

The framework automatically calls this method for you at each physics simulation step, so you don’t need to call it yourself.
