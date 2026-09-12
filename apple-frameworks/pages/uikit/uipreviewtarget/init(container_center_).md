> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewtarget/init(container:center:)](https://developer.apple.com/documentation/uikit/uipreviewtarget/init(container:center:))

# init(container:center:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview target object using the specified container view and center point.

## Declaration

```swift
convenience init(container: UIView, center: CGPoint)
```

## Parameters

- `container`: The container for the view being animated. This view must be in a window.
- `center`: The point in `container` at which to place the center of the view being animated. Specify this point in the coordinate system of `container`.

<a id="return-value"></a>

## Return Value

A new preview target object with the specified container and configuration data.

## See Also

### Creating a preview target object

- [init(container:center:transform:)](init%28container_center_transform_%29.md): Creates a preview target object using the specified container view and configuration details.

# initWithContainer:center: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview target object using the specified container view and center point.

## Declaration

```objectivec
- (instancetype) initWithContainer:(UIView *) container center:(CGPoint) center;
```

## Parameters

- `container`: The container for the view being animated. This view must be in a window.
- `center`: The point in `container` at which to place the center of the view being animated. Specify this point in the coordinate system of `container`.

<a id="return-value"></a>

## Return Value

A new preview target object with the specified container and configuration data.

## See Also

### Creating a preview target object

- [initWithContainer:center:transform:](init%28container_center_transform_%29.md): Creates a preview target object using the specified container view and configuration details.
