> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector3make(_:_:_:)](https://developer.apple.com/documentation/scenekit/scnvector3make(_:_:_:))

# SCNVector3Make(\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a new three-component vector created from individual component values.

## Declaration

```swift
func SCNVector3Make(_ x: Float, _ y: Float, _ z: Float) -> SCNVector3
```

```swift
func SCNVector3Make(_ x: CGFloat, _ y: CGFloat, _ z: CGFloat) -> SCNVector3
```

## Parameters

- `x`: The first component of the vector.
- `y`: The second component of the vector.
- `z`: The third component of the vector.

<a id="return-value"></a>

## Return Value

An initialized [SCNVector3](scnvector3.md) structure.

# SCNVector3Make (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new three-component vector created from individual component values.

## Declaration

```objectivec
static SCNVector3 SCNVector3Make(float x, float y, float z);
```

```objectivec
static SCNVector3 SCNVector3Make(CGFloat x, CGFloat y, CGFloat z);
```

## Parameters

- `x`: The first component of the vector.
- `y`: The second component of the vector.
- `z`: The third component of the vector.

<a id="return-value"></a>

## Return Value

An initialized [SCNVector3](scnvector3.md) structure.
