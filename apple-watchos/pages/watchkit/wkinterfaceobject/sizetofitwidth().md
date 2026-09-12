> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/sizetofitwidth()](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/sizetofitwidth())

# sizeToFitWidth() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the width of the object to fit its current content.

## Declaration

```swift
func sizeToFitWidth()
```

<a id="Discussion"></a>

## Discussion

This method is equivalent of using the Size to Fit Content option in Interface Builder. It sizes the object so that its width matches the width of its content. For example, calling this method on a label sets the width of the label to the width of its text. The width of an object never exceeds the width of its container.

Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth(\_:)](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight(\_:)](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth(\_:withAdjustment:)](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight(\_:withAdjustment:)](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitHeight()](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.

# sizeToFitWidth (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the width of the object to fit its current content.

## Declaration

```objectivec
- (void) sizeToFitWidth;
```

<a id="Discussion"></a>

## Discussion

This method is equivalent of using the Size to Fit Content option in Interface Builder. It sizes the object so that its width matches the width of its content. For example, calling this method on a label sets the width of the label to the width of its text. The width of an object never exceeds the width of its container.

Changes to the width of an object are animatable.

## See Also

### Changing an Object’s Size

- [setWidth:](setwidth%28__%29.md): Sets the absolute width (in points) of the object.
- [setHeight:](setheight%28__%29.md): Sets the absolute height (in points) of the object.
- [setRelativeWidth:withAdjustment:](setrelativewidth%28__withadjustment_%29.md): Sets the width of the object relative to its container.
- [setRelativeHeight:withAdjustment:](setrelativeheight%28__withadjustment_%29.md): Sets the height of the object relative to its container.
- [sizeToFitHeight](sizetofitheight%28%29.md): Sets the height of the object so that it fills the available vertical space.
