> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfscannerretain(_:)

# CGPDFScannerRetain(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a scanner object.

## Declaration

```swift
func CGPDFScannerRetain(_ scanner: CGPDFScannerRef) -> CGPDFScannerRef
```

## Parameters

- `scanner`: The scanner object to retain.

<a id="return-value"></a>

## Return Value

The same scanner object passed to the function in the `scanner` parameter.

## See Also

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRelease(\_:)](cgpdfscannerrelease%28__%29.md): Decrements the retain count of a scanner object.

# CGPDFScannerRetain (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a scanner object.

## Declaration

```objectivec
extern CGPDFScannerRefCGPDFScannerRetain(CGPDFScannerRef scanner);
```

## Parameters

- `scanner`: The scanner object to retain.

<a id="return-value"></a>

## Return Value

The same scanner object passed to the function in the `scanner` parameter.

## See Also

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRelease](cgpdfscannerrelease%28__%29.md): Decrements the retain count of a scanner object.
