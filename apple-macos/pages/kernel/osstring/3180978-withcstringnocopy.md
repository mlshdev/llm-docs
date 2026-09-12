> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3180978-withcstringnocopy](https://developer.apple.com/documentation/kernel/osstring/3180978-withcstringnocopy)

# withCStringNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSString object with a copy of a c-string.

## Declaration

```objectivec
static OSStringPtr withCStringNoCopy(const char *cString);
```

```objectivec
static OSPtr<OSString> withCStringNoCopy(const char *cString);
```

## Parameters

- `cString`: Pointer to null terminated c-string. The string will be copied at the time of the call.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSString object with a copy of a c-string. A synonym for OSString::withCString() for compatibility with kernel code.

## See Also

### Creating a String

- [withCString](3180977-withcstring.md): Allocates an OSString object with a copy of a c-string.
- [withCString](3433854-withcstring.md): Allocates an OSString object with a copy of a c-string, up to a given length.
- [withString](3180979-withstring.md): Allocates an OSString object with a copy of an OString object.
- [free](3180973-free.md)
