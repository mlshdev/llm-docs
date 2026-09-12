> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector4makewitharray(_:)](https://developer.apple.com/documentation/glkit/glkvector4makewitharray(_:))

# GLKVector4MakeWithArray(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created from an array of components.

## Declaration

```swift
func GLKVector4MakeWithArray(_ values: UnsafeMutablePointer<Float>!) -> GLKVector4
```

## Parameters

- `values`: The array containing the component values.

<a id="return-value"></a>

## Return Value

The array

<a id="Discussion"></a>

## Discussion

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector4Make(\_:\_:\_:\_:)](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithVector3(\_:\_:)](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.

# GLKVector4MakeWithArray (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new four-component vector created from an array of components.

## Declaration

```objectivec
static GLKVector4 GLKVector4MakeWithArray(float values[4]);
```

## Parameters

- `values`: The array containing the component values.

<a id="return-value"></a>

## Return Value

The array

<a id="Discussion"></a>

## Discussion

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector4Make](glkvector4make%28________%29.md): Returns a new four-component vector created from individual component values.
- [GLKVector4MakeWithVector3](glkvector4makewithvector3%28____%29.md): Returns a new four-component vector created by combining a three-component vector with a scalar value.
