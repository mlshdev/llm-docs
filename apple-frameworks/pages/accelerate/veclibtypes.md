> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/veclibtypes](https://developer.apple.com/documentation/accelerate/veclibtypes)

# vecLibTypes

**Interface languages:** Swift, Objective-C

**Framework:** Accelerate  
**Kind:** API Collection

Create and work with 128-bit vector data types.

<a id="overview"></a>

## Overview

The vecLibTypes.h header file defines a set of vector data types (`vFloat`, `vUInt32`, etc.), which represent 128-bit vectors containing values of type `float`, `UInt32`, etc. The vBasicOps.h and vfp.h headers make use of these types.

The type names all begin with the letter “v,” followed by a mnemonic for the scalar data type used for elements of the vector. For example, `vUInt32`, `vSInt16`, `vFloat`, etc.

## Topics

### Type Aliases

- [la_attribute_t](la_attribute_t.md)
- [la_count_t](la_count_t.md)
- [la_deallocator_t](la_deallocator_t.md)
- [la_hint_t](la_hint_t.md)
- [la_index_t](la_index_t.md)
- [la_norm_t](la_norm_t.md)
- [la_object_t](la_object_t.md)
- [la_scalar_type_t](la_scalar_type_t.md)
- [la_status_t](la_status_t.md)
- [OS_la_object](os_la_object.md)

### vecLibTypes

- [vUInt8](vuint8.md): A 128-bit vector packed with `unsigned char` values.
- [vSInt8](vsint8.md): A 128-bit vector packed with `signed char` values.
- [vUInt16](vuint16.md): A 128-bit vector packed with `unsigned short` values.
- [vSInt16](vsint16.md): A 128-bit vector packed with `signed short` values.
- [vUInt32](vuint32.md): A 128-bit vector packed with `unsigned int` values.
- [vSInt32](vsint32.md): A 128-bit vector packed with `signed int` values.
- [vUInt64](vuint64.md): A 128-bit vector packed with `uint64_t` values.
- [vSInt64](vsint64.md): A 128-bit vector packed with `int64_t` values.
- [vFloat](vfloat.md): A 128-bit vector packed with `float` values.
- [vDouble](vdouble.md): A 128-bit vector packed with `double` values.
- [vBool32](vbool32.md): A 128-bit vector packed with `bool int` values.
