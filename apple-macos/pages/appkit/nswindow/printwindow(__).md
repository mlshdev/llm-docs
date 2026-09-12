> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/printwindow(_:)](https://developer.apple.com/documentation/appkit/nswindow/printwindow(_:))

# printWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).

## Declaration

```swift
func printWindow(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Printing Windows

- [dataWithEPS(inside:)](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.
- [dataWithPDF(inside:)](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.

# print: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).

## Declaration

```objectivec
- (void) print:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

## See Also

### Printing Windows

- [dataWithEPSInsideRect:](datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.
- [dataWithPDFInsideRect:](datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.
