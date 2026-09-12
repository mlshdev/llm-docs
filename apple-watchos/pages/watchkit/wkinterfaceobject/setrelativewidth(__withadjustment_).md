> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setrelativewidth(_:withadjustment:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setrelativewidth(_:withadjustment:))

# setRelativeWidth(\_:withAdjustment:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the width of the object relative to its container.

## Declaration

```swift
func setRelativeWidth(_ width: CGFloat, withAdjustment adjustment: CGFloat)
```

## Parameters

- `width`: The width of the object relative to its immediate container. This value represents the percentage of the container’s width. This value must be between `0.0` and `1.0`, and values outside of that range are clamped to the minimum or maximum value.
- `adjustment`: The amount (in points) to add or subtract from the relative width. Positive values increase the width of the item and negative values decrease it.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the height of tables or separator items. Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth(\_:)](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight(\_:)](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeHeight(\_:withAdjustment:)](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth()](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight()](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

# setRelativeWidth:withAdjustment: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the width of the object relative to its container.

## Declaration

```objectivec
- (void) setRelativeWidth:(CGFloat) width withAdjustment:(CGFloat) adjustment;
```

## Parameters

- `width`: The width of the object relative to its immediate container. This value represents the percentage of the container’s width. This value must be between `0.0` and `1.0`, and values outside of that range are clamped to the minimum or maximum value.
- `adjustment`: The amount (in points) to add or subtract from the relative width. Positive values increase the width of the item and negative values decrease it.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the height of tables or separator items. Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth:](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight:](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeHeight:withAdjustment:](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.
