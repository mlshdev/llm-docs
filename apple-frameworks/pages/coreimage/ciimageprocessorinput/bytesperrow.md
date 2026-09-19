> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/bytesperrow

# bytesPerRow (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The bytes per row of the CPU memory that your Core Image Processor Kernel can read pixelsfrom.

## Declaration

```swift
var bytesPerRow: Int { get }
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the input image that your Core Image Processor Kernel can use to provide the output.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can read pixels from.

# bytesPerRow (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The bytes per row of the CPU memory that your Core Image Processor Kernel can read pixelsfrom.

## Declaration

```objectivec
@property (nonatomic, readonly) size_t bytesPerRow;
```

## See Also

### Getting Supplemental Information for Image Processing

- [region](region.md): The rectangular region of the input image that your Core Image Processor Kernel can use to provide the output.
- [format](format.md): The pixel format of the CPU memory that your Core Image Processor Kernel can read pixels from.
