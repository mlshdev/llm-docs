> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/descriptor

# descriptor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 11.0+

A barcode description for use in Core Image.

## Declaration

```swift
var descriptor: CIBarcodeDescriptor? { get }
```

## See Also

### Getting machine-readable code values

- [corners](corners-58qbe.md): A Swift array of corner points.
- [stringValue](stringvalue.md): Returns the error-corrected data decoded into a human-readable string.

# descriptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 11.0+

A barcode description for use in Core Image.

## Declaration

```objectivec
@property (readonly, nullable) CIBarcodeDescriptor * descriptor;
```

## See Also

### Getting machine-readable code values

- [corners](corners-8f6bv.md): The points defining the (x, y) locations of the corners.
- [stringValue](stringvalue.md): Returns the error-corrected data decoded into a human-readable string.
