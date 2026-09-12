> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/1808304-withcstringnocopy](https://developer.apple.com/documentation/kernel/osstring/1808304-withcstringnocopy)

# withCStringNoCopy

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an immutable OSString that shares the provided C string buffer.

## Declaration

```objectivec
static OSString * withCStringNoCopy(
 const char *cString); 
```

## Parameters

- `cString`: The C string to reference.

<a id="return_value"></a>

## Return Value

An instance of OSString containing `cString`, and with a reference count of 1; `NULL` on failure.

<a id="overview"></a>

## Overview

An OSString object created with this function does not claim ownership of the C string, but shares it with the caller. When the caller determines that the OSString object has actually been freed, it can safely dispose of the data buffer. Conversely, if it frees the shared data buffer, it must not attempt to use the OSString object and should release it.

An OSString object created with this function does not allow changing the string via setChar.

## See Also

### Miscellaneous

- [free](1808271-free.md): Deallocates or releases any resources used by the OSString instance.
- [getChar](1808273-getchar.md): Returns the character at a given index in the string object.
- [getCStringNoCopy](1808275-getcstringnocopy.md): Returns a pointer to the internal C string buffer.
- [getLength](1808278-getlength.md): Returns the number of characters in the OSString object.
- [initWithCString](1808281-initwithcstring.md): Initializes an OSString from a C string.
- [initWithCStringNoCopy](1808284-initwithcstringnocopy.md): Initializes an immutable OSString to share the provided C string buffer.
- [initWithString](1808286-initwithstring.md): Initializes an OSString from another OSString.
- [isEqualTo(const char \*)](1808288-isequalto.md): Tests the equality of an OSString object with a C string.
- [isEqualTo(const OSData \*)](1808292-isequalto.md): Tests the equality of an OSData object and the OSString instance.
- [isEqualTo(const OSMetaClassBase \*)](1808295-isequalto.md): Tests the equality of an OSString object to an arbitrary object.
- [isEqualTo(const OSString \*)](1808297-isequalto.md): Tests the equality of two OSString objects.
- [serialize](1808298-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setChar](1808300-setchar.md): Replaces a character at a given index in the string object.
- [withCString](1808301-withcstring.md): Creates and initializes an OSString from a C string.
- [withString](1808306-withstring.md): Creates and initializes an OSString from another OSString.
