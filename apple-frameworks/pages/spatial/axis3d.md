> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/axis3d](https://developer.apple.com/documentation/spatial/axis3d)

# Axis3D (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe an axis.

## Declaration

```swift
struct Axis3D
```

## Topics

### Constants

- [x](axis3d/x.md): The operation is along the x-axis.
- [y](axis3d/y.md): The operation is along the y-axis.
- [z](axis3d/z.md)

### Initializers

- [init(\_:)](axis3d/init%28__%29.md): Creates a new 3D axis structure.
- [init(rawValue:)](axis3d/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Inspecting the axis

- [rawValue](axis3d/rawvalue.md): The corresponding value of the raw type.

### Default Implementations

- [Decodable Implementations](axis3d/decodable-implementations.md)
- [Encodable Implementations](axis3d/encodable-implementations.md)
- [Hashable Implementations](axis3d/hashable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
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

### Data structures

- [Vector3D](vector3d.md): A three-element vector.
- [Vector3DFloat](vector3dfloat.md): A single-precision structure that defines a three-element vector

# SPAxis (Objective-C)

**Framework:** Spatial  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe an axis.

## Declaration

```objectivec
typedef enum { ... } SPAxis;
```

## Topics

### Enumeration Cases

- [SPAxisX](spaxis/spaxisx.md): The x-axis.
- [SPAxisY](spaxis/spaxisy.md): The y-axis.
- [SPAxisZ](spaxis/spaxisz.md): The z-axis.

## See Also

### Data structures

- [SPVector3D](vector3d.md): A three-element vector.
- [SPVector3DFloat](vector3dfloat.md): A single-precision structure that defines a three-element vector
