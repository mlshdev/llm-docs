> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/striporientation](https://developer.apple.com/documentation/computegraph/striporientation)

# StripOrientation

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

An enumeration that specifies how a strip should be oriented.

## Declaration

```swift
enum StripOrientation
```

## Topics

### Enumeration Cases

- [StripOrientation.auto](striporientation/auto.md): Automatically derive the orientation of the strip via neighbors and any provided axisY or axisZ values.
- [StripOrientation.deriveFromYAxis](striporientation/derivefromyaxis.md): Derive the strip’s orientation from neighboring points and `axisY` float3 parameter
- [StripOrientation.deriveFromZAxis](striporientation/derivefromzaxis.md): Derive the strip’s orientation from neighboring points and `axisZ` float3 parameter
- [StripOrientation.frenet](striporientation/frenet.md): Use strip’s frenet frame for orientation
- [StripOrientation.planar](striporientation/planar.md)
- [StripOrientation.useZAxis](striporientation/usezaxis.md): Use the `axisZ` float3 parameter without re-orienting. Derive Y-axis from neighboring points and `axisZ`.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry and simulation inputs

- [CoordinateSpace](coordinatespace.md): Simulation coordinate space, controlling how positions and orientations are stored.
- [Viewpoint](viewpoint-swift.struct.md): Camera viewpoint parameters in 3D space.
- [MouseParams](mouseparams.md): Parameters describing mouse interaction in 3D space.
