> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/shoulddisplay](https://developer.apple.com/documentation/pdfkit/pdfannotation/shoulddisplay)

# shouldDisplay (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the annotation should be displayed.

## Declaration

```swift
var shouldDisplay: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the annotation should be displayed; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

`PDFPage` respects this flag when drawing.

## See Also

### Managing Annotation Drawing and Output

- [draw(with:in:)](draw%28with_in_%29.md): Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.
- [shouldPrint](shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.

# shouldDisplay (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the annotation should be displayed.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldDisplay;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the annotation should be displayed; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

`PDFPage` respects this flag when drawing.

## See Also

### Managing Annotation Drawing and Output

- [drawWithBox:inContext:](draw%28with_in_%29.md): Draws the annotation in a graphics context using page-space coordinates relative to the origin of the specified box.
- [shouldPrint](shouldprint.md): Returns a Boolean value indicating whether the annotation should appear when the document is printed.
