> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector2](https://developer.apple.com/documentation/glkit/glkvector2)

# GLKVector2 (Swift)

**Framework:** GLKit  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

A representation of a 2-component vector.

## Declaration

```swift
typealias GLKVector2 = _GLKVector2
```

<a id="Overview"></a>

## Overview

The `GLKVector2` type defines a 2-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, colors and other data structures.

The functions that manipulate `GLKVector2` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

<a id="Fields"></a>

### Fields

| Name | Description |
| --- | --- |
| `x` | The first component in the vector. Typically used when the vector refers to a position. |
| `y` | The second component in the vector. Typically used when the vector refers to a position. |
| `s` | The first component in the vector. Typically used when the vector refers to texture coordinates. |
| `t` | The second component in the vector. Typically used when the vector refers to texture coordinates. |
| `v` | The elements of the vector expressed as an array. |

# GLKVector2 (Objective-C)

**Framework:** GLKit  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

A representation of a 2-component vector.

## Declaration

```objectivec
typedef union _GLKVector2 GLKVector2;
```

<a id="Overview"></a>

## Overview

The `GLKVector2` type defines a 2-component floating-point vector as well as many mathematical operations commonly used to manipulate vectors. Graphics programming uses vectors extensively to represent positions, colors and other data structures.

The functions that manipulate `GLKVector2` structures treat the inputs as immutable, instead returning a new vector that represent the results of the operation.

<a id="Fields"></a>

### Fields

| Name | Description |
| --- | --- |
| `x` | The first component in the vector. Typically used when the vector refers to a position. |
| `y` | The second component in the vector. Typically used when the vector refers to a position. |
| `s` | The first component in the vector. Typically used when the vector refers to texture coordinates. |
| `t` | The second component in the vector. Typically used when the vector refers to texture coordinates. |
| `v` | The elements of the vector expressed as an array. |
