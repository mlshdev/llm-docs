> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrotationmatrix](https://developer.apple.com/documentation/coremotion/cmrotationmatrix)

# CMRotationMatrix (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of a structure representing a rotation matrix.

## Declaration

```swift
struct CMRotationMatrix
```

## Topics

### Fields

Each field in this structure defines an element of the rotation matrix by its position. For example, m11 is the element in row 1, column 1; m31 is the element in row 3, column 1; m13 is the element in row 1, column 3.

- [m11](cmrotationmatrix/m11.md)
- [m12](cmrotationmatrix/m12.md)
- [m13](cmrotationmatrix/m13.md)
- [m21](cmrotationmatrix/m21.md)
- [m22](cmrotationmatrix/m22.md)
- [m23](cmrotationmatrix/m23.md)
- [m31](cmrotationmatrix/m31.md)
- [m32](cmrotationmatrix/m32.md)
- [m33](cmrotationmatrix/m33.md)

### Initializers

- [init()](cmrotationmatrix/init%28%29.md)
- [init(m11:m12:m13:m21:m22:m23:m31:m32:m33:)](cmrotationmatrix/init%28m11_m12_m13_m21_m22_m23_m31_m32_m33_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting a Mathematical Representation of Attitude as a Rotation Matrix

- [rotationMatrix](cmattitude/rotationmatrix.md): Returns a rotation matrix representing the device’s attitude.

# CMRotationMatrix (Objective-C)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of a structure representing a rotation matrix.

## Declaration

```objectivec
typedef struct { ... } CMRotationMatrix;
```

## Topics

### Fields

Each field in this structure defines an element of the rotation matrix by its position. For example, m11 is the element in row 1, column 1; m31 is the element in row 3, column 1; m13 is the element in row 1, column 3.

- [m11](cmrotationmatrix/m11.md)
- [m12](cmrotationmatrix/m12.md)
- [m13](cmrotationmatrix/m13.md)
- [m21](cmrotationmatrix/m21.md)
- [m22](cmrotationmatrix/m22.md)
- [m23](cmrotationmatrix/m23.md)
- [m31](cmrotationmatrix/m31.md)
- [m32](cmrotationmatrix/m32.md)
- [m33](cmrotationmatrix/m33.md)

## See Also

### Getting a Mathematical Representation of Attitude as a Rotation Matrix

- [rotationMatrix](cmattitude/rotationmatrix.md): Returns a rotation matrix representing the device’s attitude.
