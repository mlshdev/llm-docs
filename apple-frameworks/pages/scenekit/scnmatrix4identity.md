> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4identity](https://developer.apple.com/documentation/scenekit/scnmatrix4identity)

# SCNMatrix4Identity (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The 4 x 4 identity matrix.

## Declaration

```swift
let SCNMatrix4Identity: SCNMatrix4
```

```swift
let SCNMatrix4Identity: SCNMatrix4
```

<a id="Discussion"></a>

## Discussion

Elements on the diagonal of this matrix are `1.0`; all other elements are `0.0`. Multiplying another matrix by the identity matrix or multiplying the identity matrix by another matrix yields the other matrix.

# SCNMatrix4Identity (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The 4 x 4 identity matrix.

## Declaration

```objectivec
extern const SCNMatrix4 SCNMatrix4Identity;
```

```objectivec
extern const SCNMatrix4 SCNMatrix4Identity;
```

<a id="Discussion"></a>

## Discussion

Elements on the diagonal of this matrix are `1.0`; all other elements are `0.0`. Multiplying another matrix by the identity matrix or multiplying the identity matrix by another matrix yields the other matrix.
