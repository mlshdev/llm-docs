> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmps2crdvmsizetype](https://developer.apple.com/documentation/applicationservices/cmps2crdvmsizetype)

# CMPS2CRDVMSizeType

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Defines the Apple-defined `'psvm'` optional tag.

## Declaration

```objectivec
typedef struct CMPS2CRDVMSizeType {
    ...
} CMPS2CRDVMSizeType;
```

## Topics

### Instance Properties

- [count](cmps2crdvmsizetype/1560398-count.md): Deprecated. The number of entries in the `intentCRD` array. You should specify at least four entries: 0, 1, 2, and 3.
- [intentCRD](cmps2crdvmsizetype/1560725-intentcrd.md): Deprecated. A variable-sized array of four or more members defined by the `CMIntentCRDSize` data type.
- [reserved](cmps2crdvmsizetype/1560735-reserved.md): Deprecated. Reserved for future use.
- [typeDescriptor](cmps2crdvmsizetype/1560713-typedescriptor.md): Deprecated. The `'psvm'` tag signature.
