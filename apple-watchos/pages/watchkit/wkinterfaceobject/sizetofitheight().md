> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/sizetofitheight()](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/sizetofitheight())

# sizeToFitHeight() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the height of the object so that it fills the available vertical space.

## Declaration

```swift
func sizeToFitHeight()
```

<a id="Discussion"></a>

## Discussion

This method is equivalent of using the Size to Fit Content option in Interface Builder. It sizes the object so that its height matches the height of its content. For example, calling this method on a label sets the height of the label to the height of its text. The height of an object never exceeds the height of its container.

Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth(\_:)](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight(\_:)](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight(\_:withAdjustment:)](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth()](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.

# sizeToFitHeight (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the height of the object so that it fills the available vertical space.

## Declaration

```objectivec
- (void) sizeToFitHeight;
```

<a id="Discussion"></a>

## Discussion

This method is equivalent of using the Size to Fit Content option in Interface Builder. It sizes the object so that its height matches the height of its content. For example, calling this method on a label sets the height of the label to the height of its text. The height of an object never exceeds the height of its container.

Changes to the height of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth:](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight:](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth:withAdjustment:](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight:withAdjustment:](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitWidth](sizetofitwidth%28%29.md): Sets the width of the object to fit its current content.
