> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfcontentstreamretain(_:)

# CGPDFContentStreamRetain(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a PDF content stream object.

## Declaration

```swift
func CGPDFContentStreamRetain(_ cs: CGPDFContentStreamRef) -> CGPDFContentStreamRef
```

## Parameters

- `cs`: A PDF content stream object.

<a id="return-value"></a>

## Return Value

The same PDF content stream you passed in as the `cs` parameter.

## See Also

### Retaining and Releasing a PDF Content Stream Object

- [CGPDFContentStreamRelease(\_:)](cgpdfcontentstreamrelease%28__%29.md): Decrements the retain count of a PDF content stream object.

# CGPDFContentStreamRetain (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a PDF content stream object.

## Declaration

```objectivec
extern CGPDFContentStreamRefCGPDFContentStreamRetain(CGPDFContentStreamRef cs);
```

## Parameters

- `cs`: A PDF content stream object.

<a id="return-value"></a>

## Return Value

The same PDF content stream you passed in as the `cs` parameter.

## See Also

### Retaining and Releasing a PDF Content Stream Object

- [CGPDFContentStreamRelease](cgpdfcontentstreamrelease%28__%29.md): Decrements the retain count of a PDF content stream object.
