> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfcontentstreamcreatewithpage(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamcreatewithpage(_:))

# CGPDFContentStreamCreateWithPage(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a content stream object from a PDF page object.

## Declaration

```swift
func CGPDFContentStreamCreateWithPage(_ page: CGPDFPage) -> CGPDFContentStreamRef
```

## Parameters

- `page`: A PDF page object.

<a id="return-value"></a>

## Return Value

A new [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object. In Objective-C, you’re responsible for releasing this object by calling the [CGPDFContentStreamRelease(\_:)](cgpdfcontentstreamrelease%28__%29.md) function.

<a id="Discussion"></a>

## Discussion

A [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object can contain more than one PDF content stream. To retrieve an array of the PDF content streams in the object, call the function [CGPDFContentStreamGetStreams(\_:)](cgpdfcontentstreamgetstreams%28__%29.md). To obtain the resources associated with a [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object, call the function [CGPDFContentStreamGetResource(\_:\_:\_:)](cgpdfcontentstreamgetresource%28______%29.md).

## See Also

### Creating a PDF Content Stream Object

- [CGPDFContentStreamCreateWithStream(\_:\_:\_:)](cgpdfcontentstreamcreatewithstream%28______%29.md): Creates a PDF content stream object from an existing PDF content stream object.

# CGPDFContentStreamCreateWithPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a content stream object from a PDF page object.

## Declaration

```objectivec
extern CGPDFContentStreamRefCGPDFContentStreamCreateWithPage(CGPDFPageRef page);
```

## Parameters

- `page`: A PDF page object.

<a id="return-value"></a>

## Return Value

A new [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object. In Objective-C, you’re responsible for releasing this object by calling the [CGPDFContentStreamRelease](cgpdfcontentstreamrelease%28__%29.md) function.

<a id="Discussion"></a>

## Discussion

A [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object can contain more than one PDF content stream. To retrieve an array of the PDF content streams in the object, call the function [CGPDFContentStreamGetStreams](cgpdfcontentstreamgetstreams%28__%29.md). To obtain the resources associated with a [CGPDFContentStreamRef](cgpdfcontentstreamref.md) object, call the function [CGPDFContentStreamGetResource](cgpdfcontentstreamgetresource%28______%29.md).

## See Also

### Creating a PDF Content Stream Object

- [CGPDFContentStreamCreateWithStream](cgpdfcontentstreamcreatewithstream%28______%29.md): Creates a PDF content stream object from an existing PDF content stream object.
