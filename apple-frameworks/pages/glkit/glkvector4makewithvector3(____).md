> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4makewithvector3(_:_:)](https://developer.apple.com/documentation/glkit/glkvector4makewithvector3(_:_:))

# GLKVector4MakeWithVector3(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created by combining a three-component vector with a scalar value.

## Declaration

```swift
func GLKVector4MakeWithVector3(_ vector: GLKVector3, _ w: Float) -> GLKVector4
```

## Parameters

- `vector`: A vector.
- `w`: The fourth component.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Creating Vectors

- [GLKVector4Make(\_:\_:\_:\_:)](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithArray(\_:)](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.

# GLKVector4MakeWithVector3 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created by combining a three-component vector with a scalar value.

## Declaration

```objectivec
static GLKVector4 GLKVector4MakeWithVector3(GLKVector3 vector, float w);
```

## Parameters

- `vector`: A vector.
- `w`: The fourth component.

<a id="return-value"></a>

## Return Value

A new vector.

## See Also

### Creating Vectors

- [GLKVector4Make](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithArray](glkvector4makewitharray%28__%29.md): Returns a new four-component vector created from an array of components.
