> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamrelease(_:)

# CGPDFContentStreamRelease(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a PDF content stream object.

## Declaration

```swift
func CGPDFContentStreamRelease(_ cs: CGPDFContentStreamRef)
```

## Parameters

- `cs`: A PDF content stream.

## See Also

### Retaining and Releasing a PDF Content Stream Object

- [CGPDFContentStreamRetain(\_:)](cgpdfcontentstreamretain%28__%29.md): Increments the retain count of a PDF content stream object.

# CGPDFContentStreamRelease (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a PDF content stream object.

## Declaration

```objectivec
extern void CGPDFContentStreamRelease(CGPDFContentStreamRef cs);
```

## Parameters

- `cs`: A PDF content stream.

## See Also

### Retaining and Releasing a PDF Content Stream Object

- [CGPDFContentStreamRetain](cgpdfcontentstreamretain%28__%29.md): Increments the retain count of a PDF content stream object.
