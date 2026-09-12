> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/tooltip](https://developer.apple.com/documentation/pdfkit/pdfannotation/tooltip)

# toolTip (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Returns text for display as a help tag.

## Declaration

```swift
var toolTip: String? { get }
```

<a id="return-value"></a>

## Return Value

A string that contains help tag content, or `NULL` if there is no text associated with the annotation.

<a id="Discussion"></a>

## Discussion

This method is equivalent to sending the message `[self contents]`. PDF Kit’s annotation subclasses override this behavior as appropriate. For example, a `PDFAnnotationLink` object displays a URL or page destination for its help tag.

## See Also

### Deprecated Properties

- [mouseUpAction](mouseupaction.md): Deprecated. The action to perform when a user releases the mouse button within an annotation.

# toolTip (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Returns text for display as a help tag.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * toolTip;
```

<a id="return-value"></a>

## Return Value

A string that contains help tag content, or `NULL` if there is no text associated with the annotation.

<a id="Discussion"></a>

## Discussion

This method is equivalent to sending the message `[self contents]`. PDF Kit’s annotation subclasses override this behavior as appropriate. For example, a `PDFAnnotationLink` object displays a URL or page destination for its help tag.

## See Also

### Deprecated Properties

- [mouseUpAction](mouseupaction.md): Deprecated. The action to perform when a user releases the mouse button within an annotation.
