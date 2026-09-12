> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vuint8](https://developer.apple.com/documentation/accelerate/vuint8)

# vUInt8 (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 128-bit vector packed with `unsigned char` values.

## Declaration

```swift
typealias vUInt8 = SIMD16<UInt8>
```

## See Also

### vecLibTypes

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

# vUInt8 (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 128-bit vector packed with `unsigned char` values.

## Declaration

```objectivec
typedef __attribute__((__vector_size__(16 * sizeof(unsigned char)))) unsigned char vUInt8;
```

## See Also

### vecLibTypes

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
