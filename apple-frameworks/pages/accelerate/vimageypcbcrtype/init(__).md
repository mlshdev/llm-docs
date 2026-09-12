> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageypcbcrtype/init(_:)](https://developer.apple.com/documentation/accelerate/vimageypcbcrtype/init(_:))

# init(\_:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new YpCbCr type.

## Declaration

```swift
init(_ rawValue: UInt32)
```

## Parameters

- `rawValue`: A raw unsigned-integer value.

## See Also

### Constants

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new YpCbCr type with an unsigned integer value.
- [rawValue](rawvalue.md): The unsigned integer raw value.
- [kvImage420Yp8_Cb8_Cr8](../kvimage420yp8_cb8_cr8.md): Any y420 or f420 (planar component Y’CbCr 8-bit 4:2:0) buffer.
- [kvImage420Yp8_CbCr8](../kvimage420yp8_cbcr8.md): Any 420v or 420f (biplanar component Y’CbCr 8-bit 4:2:0, video-range) buffer.
- [kvImage422CbYpCrYp16](../kvimage422cbypcryp16.md): Any v216 (component Y’CbCr 10,12,14,16-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8](../kvimage422cbypcryp8.md): Any 2vuy (component Y’CbCr 8-bit 4:2:2) buffer.
- [kvImage422CbYpCrYp8_AA8](../kvimage422cbypcryp8_aa8.md): Any a2vy (first plane: video-range component Y’CbCr 8-bit 4:2:2, ordered Cb Y’0 Cr Y’1; second plane: alpha 8-bit) buffer.
- [kvImage422CrYpCbYpCbYpCbYpCrYpCrYp10](../kvimage422crypcbypcbypcbypcrypcryp10.md): Any v210 (component Y’CbCr 10-bit 4:2:2) buffer.
- [kvImage422YpCbYpCr8](../kvimage422ypcbypcr8.md): Any yuvs or yuvf (component Y’CbCr 8-bit 4:2:2, ordered Y’0 Cb Y’1 Cr) buffer.
- [kvImage444AYpCbCr16](../kvimage444aypcbcr16.md): Any y416 (component Y’CbCrA 16-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444AYpCbCr8](../kvimage444aypcbcr8.md): Any r408 or y408 (component Y’CbCrA 8-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr) buffer.
- [kvImage444CbYpCrA8](../kvimage444cbypcra8.md): Any v408 (component Y’CbCrA 8-bit 4:4:4:4) buffer.
- [kvImage444CrYpCb10](../kvimage444crypcb10.md): Any v410 (component Y’CbCr 10-bit 4:4:4) buffer.
- [kvImage444CrYpCb8](../kvimage444crypcb8.md): Any v308 (component Y’CbCr 8-bit 4:4:4) buffer.
