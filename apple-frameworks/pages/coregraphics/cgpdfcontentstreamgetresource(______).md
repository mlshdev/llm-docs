> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfcontentstreamgetresource(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamgetresource(_:_:_:))

# CGPDFContentStreamGetResource(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the specified resource from a PDF content stream object.

## Declaration

```swift
func CGPDFContentStreamGetResource(_ cs: CGPDFContentStreamRef, _ category: UnsafePointer<CChar>, _ name: UnsafePointer<CChar>) -> CGPDFObjectRef?
```

## Parameters

- `cs`: A PDF content stream object.
- `category`: A string that specifies the category of the resource you want to obtain.
- `name`: A string that specifies the name of the resource you want to obtain.

<a id="return-value"></a>

## Return Value

The resource dictionary.

<a id="Discussion"></a>

## Discussion

You can use this function to obtain resources used by the content stream, such as forms, patterns, color spaces, and fonts.

## See Also

### Getting Data from a PDF Content Stream Object

- [CGPDFContentStreamGetStreams(\_:)](cgpdfcontentstreamgetstreams%28__%29.md): Gets the array of PDF content streams contained in a PDF content stream object.

# CGPDFContentStreamGetResource (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets the specified resource from a PDF content stream object.

## Declaration

```objectivec
extern CGPDFObjectRefCGPDFContentStreamGetResource(CGPDFContentStreamRef cs, const char *category, const char *name);
```

## Parameters

- `cs`: A PDF content stream object.
- `category`: A string that specifies the category of the resource you want to obtain.
- `name`: A string that specifies the name of the resource you want to obtain.

<a id="return-value"></a>

## Return Value

The resource dictionary.

<a id="Discussion"></a>

## Discussion

You can use this function to obtain resources used by the content stream, such as forms, patterns, color spaces, and fonts.

## See Also

### Getting Data from a PDF Content Stream Object

- [CGPDFContentStreamGetStreams](cgpdfcontentstreamgetstreams%28__%29.md): Gets the array of PDF content streams contained in a PDF content stream object.
