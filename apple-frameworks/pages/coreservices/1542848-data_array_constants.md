> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542848-data_array_constants](https://developer.apple.com/documentation/coreservices/1542848-data_array_constants)

# Data Array Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify an array type for storing or extracting descriptor lists with the `AEPutArray` and `AEGetArray` functions.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEDataArray](1542848-data_array_constants/kaedataarray.md): Array items consist of data of the same size and same type, and are aligned on word boundaries.
- [kAEPackedArray](1542848-data_array_constants/kaepackedarray.md): Array items consist of data of the same size and same type, and are packed without regard for word boundaries.
- [kAEDescArray](1542848-data_array_constants/kaedescarray.md): Array items consist of descriptors of different descriptor types with data of variable size.
- [kAEKeyDescArray](1542848-data_array_constants/kaekeydescarray.md): Array items consist of keyword-specified descriptors with different keywords, different descriptor types, and data of variable size.
