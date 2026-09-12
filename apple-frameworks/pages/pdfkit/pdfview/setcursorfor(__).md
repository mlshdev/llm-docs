> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/setcursorfor(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/setcursorfor(_:))

# setCursorFor(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the type of mouse cursor according to the type of area the mouse cursor is over.

## Declaration

```swift
func setCursorFor(_ area: PDFAreaOfInterest)
```

<a id="Discussion"></a>

## Discussion

This method is especially useful for custom subclasses of the `PDFView` class.

## See Also

### Working with Mouse Position and Events

- [areaOfInterest(forMouse:)](areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterest(for:)](areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [perform(\_:)](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.

# setCursorForAreaOfInterest: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the type of mouse cursor according to the type of area the mouse cursor is over.

## Declaration

```objectivec
- (void) setCursorForAreaOfInterest:(PDFAreaOfInterest) area;
```

<a id="Discussion"></a>

## Discussion

This method is especially useful for custom subclasses of the `PDFView` class.

## See Also

### Working with Mouse Position and Events

- [areaOfInterestForMouse:](areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterestForPoint:](areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [performAction:](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.
