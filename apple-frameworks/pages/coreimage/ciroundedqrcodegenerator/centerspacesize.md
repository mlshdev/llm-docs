> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciroundedqrcodegenerator/centerspacesize

# centerSpaceSize (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The fraction of the center space of the QRCode to fill with Color 1. If the size is 0.0 or the Correction Level is L or M, the center of the QRCode will be unaltered. The size will be limited to 0.25 if the Correction Level is Q. The size will be limited to 0.33 if the Correction Level is H.

## Declaration

```swift
var centerSpaceSize: Float { get set }
```

# centerSpaceSize (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The fraction of the center space of the QRCode to fill with Color 1. If the size is 0.0 or the Correction Level is L or M, the center of the QRCode will be unaltered. The size will be limited to 0.25 if the Correction Level is Q. The size will be limited to 0.33 if the Correction Level is H.

## Declaration

```objectivec
@property (nonatomic) float centerSpaceSize;
```
