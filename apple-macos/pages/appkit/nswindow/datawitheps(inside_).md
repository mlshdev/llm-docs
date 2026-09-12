> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/datawitheps(inside:)](https://developer.apple.com/documentation/appkit/nswindow/datawitheps(inside:))

# dataWithEPS(inside:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns EPS data that draws the region of the window within a given rectangle.

## Declaration

```swift
func dataWithEPS(inside rect: NSRect) -> Data
```

## Parameters

- `rect`: A rectangle (expressed in the window’s coordinate system) that identifies the region to be expressed as EPS data.

<a id="return-value"></a>

## Return Value

The region in the window (identified by `rect`) as EPS data.

<a id="Discussion"></a>

## Discussion

This data can be placed on a pasteboard, written to a file, or used to create an `NSImage` object.

## See Also

### Related Documentation

- [dataWithEPS(inside:)](../nsview/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [writeEPS(inside:to:)](../nsview/writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.

### Printing Windows

- [printWindow(\_:)](printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithPDF(inside:)](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.

# dataWithEPSInsideRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns EPS data that draws the region of the window within a given rectangle.

## Declaration

```objectivec
- (NSData *) dataWithEPSInsideRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle (expressed in the window’s coordinate system) that identifies the region to be expressed as EPS data.

<a id="return-value"></a>

## Return Value

The region in the window (identified by `rect`) as EPS data.

<a id="Discussion"></a>

## Discussion

This data can be placed on a pasteboard, written to a file, or used to create an `NSImage` object.

## See Also

### Related Documentation

- [dataWithEPSInsideRect:](../nsview/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the view within a specified rectangle.
- [writeEPSInsideRect:toPasteboard:](../nsview/writeeps%28inside_to_%29.md): Writes EPS data that draws the region of the view within a specified rectangle onto a pasteboard.

### Printing Windows

- [print:](printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithPDFInsideRect:](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.
