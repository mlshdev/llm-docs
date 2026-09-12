> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstreamgetdictionary(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfstreamgetdictionary(_:))

# CGPDFStreamGetDictionary(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary associated with a PDF stream.

## Declaration

```swift
func CGPDFStreamGetDictionary(_ stream: CGPDFStreamRef) -> CGPDFDictionaryRef?
```

## Parameters

- `stream`: A PDF stream.

<a id="return-value"></a>

## Return Value

The PDF dictionary for the specified stream.

## See Also

### Getting Data from a PDF Stream

- [CGPDFStreamCopyData(\_:\_:)](cgpdfstreamcopydata%28____%29.md): Returns the data associated with a PDF stream.

# CGPDFStreamGetDictionary (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary associated with a PDF stream.

## Declaration

```objectivec
extern CGPDFDictionaryRefCGPDFStreamGetDictionary(CGPDFStreamRef stream);
```

## Parameters

- `stream`: A PDF stream.

<a id="return-value"></a>

## Return Value

The PDF dictionary for the specified stream.

## See Also

### Getting Data from a PDF Stream

- [CGPDFStreamCopyData](cgpdfstreamcopydata%28____%29.md): Returns the data associated with a PDF stream.
