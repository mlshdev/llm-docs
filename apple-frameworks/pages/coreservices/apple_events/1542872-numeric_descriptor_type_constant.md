> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1542872-numeric_descriptor_type_constant](https://developer.apple.com/documentation/coreservices/apple_events/1542872-numeric_descriptor_type_constant)

# Numeric Descriptor Type Constants

**Framework:** Core Services

Specify types for numeric descriptors.

<a id="overview"></a>

## Overview

The constants described here specify the data type for a descriptor and show the kind of numeric data stored in a descriptor with that type. These constants are preferred over their older equivalents described in `typeSMInt`.

Descriptors are the building blocks used by the Apple Event Manager to construct Apple event attributes and parameters. A descriptor is a data structure of type [AEDesc](../aedesc.md), which consists of data storage and a descriptor type that identifies the type of the data. A descriptor type is defined by the data type [DescType](../desctype.md). 

AppleScript defines descriptor type constants for a wide variety of common data types. For additional types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md) and [Other Descriptor Type Constants](1542760-other_descriptor_type_constants.md). For a complete listing, including data types such as units of length, weight, and volume, see the Apple Event Manager and Open Scripting Architecture header files.

## Topics

### Constants

- [typeSInt16](../typesint16.md): 16-bit signed integer.
- [typeUInt16](../typeuint16.md): 16-bit unsigned integer.
- [typeSInt32](../typesint32.md): 32-bit signed integer.
- [typeUInt32](../typeuint32.md): 32-bit unsigned integer.
- [typeSInt64](../typesint64.md): 64-bit signed integer.
- [typeUInt64](../typeuint64.md): 64-bit unsigned integer.
- [typeIEEE32BitFloatingPoint](../typeieee32bitfloatingpoint.md): 32-bit floating point value.
- [typeIEEE64BitFloatingPoint](../typeieee64bitfloatingpoint.md): 64-bit floating point value.
- [type128BitFloatingPoint](../type128bitfloatingpoint.md): 128-bit floating point value.
- [typeDecimalStruct](../typedecimalstruct.md): Decimal.
