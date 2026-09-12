> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/oscollectionflags](https://developer.apple.com/documentation/kernel/oscollection/oscollectionflags)

# \_OSCollectionFlags

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef enum {
   kImmutable = 0x00000001,
   kSort = 0x00000002,
   kMASK = (
   unsigned) -1
} _OSCollectionFlags;
```

<a id="overview"></a>

## Overview

Used with setOptions to indicate the collection's contents should or should not change.

An IORegistryEntry object marks collections immutable when set as properties of a registry entry that's attached to a plane. This is generally an advisory flag, used for debugging; setting it does not mean a collection will in fact disallow modifications.

## Topics

### Constants

- [kImmutable](oscollectionflags/kimmutable.md)
