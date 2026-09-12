> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/1808281-initwithcstring](https://developer.apple.com/documentation/kernel/osstring/1808281-initwithcstring)

# initWithCString

**Interface language:** Objective-C

**Framework:** Kernel

Initializes an OSString from a C string.

## Declaration

```objectivec
virtual bool initWithCString(
 const char *cString); 
```

## Parameters

- `cString`: The C string to copy into the new OSString.

<a id="return_value"></a>

## Return Value

`true` on success, `false` on failure.

<a id="overview"></a>

## Overview

Not for general use. Use the static instance creation method withCString instead.

## See Also

### Miscellaneous

- [free](1808271-free.md): Deallocates or releases any resources used by the OSString instance.
- [getChar](1808273-getchar.md): Returns the character at a given index in the string object.
- [getCStringNoCopy](1808275-getcstringnocopy.md): Returns a pointer to the internal C string buffer.
- [getLength](1808278-getlength.md): Returns the number of characters in the OSString object.
- [initWithCStringNoCopy](1808284-initwithcstringnocopy.md): Initializes an immutable OSString to share the provided C string buffer.
- [initWithString](1808286-initwithstring.md): Initializes an OSString from another OSString.
- [isEqualTo(const char \*)](1808288-isequalto.md): Tests the equality of an OSString object with a C string.
- [isEqualTo(const OSData \*)](1808292-isequalto.md): Tests the equality of an OSData object and the OSString instance.
- [isEqualTo(const OSMetaClassBase \*)](1808295-isequalto.md): Tests the equality of an OSString object to an arbitrary object.
- [isEqualTo(const OSString \*)](1808297-isequalto.md): Tests the equality of two OSString objects.
- [serialize](1808298-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setChar](1808300-setchar.md): Replaces a character at a given index in the string object.
- [withCString](1808301-withcstring.md): Creates and initializes an OSString from a C string.
- [withCStringNoCopy](1808304-withcstringnocopy.md): Creates and initializes an immutable OSString that shares the provided C string buffer.
- [withString](1808306-withstring.md): Creates and initializes an OSString from another OSString.
