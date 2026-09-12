> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setheight(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setheight(_:))

# setHeight(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the absolute height (in points) of the object.

## Declaration

```swift
func setHeight(_ height: CGFloat)
```

## Parameters

- `height`: The new height of the object. Specifying a value of `0.0` causes the item to have no height.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the height of tables or the thickness of horizontal separator items. Changing the height of a [WKInterfaceImage](../wkinterfaceimage.md) object causes the image’s content scaling mode to change to [UIView.ContentMode.scaleToFill](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum/scaletofill).

Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth(\_:)](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight(\_:withAdjustment:)](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth()](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight()](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

# setHeight: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the absolute height (in points) of the object.

## Declaration

```objectivec
- (void) setHeight:(CGFloat) height;
```

## Parameters

- `height`: The new height of the object. Specifying a value of `0.0` causes the item to have no height.

<a id="Discussion"></a>

## Discussion

You cannot use this method to alter the height of tables or the thickness of horizontal separator items. Changing the height of a [WKInterfaceImage](../wkinterfaceimage.md) object causes the image’s content scaling mode to change to [UIViewContentModeScaleToFill](https://developer.apple.com/documentation/uikit/uiview/contentmode-swift.enum/scaletofill).

Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth:](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setRelativeWidth:withAdjustment:](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight:withAdjustment:](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
- [sizeToFitHeight](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.
