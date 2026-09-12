> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector4equaltovector4(_:_:)](https://developer.apple.com/documentation/scenekit/scnvector4equaltovector4(_:_:))

# SCNVector4EqualToVector4(\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

## Declaration

```swift
func SCNVector4EqualToVector4(_ a: SCNVector4, _ b: SCNVector4) -> Bool
```

## Parameters

- `a`: The first vector.
- `b`: The second vector.

<a id="return-value"></a>

## Return Value

True if each component of `a` is exactly equal to `b`.

<a id="Discussion"></a>

## Discussion

This function performs a numeric (not bitwise) comparison of each pair of component values.

# SCNVector4EqualToVector4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

## Declaration

```objectivec
extern bool SCNVector4EqualToVector4(SCNVector4 a, SCNVector4 b);
```

## Parameters

- `a`: The first vector.
- `b`: The second vector.

<a id="return-value"></a>

## Return Value

True if each component of `a` is exactly equal to `b`.

<a id="Discussion"></a>

## Discussion

This function performs a numeric (not bitwise) comparison of each pair of component values.
