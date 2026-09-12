> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmquaternion](https://developer.apple.com/documentation/coremotion/cmquaternion)

# CMQuaternion (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type for a quaternion representing a measurement of attitude.

## Declaration

```swift
struct CMQuaternion
```

<a id="overview"></a>

## Overview

A quaternion offers a way to parameterize attitude. If `q` is an instance of `CMQuaternion`, mathematically it represents the following unit quaternion: `q.x*i + q.y*j + q.z*k + q.w`. A unit quaternion represents a rotation of theta radians about the unit vector `{x,y,z}`, and `{q.x, q.y, q.z, q.w}` satisfies the following:

```objc
q.x = x * sin(theta / 2)
q.y = y * sin(theta / 2)
q.z = z * sin(theta / 2)
q.w = cos(theta / 2)
```

## Topics

### Initializing the Quaternion

- [init()](cmquaternion/init%28%29.md)
- [init(x:y:z:w:)](cmquaternion/init%28x_y_z_w_%29.md)

### Getting the Quaternion Values

- [w](cmquaternion/w.md): The value for the w axis.
- [x](cmquaternion/x.md): The value for the x axis.
- [y](cmquaternion/y.md): The value for the y axis.
- [z](cmquaternion/z.md): The value for the z axis.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting a Mathematical Representation of Attitude as a Quaternion

- [quaternion](cmattitude/quaternion.md): Returns a quaternion representing the device’s attitude.

# CMQuaternion (Objective-C)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type for a quaternion representing a measurement of attitude.

## Declaration

```objectivec
typedef struct { ... } CMQuaternion;
```

<a id="overview"></a>

## Overview

A quaternion offers a way to parameterize attitude. If `q` is an instance of `CMQuaternion`, mathematically it represents the following unit quaternion: `q.x*i + q.y*j + q.z*k + q.w`. A unit quaternion represents a rotation of theta radians about the unit vector `{x,y,z}`, and `{q.x, q.y, q.z, q.w}` satisfies the following:

```objc
q.x = x * sin(theta / 2)
q.y = y * sin(theta / 2)
q.z = z * sin(theta / 2)
q.w = cos(theta / 2)
```

## Topics

### Getting the Quaternion Values

- [w](cmquaternion/w.md): The value for the w axis.
- [x](cmquaternion/x.md): The value for the x axis.
- [y](cmquaternion/y.md): The value for the y axis.
- [z](cmquaternion/z.md): The value for the z axis.

## See Also

### Getting a Mathematical Representation of Attitude as a Quaternion

- [quaternion](cmattitude/quaternion.md): Returns a quaternion representing the device’s attitude.
