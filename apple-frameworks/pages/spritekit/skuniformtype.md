> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skuniformtype](https://developer.apple.com/documentation/spritekit/skuniformtype)

# SKUniformType (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An enumerated type to identify the type of a uniform object.

## Declaration

```swift
enum SKUniformType
```

## Topics

### Constants

- [SKUniformType.none](skuniformtype/none.md): Indicates that the uniform variable does not currently hold any data. A uniform object has this type until the first time its value is set.
- [SKUniformType.float](skuniformtype/float.md): Indicates that the uniform variable holds a 32-bit floating-point value.
- [SKUniformType.floatVector2](skuniformtype/floatvector2.md): Indicates that the uniform variable holds a vector of two 32-bit floating-point values.
- [SKUniformType.floatVector3](skuniformtype/floatvector3.md): Indicates that the uniform variable holds a vector of three 32-bit floating-point values.
- [SKUniformType.floatVector4](skuniformtype/floatvector4.md): Indicates that the uniform variable holds a vector of four 32-bit floating-point values.
- [SKUniformType.floatMatrix2](skuniformtype/floatmatrix2.md): Indicates that the uniform variable holds a `2 x 2` matrix of four 32-bit floating-point values.
- [SKUniformType.floatMatrix3](skuniformtype/floatmatrix3.md): Indicates that the uniform variable holds a `3 x 3` matrix of four 32-bit floating-point values.
- [SKUniformType.floatMatrix4](skuniformtype/floatmatrix4.md): Indicates that the uniform variable holds a `3 x 3` matrix of four 32-bit floating-point values.
- [SKUniformType.texture](skuniformtype/texture.md): Indicates that the uniform variable holds a reference to a SpriteKit texture.

### Initializers

- [init(rawValue:)](skuniformtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SKUniformType (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An enumerated type to identify the type of a uniform object.

## Declaration

```objectivec
enum SKUniformType : NSInteger;
```

## Topics

### Constants

- [SKUniformTypeNone](skuniformtype/none.md): Indicates that the uniform variable does not currently hold any data. A uniform object has this type until the first time its value is set.
- [SKUniformTypeFloat](skuniformtype/float.md): Indicates that the uniform variable holds a 32-bit floating-point value.
- [SKUniformTypeFloatVector2](skuniformtype/floatvector2.md): Indicates that the uniform variable holds a vector of two 32-bit floating-point values.
- [SKUniformTypeFloatVector3](skuniformtype/floatvector3.md): Indicates that the uniform variable holds a vector of three 32-bit floating-point values.
- [SKUniformTypeFloatVector4](skuniformtype/floatvector4.md): Indicates that the uniform variable holds a vector of four 32-bit floating-point values.
- [SKUniformTypeFloatMatrix2](skuniformtype/floatmatrix2.md): Indicates that the uniform variable holds a `2 x 2` matrix of four 32-bit floating-point values.
- [SKUniformTypeFloatMatrix3](skuniformtype/floatmatrix3.md): Indicates that the uniform variable holds a `3 x 3` matrix of four 32-bit floating-point values.
- [SKUniformTypeFloatMatrix4](skuniformtype/floatmatrix4.md): Indicates that the uniform variable holds a `3 x 3` matrix of four 32-bit floating-point values.
- [SKUniformTypeTexture](skuniformtype/texture.md): Indicates that the uniform variable holds a reference to a SpriteKit texture.
