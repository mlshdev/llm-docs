> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/effectiveradius(corner:)](https://developer.apple.com/documentation/uikit/uiview/effectiveradius(corner:))

# effectiveRadius(corner:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.

## Declaration

```swift
func effectiveRadius(corner: UIRectCorner) -> CGFloat
```

## Parameters

- `corner`: The corner whose effective radius you want to calculate.

<a id="return-value"></a>

## Return Value

A `CGFloat` value for the effective radius, expressed in points.

<a id="Overview"></a>

## Overview

When you call this method from [layoutSubviews()](layoutsubviews%28%29.md), [updateProperties()](updateproperties%28%29.md), or [updateProperties()](../uiviewcontroller/updateproperties%28%29.md), automatic invalidation occurs if the effective radius changes. If you provide more than one corner (for example, [allCorners](../uirectcorner/allcorners.md)), the returned radius represents the maximum effective radius of those corners.

## See Also

### Configuring a view’s corners

- [cornerConfiguration](cornerconfiguration-7l0ja.md): A configuration that defines the corners of the view.
- [UICornerConfiguration](../uicornerconfiguration-swift.struct.md): A configuration that defines how corner radii are mapped to the corners of a rectangle.
- [UICornerRadius](../uicornerradius-swift.struct.md): A type that represents the radius the system uses to round a corner.

# effectiveRadiusForCorner: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.

## Declaration

```objectivec
- (CGFloat) effectiveRadiusForCorner:(UIRectCorner) corner;
```

## Parameters

- `corner`: The corner whose effective radius you want to calculate.

<a id="return-value"></a>

## Return Value

A `CGFloat` value for the effective radius, expressed in points.

<a id="Overview"></a>

## Overview

When you call this method from [layoutSubviews](layoutsubviews%28%29.md), [updateProperties](updateproperties%28%29.md), or [updateProperties](../uiviewcontroller/updateproperties%28%29.md), automatic invalidation occurs if the effective radius changes. If you provide more than one corner (for example, [UIRectCornerAllCorners](../uirectcorner/allcorners.md)), the returned radius represents the maximum effective radius of those corners.

## See Also

### Configuring a view’s corners

- [cornerConfiguration](cornerconfiguration-3m8ya.md): A configuration that defines the corners of the view.
- [UICornerConfiguration](../uicornerconfiguration-c.class.md): A configuration that defines how corner radii are mapped to the corners of a rectangle.
- [UICornerRadius](../uicornerradius-c.class.md): A type that represents the radius the system uses to round a corner.
