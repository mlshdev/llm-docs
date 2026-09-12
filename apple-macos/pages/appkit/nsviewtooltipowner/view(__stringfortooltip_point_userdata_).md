> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewtooltipowner/view(_:stringfortooltip:point:userdata:)](https://developer.apple.com/documentation/appkit/nsviewtooltipowner/view(_:stringfortooltip:point:userdata:))

# view(\_:stringForToolTip:point:userData:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tool tip string to be displayed due to the cursor pausing at location `point` within the tool tip rectangle identified by `tag` in the view `view`.

## Declaration

```swift
@MainActor func view(_ view: NSView, stringForToolTip tag: NSView.ToolTipTag, point: NSPoint, userData data: UnsafeMutableRawPointer?) -> String
```

<a id="Discussion"></a>

## Discussion

`userData` is additional information provided by the creator of the tool tip rectangle.

## See Also

### Related Documentation

- [Online Help](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OnlineHelp/OnlineHelp.html#//apple_ref/doc/uid/10000009i)
- [addToolTip(\_:owner:userData:)](../nsview/addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.

# view:stringForToolTip:point:userData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tool tip string to be displayed due to the cursor pausing at location `point` within the tool tip rectangle identified by `tag` in the view `view`.

## Declaration

```objectivec
- (NSString *) view:(NSView *) view stringForToolTip:(NSToolTipTag) tag point:(NSPoint) point userData:(void *) data;
```

<a id="Discussion"></a>

## Discussion

`userData` is additional information provided by the creator of the tool tip rectangle.

## See Also

### Related Documentation

- [Online Help](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OnlineHelp/OnlineHelp.html#//apple_ref/doc/uid/10000009i)
- [addToolTipRect:owner:userData:](../nsview/addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
