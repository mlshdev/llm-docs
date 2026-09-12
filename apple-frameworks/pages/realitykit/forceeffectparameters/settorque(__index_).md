> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/forceeffectparameters/settorque(_:index:)](https://developer.apple.com/documentation/realitykit/forceeffectparameters/settorque(_:index:))

# setTorque(\_:index:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Sets the torque for each rigid body.

## Declaration

```swift
func setTorque(_ torque: SIMD3<Float>, index: Int)
```

## Parameters

- `torque`: The torque value.
- `index`: The index to the rigid body. The index should be in the range \[0, [physicsBodyCount](physicsbodycount.md)\].

<a id="discussion"></a>

## Discussion

Inside the force effect update function, you are responsible to compute and output the torque by calling this function for each rigid body. If you omit this function for a rigid body, that rigid body gets zero torque from the effect.
