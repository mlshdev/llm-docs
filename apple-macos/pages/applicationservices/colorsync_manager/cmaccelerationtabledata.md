> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmaccelerationtabledata](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmaccelerationtabledata)

# CMAccelerationTableData

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
struct CMAccelerationTableData {
   SInt32 inputLutEntryCount;
   SInt32 inputLutWordSize;
   Handle inputLut;
   SInt32 outputLutEntryCount;
   SInt32 outputLutWordSize;
   Handle outputLut;
   SInt32 colorLutInDim;
   SInt32 colorLutOutDim;
   SInt32 colorLutGridPoints;
   SInt32 colorLutWordSize;
   Handle colorLut;
   CMBitmapColorSpace inputColorSpace;
   CMBitmapColorSpace outputColorSpace;
   void *userData;
   UInt32 reserved1;
   UInt32 reserved2;
   UInt32 reserved3;
   UInt32 reserved4;
   UInt32 reserved5;
};
typedef struct CMAccelerationTableData CMAccelerationTableData;
```
