> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/accessoryview](https://developer.apple.com/documentation/appkit/nspagelayout/accessoryview)

# accessoryView

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Returns the page layout panel’s accessory view.

> Deprecated in OS X v10.5. Use [accessoryControllers](accessorycontrollers.md) instead.

## Declaration

```objectivec
- (NSView *) accessoryView;
```

## See Also

### Deprecated

- [setAccessoryView:](setaccessoryview_.md): Deprecated. Adds a view object to the page layout panel.
- [readPrintInfo](readprintinfo.md): Deprecated. Sets the page layout’s values to those stored in the print info object used when the page layout panel is run.
- [writePrintInfo](writeprintinfo.md): Deprecated. Writes the page layout’s values to the print info object used when the page layout panel is run.
