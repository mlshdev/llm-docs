> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewtarget/init(container:center:transform:)](https://developer.apple.com/documentation/uikit/uipreviewtarget/init(container:center:transform:))

# init(container:center:transform:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview target object using the specified container view and configuration details.

## Declaration

```swift
init(container: UIView, center: CGPoint, transform: CGAffineTransform)
```

## Parameters

- `container`: The container for the view being animated. This view must be in a window.
- `center`: The point in `container` at which to place the center of the view being animated. Specify this point in the coordinate system of `container`.
- `transform`: An affine transform to apply to the view being animated. You might use this transform to scale or rotate the view.

<a id="return-value"></a>

## Return Value

A new preview target object with the specified container and configuration data.

## See Also

### Creating a preview target object

- [init(container:center:)](init%28container_center_%29.md): Creates a preview target object using the specified container view and center point.

# initWithContainer:center:transform: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview target object using the specified container view and configuration details.

## Declaration

```objectivec
- (instancetype) initWithContainer:(UIView *) container center:(CGPoint) center transform:(CGAffineTransform) transform;
```

## Parameters

- `container`: The container for the view being animated. This view must be in a window.
- `center`: The point in `container` at which to place the center of the view being animated. Specify this point in the coordinate system of `container`.
- `transform`: An affine transform to apply to the view being animated. You might use this transform to scale or rotate the view.

<a id="return-value"></a>

## Return Value

A new preview target object with the specified container and configuration data.

## See Also

### Creating a preview target object

- [initWithContainer:center:](init%28container_center_%29.md): Creates a preview target object using the specified container view and center point.
