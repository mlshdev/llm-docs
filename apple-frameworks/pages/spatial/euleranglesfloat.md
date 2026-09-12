> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/euleranglesfloat](https://developer.apple.com/documentation/spatial/euleranglesfloat)

# EulerAnglesFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct EulerAnglesFloat
```

<a id="overview"></a>

## Overview

A structure that represents Euler angles, in radians, and ordering.

## Topics

### Initializers

- [init()](euleranglesfloat/init%28%29.md)
- [init(angles:order:)](euleranglesfloat/init%28angles_order_%29.md)
- [init(x:y:z:order:)](euleranglesfloat/init%28x_y_z_order_%29.md): Returns a new Euler angles structure from three angle structures.

### Instance Properties

- [angles](euleranglesfloat/angles.md): A three-element vector that contains the angles, in radians.
- [order](euleranglesfloat/order.md): A constant that specify the Euler angle order.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# SPEulerAnglesFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } SPEulerAnglesFloat;
```

<a id="overview"></a>

## Overview

A structure that represents Euler angles, in radians, and ordering.

## Topics

### Instance Properties

- [angles](euleranglesfloat/angles.md): A three-element vector that contains the angles, in radians.
- [order](euleranglesfloat/order.md): A constant that specify the Euler angle order.
