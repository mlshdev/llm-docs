> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3180979-withstring](https://developer.apple.com/documentation/kernel/osstring/3180979-withstring)

# withString

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSString object with a copy of an OString object.

## Declaration

```objectivec
static OSStringPtr withString(const OSString *aString);
```

```objectivec
static OSPtr<OSString> withString(const OSString *aString);
```

## Parameters

- `aString`: OSString object to copy from. The string will be copied at the time of the call.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSString object with a copy of an OString object.

## See Also

### Creating a String

- [withCString](3180977-withcstring.md): Allocates an OSString object with a copy of a c-string.
- [withCString](3433854-withcstring.md): Allocates an OSString object with a copy of a c-string, up to a given length.
- [withCStringNoCopy](3180978-withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [free](3180973-free.md)
