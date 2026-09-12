> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector3equaltovector3(_:_:)](https://developer.apple.com/documentation/scenekit/scnvector3equaltovector3(_:_:))

# SCNVector3EqualToVector3(\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

## Declaration

```swift
func SCNVector3EqualToVector3(_ a: SCNVector3, _ b: SCNVector3) -> Bool
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

# SCNVector3EqualToVector3 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the corresponding components of two vectors are equal.

## Declaration

```objectivec
extern bool SCNVector3EqualToVector3(SCNVector3 a, SCNVector3 b);
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
