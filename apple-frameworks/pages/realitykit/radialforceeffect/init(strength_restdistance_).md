> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/radialforceeffect/init(strength:restdistance:)](https://developer.apple.com/documentation/realitykit/radialforceeffect/init(strength:restdistance:))

# init(strength:restDistance:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a radial force effect.

## Declaration

```swift
init(strength: Double, restDistance: Double)
```

## Parameters

- `strength`: The magnitude of the spring effect—a larger strength simulates a stiffer spring.
- `restDistance`: Objects at this distance will receive zero radial force. Otherwise they will gravitate toward this distance along the radial direction. Objects will be attracted to the origin directly if this property is set to zero.
