> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscannerrelease(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfscannerrelease(_:))

# CGPDFScannerRelease(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a scanner object.

## Declaration

```swift
func CGPDFScannerRelease(_ scanner: CGPDFScannerRef)
```

## Parameters

- `scanner`: The scanner object to release.

## See Also

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRetain(\_:)](cgpdfscannerretain%28__%29.md): Increments the retain count of a scanner object.

# CGPDFScannerRelease (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a scanner object.

## Declaration

```objectivec
extern void CGPDFScannerRelease(CGPDFScannerRef scanner);
```

## Parameters

- `scanner`: The scanner object to release.

## See Also

### Retaining and Releasing PDF Scanner Objects

- [CGPDFScannerRetain](cgpdfscannerretain%28__%29.md): Increments the retain count of a scanner object.
