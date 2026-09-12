> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/mouseupaction](https://developer.apple.com/documentation/pdfkit/pdfannotation/mouseupaction)

# mouseUpAction (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.13)

The action to perform when a user releases the mouse button within an annotation.

## Declaration

```swift
var mouseUpAction: PDFAction? { get set }
```

## Parameters

- `action`: The PDF action to perform when a user releases the mouse button within an annotation.

<a id="Discussion"></a>

## Discussion

The mouse-up action is optional.

## See Also

### Deprecated Properties

- [toolTip](tooltip.md): Deprecated. Returns text for display as a help tag.

# mouseUpAction (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.13)

The action to perform when a user releases the mouse button within an annotation.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PDFAction * mouseUpAction;
```

## Parameters

- `action`: The PDF action to perform when a user releases the mouse button within an annotation.

<a id="Discussion"></a>

## Discussion

The mouse-up action is optional.

## See Also

### Deprecated Properties

- [toolTip](tooltip.md): Deprecated. Returns text for display as a help tag.
