> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/readprintinfo](https://developer.apple.com/documentation/appkit/nspagelayout/readprintinfo)

# readPrintInfo

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sets the page layout’s values to those stored in the print info object used when the page layout panel is run.

> Deprecated in OS X v10.5. This method should not be invoked directly, so there is no replacement.

## Declaration

```objectivec
- (void) readPrintInfo;
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly; it is invoked automatically before the receiver is displayed.

## See Also

### Related Documentation

- [printInfo](printinfo.md): The printing information object used when the page layout panel is run.
- [runModal](runmodal%28%29.md): Displays the page layout panel and begins the modal loop using the shared print info object.
- [runModalWithPrintInfo:](runmodal%28with_%29.md): Displays the page layout panel and begins the modal loop using the specified print info object.

### Deprecated

- [accessoryView](accessoryview.md): Deprecated. Returns the page layout panel’s accessory view.
- [setAccessoryView:](setaccessoryview_.md): Deprecated. Adds a view object to the page layout panel.
- [writePrintInfo](writeprintinfo.md): Deprecated. Writes the page layout’s values to the print info object used when the page layout panel is run.
