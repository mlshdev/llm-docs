> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/resourcespec](https://developer.apple.com/documentation/coreservices/resourcespec)

# ResourceSpec

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct ResourceSpec {
    ...
} ResourceSpec;
```

<a id="overview"></a>

## Overview

The  [ComponentResource](componentresource.md)  structure uses the resource specification structure, defined by the `ResourceSpec` data type, to describe the component’s code, name, information string, or icon. The resources specified by the resource specification structures must reside in the same resource file as the component resource itself.

## Topics

### Instance Properties

- [resID](resourcespec/1516457-resid.md): The ID of the resource.
- [resType](resourcespec/1516570-restype.md): The type of the resource.
