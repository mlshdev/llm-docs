> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfcontentstreamgetstreams(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamgetstreams(_:))

# CGPDFContentStreamGetStreams(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the array of PDF content streams contained in a PDF content stream object.

## Declaration

```swift
func CGPDFContentStreamGetStreams(_ cs: CGPDFContentStreamRef) -> CFArray?
```

## Parameters

- `cs`: A PDF content stream object.

<a id="return-value"></a>

## Return Value

The array of PDF content streams that make up the content stream object represented by the `cs` parameter.

## See Also

### Getting Data from a PDF Content Stream Object

- [CGPDFContentStreamGetResource(\_:\_:\_:)](cgpdfcontentstreamgetresource%28______%29.md): Gets the specified resource from a PDF content stream object.

# CGPDFContentStreamGetStreams (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the array of PDF content streams contained in a PDF content stream object.

## Declaration

```objectivec
extern CFArrayRefCGPDFContentStreamGetStreams(CGPDFContentStreamRef cs);
```

## Parameters

- `cs`: A PDF content stream object.

<a id="return-value"></a>

## Return Value

The array of PDF content streams that make up the content stream object represented by the `cs` parameter.

## See Also

### Getting Data from a PDF Content Stream Object

- [CGPDFContentStreamGetResource](cgpdfcontentstreamgetresource%28______%29.md): Gets the specified resource from a PDF content stream object.
