> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addtooltip(_:owner:userdata:)](https://developer.apple.com/documentation/appkit/nsview/addtooltip(_:owner:userdata:))

# addToolTip(\_:owner:userData:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.

## Declaration

```swift
func addToolTip(_ rect: NSRect, owner: Any, userData data: UnsafeMutableRawPointer?) -> NSView.ToolTipTag
```

## Parameters

- `rect`: A rectangle defining the region of the view to associate the tooltip with.
- `owner`: An object from which to obtain the tooltip string. The object should either implement  [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:), or return a suitable string from its [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description) method. It can therefore simply be an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object.

  > **Important**

  >  The view maintains a weak reference to `owner`. You’re responsible for ensuring that `owner` remains valid for as long as it may be needed.
- `data`: Any additional information you want to pass to [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:); it isn’t used if `owner` doesn’t implement this method.

<a id="return-value"></a>

## Return Value

An integer tag identifying the tooltip; you can use this tag to remove the tooltip.

<a id="Discussion"></a>

## Discussion

The tooltip string is obtained dynamically from `owner` by invoking either the `NSToolTipOwner` informal protocol method [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:), if implemented, or the [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol) protocol method [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description).

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [removeAllToolTips()](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip(\_:)](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSView.ToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

# addToolTipRect:owner:userData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.

## Declaration

```objectivec
- (NSToolTipTag) addToolTipRect:(NSRect) rect owner:(id) owner userData:(void *) data;
```

## Parameters

- `rect`: A rectangle defining the region of the view to associate the tooltip with.
- `owner`: An object from which to obtain the tooltip string. The object should either implement  [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:), or return a suitable string from its [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description) method. It can therefore simply be an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object.

  > **Important**

  >  The view maintains a weak reference to `owner`. You’re responsible for ensuring that `owner` remains valid for as long as it may be needed.
- `data`: Any additional information you want to pass to [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:); it isn’t used if `owner` doesn’t implement this method.

<a id="return-value"></a>

## Return Value

An integer tag identifying the tooltip; you can use this tag to remove the tooltip.

<a id="Discussion"></a>

## Discussion

The tooltip string is obtained dynamically from `owner` by invoking either the `NSToolTipOwner` informal protocol method [view:stringForToolTip:point:userData:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:), if implemented, or the [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol) protocol method [description](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/description).

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [removeAllToolTips](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip:](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.
