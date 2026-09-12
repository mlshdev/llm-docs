> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector3makewitharray(_:)](https://developer.apple.com/documentation/glkit/glkvector3makewitharray(_:))

# GLKVector3MakeWithArray(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new three-component vector created from an array of components.

## Declaration

```swift
func GLKVector3MakeWithArray(_ values: UnsafeMutablePointer<Float>!) -> GLKVector3
```

## Parameters

- `values`: The array containing the component values.

<a id="return-value"></a>

## Return Value

The array.

<a id="Discussion"></a>

## Discussion

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector3Make(\_:\_:\_:)](glkvector3make%28______%29.md): Returns a new three-component vector created from individual component values.

# GLKVector3MakeWithArray (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new three-component vector created from an array of components.

## Declaration

```objectivec
static GLKVector3 GLKVector3MakeWithArray(float values[3]);
```

## Parameters

- `values`: The array containing the component values.

<a id="return-value"></a>

## Return Value

The array.

<a id="Discussion"></a>

## Discussion

An initialized vector.

## See Also

### Creating Vectors

- [GLKVector3Make](glkvector3make%28______%29.md): Returns a new three-component vector created from individual component values.
