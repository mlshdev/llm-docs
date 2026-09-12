> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/cchar](https://developer.apple.com/documentation/swift/cchar)

# CChar

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The C ‘char’ type.

## Declaration

```swift
typealias CChar = Int8
```

<a id="discussion"></a>

## Discussion

This will be the same as either `CSignedChar` (in the common case) or `CUnsignedChar`, depending on the platform.

## See Also

### Aliases for Imported C Types

- [CBool](cbool.md): The C ‘\_Bool’ and C++ ‘bool’ type.
- [CChar8](cchar8.md): The C++20 ‘char8_t’ type, which has UTF-8 encoding.
- [CChar16](cchar16.md): The C++11 ‘char16_t’ type, which has UTF-16 encoding.
- [CChar32](cchar32.md): The C++11 ‘char32_t’ type, which has UTF-32 encoding.
- [CDouble](cdouble.md): The C ‘double’ type.
- [CLongDouble](clongdouble.md)
- [CFloat](cfloat.md): The C ‘float’ type.
- [CFloat16](cfloat16.md): The C ‘\_Float16’ type.
- [CInt](cint.md)
- [CLong](clong.md)
- [CLongLong](clonglong.md): The C ‘long long’ type.
- [CShort](cshort.md): The C ‘short’ type.
- [CSignedChar](csignedchar.md): The C ‘signed char’ type.
- [CUnsignedChar](cunsignedchar.md): The C ‘unsigned char’ type.
- [CUnsignedInt](cunsignedint.md)
