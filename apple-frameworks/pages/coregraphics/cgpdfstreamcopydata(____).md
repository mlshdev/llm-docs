> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstreamcopydata(_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfstreamcopydata(_:_:))

# CGPDFStreamCopyData(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the data associated with a PDF stream.

## Declaration

```swift
func CGPDFStreamCopyData(_ stream: CGPDFStreamRef, _ format: UnsafeMutablePointer<CGPDFDataFormat>) -> CFData?
```

## Parameters

- `stream`: A PDF stream.
- `format`: On return, contains a constant that specifies the format of the data returned—[CGPDFDataFormat.raw](cgpdfdataformat/raw.md), [CGPDFDataFormat.jpegEncoded](cgpdfdataformat/jpegencoded.md), or [CGPDFDataFormat.JPEG2000](cgpdfdataformat/jpeg2000.md).

<a id="return-value"></a>

## Return Value

A CFData object that contains a copy of the stream data. You are responsible for releasing this object.

## See Also

### Getting Data from a PDF Stream

- [CGPDFStreamGetDictionary(\_:)](cgpdfstreamgetdictionary%28__%29.md): Returns the dictionary associated with a PDF stream.

# CGPDFStreamCopyData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the data associated with a PDF stream.

## Declaration

```objectivec
extern CFDataRefCGPDFStreamCopyData(CGPDFStreamRef stream, CGPDFDataFormat *format);
```

## Parameters

- `stream`: A PDF stream.
- `format`: On return, contains a constant that specifies the format of the data returned—[CGPDFDataFormatRaw](cgpdfdataformat/raw.md), [CGPDFDataFormatJPEGEncoded](cgpdfdataformat/jpegencoded.md), or [CGPDFDataFormatJPEG2000](cgpdfdataformat/jpeg2000.md).

<a id="return-value"></a>

## Return Value

A CFData object that contains a copy of the stream data. You are responsible for releasing this object.

## See Also

### Getting Data from a PDF Stream

- [CGPDFStreamGetDictionary](cgpdfstreamgetdictionary%28__%29.md): Returns the dictionary associated with a PDF stream.
