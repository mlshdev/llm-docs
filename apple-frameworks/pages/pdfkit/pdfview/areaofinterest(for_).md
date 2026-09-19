> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfview/areaofinterest(for:)

# areaOfInterest(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of area for a specific cursor location point.

## Declaration

```swift
func areaOfInterest(for cursorLocation: CGPoint) -> PDFAreaOfInterest
```

```swift
func areaOfInterest(for cursorLocation: NSPoint) -> PDFAreaOfInterest
```

## See Also

### Working with Mouse Position and Events

- [areaOfInterest(forMouse:)](areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorFor(\_:)](setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [perform(\_:)](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.

# areaOfInterestForPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of area for a specific cursor location point.

## Declaration

```objectivec
- (PDFAreaOfInterest) areaOfInterestForPoint:(CGPoint) cursorLocation;
```

```objectivec
- (PDFAreaOfInterest) areaOfInterestForPoint:(NSPoint) cursorLocation;
```

## See Also

### Working with Mouse Position and Events

- [areaOfInterestForMouse:](areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorForAreaOfInterest:](setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [performAction:](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.
