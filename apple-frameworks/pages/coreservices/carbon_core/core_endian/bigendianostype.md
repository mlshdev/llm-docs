> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/carbon_core/core_endian/bigendianostype

# BigEndianOSType

**Interface language:** Objective-C

**Framework:** Core Services

Protects a big-endian OSType value from being changedby little-endian code.

## Declaration

```objectivec
// Little-endian host
struct BigEndianOSType {
   OSType    bigEndianValue;
};
typedef struct BigEndianOStype  BigEndianOStype;
   // Big-endian host
   typedef OSType BigEndianOSType;
```

## Topics

### Fields

- [bigEndianValue](bigendianostype/1805539-bigendianvalue.md): An OSType value.
