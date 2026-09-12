> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/setaccessoryview:](https://developer.apple.com/documentation/appkit/nspagelayout/setaccessoryview:)

# setAccessoryView:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Adds a view object to the page layout panel.

> Deprecated in OS X v10.5. Use [addAccessoryController:](addaccessorycontroller%28__%29.md) instead.

## Declaration

```objectivec
- (void) setAccessoryView:(NSView *) accessoryView;
```

<a id="Discussion"></a>

## Discussion

Invoke this method to add a custom view containing your controls. `aView` is added to the receiver’s Settings popup menu with your application’s name as its menu item. The receiver is automatically resized to accommodate `aView`. This method can be invoked repeatedly to change the accessory view depending on the situation. If `aView` is `nil`, then the receiver’s current accessory view, if any, is removed.

## See Also

### Deprecated

- [accessoryView](accessoryview.md): Deprecated. Returns the page layout panel’s accessory view.
- [readPrintInfo](readprintinfo.md): Deprecated. Sets the page layout’s values to those stored in the print info object used when the page layout panel is run.
- [writePrintInfo](writeprintinfo.md): Deprecated. Writes the page layout’s values to the print info object used when the page layout panel is run.
