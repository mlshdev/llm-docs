> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3433854-withcstring](https://developer.apple.com/documentation/kernel/osstring/3433854-withcstring)

# withCString

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 12.0+

Allocates an OSString object with a copy of a c-string, up to a given length.

## Declaration

```objectivec
static OSStringPtr withCString(const char *cString, size_t length);
```

```objectivec
static OSPtr<OSString> withCString(const char *cString, size_t length);
```

## Parameters

- `cString`: Pointer to null terminated c-string. The string will be copied at the time of the call.
- `length`: Maximum length of the string to copy.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

## See Also

### Creating a String

- [withCString](3180977-withcstring.md): Allocates an OSString object with a copy of a c-string.
- [withCStringNoCopy](3180978-withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [withString](3180979-withstring.md): Allocates an OSString object with a copy of an OString object.
- [free](3180973-free.md)
