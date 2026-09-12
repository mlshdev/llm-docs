> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4make(_:_:_:_:)](https://developer.apple.com/documentation/glkit/glkvector4make(_:_:_:_:))

# GLKVector4Make(\_:\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created from individual component values.

## Declaration

```swift
func GLKVector4Make(_ x: Float, _ y: Float, _ z: Float, _ w: Float) -> GLKVector4
```

## Parameters

- `x`: The first component.
- `y`: The second component.
- `z`: The third component.
- `w`: The fourth component.

<a id="return-value"></a>

## Return Value

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector4MakeWithArray(\_:)](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.
- [GLKVector4MakeWithVector3(\_:\_:)](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.

# GLKVector4Make (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created from individual component values.

## Declaration

```objectivec
static GLKVector4 GLKVector4Make(float x, float y, float z, float w);
```

## Parameters

- `x`: The first component.
- `y`: The second component.
- `z`: The third component.
- `w`: The fourth component.

<a id="return-value"></a>

## Return Value

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector4MakeWithArray](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.
- [GLKVector4MakeWithVector3](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.
