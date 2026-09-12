> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vuint64](https://developer.apple.com/documentation/accelerate/vuint64)

# vUInt64 (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 128-bit vector packed with `uint64_t` values.

## Declaration

```swift
typealias vUInt64 = SIMD2<UInt64>
```

## See Also

### vecLibTypes

- [vUInt8](vuint8.md): A 128-bit vector packed with `unsigned char` values.
- [vSInt8](vsint8.md): A 128-bit vector packed with `signed char` values.
- [vUInt16](vuint16.md): A 128-bit vector packed with `unsigned short` values.
- [vSInt16](vsint16.md): A 128-bit vector packed with `signed short` values.
- [vUInt32](vuint32.md): A 128-bit vector packed with `unsigned int` values.
- [vSInt32](vsint32.md): A 128-bit vector packed with `signed int` values.
- [vSInt64](vsint64.md): A 128-bit vector packed with `int64_t` values.
- [vFloat](vfloat.md): A 128-bit vector packed with `float` values.
- [vDouble](vdouble.md): A 128-bit vector packed with `double` values.
- [vBool32](vbool32.md): A 128-bit vector packed with `bool int` values.

# vUInt64 (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A 128-bit vector packed with `uint64_t` values.

## Declaration

```objectivec
typedef __attribute__((__vector_size__(2 * sizeof(unsigned long long)))) unsigned long long vUInt64;
```

## See Also

### vecLibTypes

- [vUInt8](vuint8.md): A 128-bit vector packed with `unsigned char` values.
- [vSInt8](vsint8.md): A 128-bit vector packed with `signed char` values.
- [vUInt16](vuint16.md): A 128-bit vector packed with `unsigned short` values.
- [vSInt16](vsint16.md): A 128-bit vector packed with `signed short` values.
- [vUInt32](vuint32.md): A 128-bit vector packed with `unsigned int` values.
- [vSInt32](vsint32.md): A 128-bit vector packed with `signed int` values.
- [vSInt64](vsint64.md): A 128-bit vector packed with `int64_t` values.
- [vFloat](vfloat.md): A 128-bit vector packed with `float` values.
- [vDouble](vdouble.md): A 128-bit vector packed with `double` values.
- [vBool32](vbool32.md): A 128-bit vector packed with `bool int` values.
