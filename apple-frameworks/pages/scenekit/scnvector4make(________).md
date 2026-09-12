> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector4make(_:_:_:_:)](https://developer.apple.com/documentation/scenekit/scnvector4make(_:_:_:_:))

# SCNVector4Make(\_:\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a new four-component vector created from individual component values.

## Declaration

```swift
func SCNVector4Make(_ x: Float, _ y: Float, _ z: Float, _ w: Float) -> SCNVector4
```

```swift
func SCNVector4Make(_ x: CGFloat, _ y: CGFloat, _ z: CGFloat, _ w: CGFloat) -> SCNVector4
```

## Parameters

- `x`: The first component of the vector.
- `y`: The second component of the vector.
- `z`: The third component of the vector.
- `w`: The fourth component of the vector.

<a id="return-value"></a>

## Return Value

An initialized [SCNVector4](scnvector4.md) structure.

# SCNVector4Make (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new four-component vector created from individual component values.

## Declaration

```objectivec
static SCNVector4 SCNVector4Make(float x, float y, float z, float w);
```

```objectivec
static SCNVector4 SCNVector4Make(CGFloat x, CGFloat y, CGFloat z, CGFloat w);
```

## Parameters

- `x`: The first component of the vector.
- `y`: The second component of the vector.
- `z`: The third component of the vector.
- `w`: The fourth component of the vector.

<a id="return-value"></a>

## Return Value

An initialized [SCNVector4](scnvector4.md) structure.
