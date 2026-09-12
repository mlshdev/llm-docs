> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmhandlelocation](https://developer.apple.com/documentation/applicationservices/cmhandlelocation)

# CMHandleLocation

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a handle specification for a profile stored in relocatable memory.

## Declaration

```objectivec
typedef struct CMHandleLocation {
    ...
} CMHandleLocation;
```

<a id="overview"></a>

## Overview

Your application uses the `CMHandleLocation` structure to provide a handle specification for a profile stored in relocatable memory. You provide the handle specification structure in the `CMProfileLocation` structure’s `u` field to specify an existing profile or a profile to be created.

## Topics

### Instance Properties

- [h](cmhandlelocation/1560567-h.md): Deprecated. A data structure of type `Handle` containing a handle that indicates the location of a profile in memory.
