> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmaccelerationcalcdata

# CMAccelerationCalcData

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
struct CMAccelerationCalcData {
   SInt32 pixelCount;
   Ptr inputData;
   Ptr outputData;
   UInt32 reserved1;
   UInt32 reserved2;
};
typedef struct CMAccelerationCalcData CMAccelerationCalcData;
```
