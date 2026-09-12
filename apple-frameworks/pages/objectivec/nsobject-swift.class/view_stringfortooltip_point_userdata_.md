> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/view:stringfortooltip:point:userdata:)

# view:stringForToolTip:point:userData:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

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
- [addToolTipRect:owner:userData:](https://developer.apple.com/documentation/appkit/nsview/addtooltip%28_:owner:userdata:%29): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
