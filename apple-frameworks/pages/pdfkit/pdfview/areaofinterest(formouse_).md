> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/areaofinterest(formouse:)](https://developer.apple.com/documentation/pdfkit/pdfview/areaofinterest(formouse:))

# areaOfInterest(forMouse:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of area the mouse cursor is over.

## Declaration

```swift
func areaOfInterest(forMouse event: UIEvent) -> PDFAreaOfInterest
```

```swift
func areaOfInterest(forMouse event: NSEvent) -> PDFAreaOfInterest
```

<a id="Discussion"></a>

## Discussion

The `PDFAreaOfInterest` enumeration defines the various area types. This method is for custom subclasses of the `PDFView` class. Use it if you override the `NSResponder` class’s [mouseMoved(with:)](https://developer.apple.com/documentation/appkit/nsresponder/mousemoved%28with:%29) method or related methods.

Refer to `Constants` for the various values of the area-of-interest constants. Each of these constants contributes to the value of the `PDFAreaOfInterest` bit field.

## See Also

### Working with Mouse Position and Events

- [areaOfInterest(for:)](areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorFor(\_:)](setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [perform(\_:)](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.

# areaOfInterestForMouse: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of area the mouse cursor is over.

## Declaration

```objectivec
- (PDFAreaOfInterest) areaOfInterestForMouse:(UIEvent *) event;
```

```objectivec
- (PDFAreaOfInterest) areaOfInterestForMouse:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

The `PDFAreaOfInterest` enumeration defines the various area types. This method is for custom subclasses of the `PDFView` class. Use it if you override the `NSResponder` class’s [mouseMoved:](https://developer.apple.com/documentation/appkit/nsresponder/mousemoved%28with:%29) method or related methods.

Refer to `Constants` for the various values of the area-of-interest constants. Each of these constants contributes to the value of the `PDFAreaOfInterest` bit field.

## See Also

### Working with Mouse Position and Events

- [areaOfInterestForPoint:](areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](../pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorForAreaOfInterest:](setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [performAction:](perform%28__%29.md): Performs the specified action.
- [Drag Operations](../drag-operations.md): Define drag operations allowed for a view.
