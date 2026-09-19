> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/forceeffectparameters/setforce(_:index:)

# setForce(\_:index:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Sets the force for each rigid body.

## Declaration

```swift
func setForce(_ force: SIMD3<Float>, index: Int)
```

## Parameters

- `force`: The force value.
- `index`: The index to the rigid body. The index should be in the range \[0, [physicsBodyCount](physicsbodycount.md)\].

<a id="discussion"></a>

## Discussion

Inside the force effect update function, you are responsible to compute and output the force by calling this function for each rigid body. If you omit this function for a rigid body, that rigid body gets zero force from the effect.
