> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagelayout/printinfo](https://developer.apple.com/documentation/appkit/nspagelayout/printinfo)

# printInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The printing information object used when the page layout panel is run.

## Declaration

```swift
var printInfo: NSPrintInfo? { get }
```

<a id="Discussion"></a>

## Discussion

The NSPrintInfo object is set using the [beginSheet(with:modalFor:delegate:didEnd:contextInfo:)](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md) or [runModal(with:)](runmodal%28with_%29.md) method. The shared NSPrintInfo object is used if the receiver is run using [runModal()](runmodal%28%29.md).

## See Also

### Accessing the printing information

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPageLayout.Result](result.md)

# printInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The printing information object used when the page layout panel is run.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPrintInfo * printInfo;
```

<a id="Discussion"></a>

## Discussion

The NSPrintInfo object is set using the [beginSheetWithPrintInfo:modalForWindow:delegate:didEndSelector:contextInfo:](beginsheet%28with_modalfor_delegate_didend_contextinfo_%29.md) or [runModalWithPrintInfo:](runmodal%28with_%29.md) method. The shared NSPrintInfo object is used if the receiver is run using [runModal](runmodal%28%29.md).

## See Also

### Related Documentation

- [writePrintInfo](writeprintinfo.md): Deprecated. Writes the page layout’s values to the print info object used when the page layout panel is run.
- [readPrintInfo](readprintinfo.md): Deprecated. Sets the page layout’s values to those stored in the print info object used when the page layout panel is run.

### Accessing the printing information

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPageLayoutResult](result.md)
