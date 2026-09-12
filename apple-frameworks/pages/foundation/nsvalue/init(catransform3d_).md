> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(catransform3d:)](https://developer.apple.com/documentation/foundation/nsvalue/init(catransform3d:))

# init(CATransform3D:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new value object containing the specified CoreAnimation transform structure.

## Declaration

```swift
init(CATransform3D t: CATransform3D)
```

```swift
init(caTransform3D t: CATransform3D)
```

## Parameters

- `t`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the transform information.

## See Also

### Related Documentation

- [CATransform3D](../../quartzcore/catransform3d.md): The standard transform matrix used throughout Core Animation.

### Working with CoreAnimation Transform Values

- [caTransform3DValue](catransform3dvalue.md): The CoreAnimation transform structure representation of the value.

# valueWithCATransform3D: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a new value object containing the specified CoreAnimation transform structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCATransform3D:(CATransform3D) t;
```

## Parameters

- `t`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the transform information.

## See Also

### Related Documentation

- [CATransform3D](../../quartzcore/catransform3d.md): The standard transform matrix used throughout Core Animation.

### Working with CoreAnimation Transform Values

- [CATransform3DValue](catransform3dvalue.md): The CoreAnimation transform structure representation of the value.
