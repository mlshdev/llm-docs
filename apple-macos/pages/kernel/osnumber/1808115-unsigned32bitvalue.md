> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osnumber/1808115-unsigned32bitvalue](https://developer.apple.com/documentation/kernel/osnumber/1808115-unsigned32bitvalue)

# unsigned32BitValue

**Interface language:** Objective-C

**Framework:** Kernel

Returns the OSNumber object's integer value cast as an unsigned 32-bit integer.

## Declaration

```objectivec
virtual unsigned int unsigned32BitValue() const; 
```

<a id="return_value"></a>

## Return Value

Returns the OSNumber object's integer value cast as an unsigned 32-bit integer.

<a id="overview"></a>

## Overview

This function merely casts the internal integer value, giving no indication of truncation or other potential conversion problems.

## See Also

### Miscellaneous

- [addValue](1808041-addvalue.md): Adds a signed integer value to the internal integer value of the OSNumber object.
- [free](1808049-free.md): Deallocates or releases any resources used by the OSNumber instance.
- [init(const char \*, unsigned int)](1808057-init.md): Initializes an instance of OSNumber with an unsigned integer value represented as a C string.
- [init(unsigned long long, unsigned int)](1808065-init.md): Initializes an instance of OSNumber with an integer value.
- [isEqualTo(const OSMetaClassBase \*)](1808071-isequalto.md): Tests the equality an OSNumber to an arbitrary object.
- [isEqualTo(const OSNumber \*)](1808076-isequalto.md): Tests the equality of two OSNumber objects.
- [numberOfBits](1808083-numberofbits.md): Returns the number of bits used to represent the OSNumber object's integer value.
- [numberOfBytes](1808091-numberofbytes.md): Returns the number of bytes used to represent the OSNumber object's integer value.
- [serialize](1808097-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setValue](1808102-setvalue.md): Replaces the current internal integer value of the OSNumber object by the value given.
- [unsigned16BitValue](1808108-unsigned16bitvalue.md): Returns the OSNumber object's integer value cast as an unsigned 16-bit integer.
- [unsigned64BitValue](1808123-unsigned64bitvalue.md): Returns the OSNumber object's integer value cast as an unsigned 64-bit integer.
- [unsigned8BitValue](1808129-unsigned8bitvalue.md): Returns the OSNumber object's integer value cast as an unsigned 8-bit integer.
- [withNumber(const char \*, unsigned int)](1808136-withnumber.md): Creates and initializes an instance of OSNumber with an unsigned integer value represented as a C string.
- [withNumber(unsigned long long, unsigned int)](1808143-withnumber.md): Creates and initializes an instance of OSNumber with an integer value.
