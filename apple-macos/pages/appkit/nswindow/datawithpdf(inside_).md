> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/datawithpdf(inside:)](https://developer.apple.com/documentation/appkit/nswindow/datawithpdf(inside:))

# dataWithPDF(inside:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns PDF data that draws the region of the window within a given rectangle.

## Declaration

```swift
func dataWithPDF(inside rect: NSRect) -> Data
```

## Parameters

- `rect`: A rectangle (expressed in the window’s coordinate system) that identifies the region to be expressed as PDF data.

<a id="return-value"></a>

## Return Value

The region in the window (identified by `rect`) as PDF data.

<a id="Discussion"></a>

## Discussion

This data can be placed on a pasteboard, written to a file, or used to create an `NSImage` object.

## See Also

### Related Documentation

- [writePDF(inside:to:)](../nsview/writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [dataWithPDF(inside:)](../nsview/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.

### Printing Windows

- [printWindow(\_:)](printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithEPS(inside:)](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.

# dataWithPDFInsideRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns PDF data that draws the region of the window within a given rectangle.

## Declaration

```objectivec
- (NSData *) dataWithPDFInsideRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle (expressed in the window’s coordinate system) that identifies the region to be expressed as PDF data.

<a id="return-value"></a>

## Return Value

The region in the window (identified by `rect`) as PDF data.

<a id="Discussion"></a>

## Discussion

This data can be placed on a pasteboard, written to a file, or used to create an `NSImage` object.

## See Also

### Related Documentation

- [writePDFInsideRect:toPasteboard:](../nsview/writepdf%28inside_to_%29.md): Writes PDF data that draws the region of the view within a specified rectangle onto a pasteboard.
- [dataWithPDFInsideRect:](../nsview/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the view within a specified rectangle.

### Printing Windows

- [print:](printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithEPSInsideRect:](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.
