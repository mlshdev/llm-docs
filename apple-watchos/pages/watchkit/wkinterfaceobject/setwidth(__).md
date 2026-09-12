> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setwidth(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setwidth(_:))

# setWidth(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the absolute width (in points) of the object.

## Declaration

```swift
func setWidth(_ width: CGFloat)
```

## Parameters

- `width`: The new width of the object. Specifying a value of `0.0` causes the item to have no width.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the width of tables or the thickness of vertical separator items. Changing the width of a [WKInterfaceImage](../wkinterfaceimage.md) object causes the image’s content scaling mode to change to [UIView.ContentMode.scaleToFill](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum/scaletofill).

Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setHeight(\_:)](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight(\_:withAdjustment:)](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth()](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight()](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

# setWidth: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the absolute width (in points) of the object.

## Declaration

```objectivec
- (void) setWidth:(CGFloat) width;
```

## Parameters

- `width`: The new width of the object. Specifying a value of `0.0` causes the item to have no width.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the width of tables or the thickness of vertical separator items. Changing the width of a [WKInterfaceImage](../wkinterfaceimage.md) object causes the image’s content scaling mode to change to [UIViewContentModeScaleToFill](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum/scaletofill).

Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setHeight:](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth:withAdjustment:](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight:withAdjustment:](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.
