> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1542760-other_descriptor_type_constants](https://developer.apple.com/documentation/coreservices/apple_events/1542760-other_descriptor_type_constants)

# Other Descriptor Type Constants

**Framework:** Core Services

Specify types for Boolean and character descriptors.

<a id="overview"></a>

## Overview

The constants described here specify the data type for a descriptor and show the kind of data stored in a descriptor with that type.

Descriptors are the building blocks used by the Apple Event Manager to construct Apple event attributes and parameters. A descriptor is a data structure of type [AEDesc](../aedesc.md), which consists of data storage and a descriptor type that identifies the type of the data. A descriptor type is defined by the data type [DescType](../desctype.md). 

AppleScript defines descriptor type constants for a wide variety of common data types. For additional types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md) and [Numeric Descriptor Type Constants](1542872-numeric_descriptor_type_constant.md). For a complete listing, including data types such as units of length, weight, and volume, see the Apple Event Manager and Open Scripting Architecture header files.

<a id="1770287"></a>

### Version-Notes

In macOS `typeChar` type is deprecated in favor of `typeUTF8Text` or `typeUTF16ExternalRepresentation`. For more information, see [typeUTF16ExternalRepresentation](https://developer.apple.com/documentation/coreservices/typeutf16externalrepresentation).

## Topics

### Constants

- [typeBoolean](../typeboolean.md): Boolean value—single byte with value 0 or 1.
- [typeChar](../typechar.md)
