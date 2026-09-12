> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfcontentstreamcreatewithstream(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamcreatewithstream(_:_:_:))

# CGPDFContentStreamCreateWithStream(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF content stream object from an existing PDF content stream object.

## Declaration

```swift
func CGPDFContentStreamCreateWithStream(_ stream: CGPDFStreamRef, _ streamResources: CGPDFDictionaryRef, _ parent: CGPDFContentStreamRef) -> CGPDFContentStreamRef
```

## Parameters

- `stream`: The PDF stream you want to create a content stream from.
- `streamResources`: A PDF dictionary that contains the resources associated with the stream you want to retrieve.
- `parent`: The content stream of the page on which `stream` appears. Supply the `parent` parameter when you create a content stream that’s used within a page.

<a id="return-value"></a>

## Return Value

A PDF content stream object created from the `stream` parameter. In Objective-C, you’re responsible for releasing this object by calling the [CGPDFContentStreamRelease(\_:)](cgpdfcontentstreamrelease%28__%29.md) function.

<a id="Discussion"></a>

## Discussion

You can use this function to get access to the contents of a form, pattern, Type3 font, or any PDF stream.

## See Also

### Creating a PDF Content Stream Object

- [CGPDFContentStreamCreateWithPage(\_:)](cgpdfcontentstreamcreatewithpage%28__%29.md): Creates a content stream object from a PDF page object.

# CGPDFContentStreamCreateWithStream (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF content stream object from an existing PDF content stream object.

## Declaration

```objectivec
extern CGPDFContentStreamRefCGPDFContentStreamCreateWithStream(CGPDFStreamRef stream, CGPDFDictionaryRef streamResources, CGPDFContentStreamRef parent);
```

## Parameters

- `stream`: The PDF stream you want to create a content stream from.
- `streamResources`: A PDF dictionary that contains the resources associated with the stream you want to retrieve.
- `parent`: The content stream of the page on which `stream` appears. Supply the `parent` parameter when you create a content stream that’s used within a page.

<a id="return-value"></a>

## Return Value

A PDF content stream object created from the `stream` parameter. In Objective-C, you’re responsible for releasing this object by calling the [CGPDFContentStreamRelease](cgpdfcontentstreamrelease%28__%29.md) function.

<a id="Discussion"></a>

## Discussion

You can use this function to get access to the contents of a form, pattern, Type3 font, or any PDF stream.

## See Also

### Creating a PDF Content Stream Object

- [CGPDFContentStreamCreateWithPage](cgpdfcontentstreamcreatewithpage%28__%29.md): Creates a content stream object from a PDF page object.
