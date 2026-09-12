> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setrelativeheight(_:withadjustment:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setrelativeheight(_:withadjustment:))

# setRelativeHeight(\_:withAdjustment:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the height of the object relative to its container.

## Declaration

```swift
func setRelativeHeight(_ height: CGFloat, withAdjustment adjustment: CGFloat)
```

## Parameters

- `height`: The height of the object relative to its immediate container. This value represents the percentage of the container’s height. This value must be between `0.0` and `1.0`, and values outside of that range are clamped to the minimum or maximum value.
- `adjustment`: The amount (in points) to add or subtract from the relative height. Positive values increase the height of the item and negative values decrease it.

<a id="Discussion"></a>

## Discussion

You can’t use this method to alter the height of tables or separator items. Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth(\_:)](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight(\_:)](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [sizeToFitWidth()](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight()](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

# setRelativeHeight:withAdjustment: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the height of the object relative to its container.

## Declaration

```objectivec
- (void) setRelativeHeight:(CGFloat) height withAdjustment:(CGFloat) adjustment;
```

## Parameters

- `height`: The height of the object relative to its immediate container. This value represents the percentage of the container’s height. This value must be between `0.0` and `1.0`, and values outside of that range are clamped to the minimum or maximum value.
- `adjustment`: The amount (in points) to add or subtract from the relative height. Positive values increase the height of the item and negative values decrease it.

<a id="Discussion"></a>

## Discussion

You can’t use this method to alter the height of tables or separator items. Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth:](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight:](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth:withAdjustment:](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [sizeToFitWidth](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.
