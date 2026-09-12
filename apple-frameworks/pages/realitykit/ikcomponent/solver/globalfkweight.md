> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/solver/globalfkweight](https://developer.apple.com/documentation/realitykit/ikcomponent/solver/globalfkweight)

# globalFkWeight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The solver global forward kinematics demand’s weight.

## Declaration

```swift
var globalFkWeight: Float { get set }
```

<a id="discussion"></a>

## Discussion

Multiplied with the per-joint per-axis forward kinematics weight [fkWeightPerAxis](../joint/fkweightperaxis.md).

The initial value is from the respective [globalFkWeight](../../ikrig/globalfkweight.md).
