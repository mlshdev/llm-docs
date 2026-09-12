> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkvector2makewitharray(_:)](https://developer.apple.com/documentation/glkit/glkvector2makewitharray(_:))

# GLKVector2MakeWithArray(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new two-component vector created from an array of components.

## Declaration

```swift
func GLKVector2MakeWithArray(_ values: UnsafeMutablePointer<Float>!) -> GLKVector2
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

- [GLKVector2Make(\_:\_:)](glkvector2make%28____%29.md): Returns a new two-component vector created from individual component values.

# GLKVector2MakeWithArray (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new two-component vector created from an array of components.

## Declaration

```objectivec
static GLKVector2 GLKVector2MakeWithArray(float values[2]);
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

- [GLKVector2Make](glkvector2make%28____%29.md): Returns a new two-component vector created from individual component values.
