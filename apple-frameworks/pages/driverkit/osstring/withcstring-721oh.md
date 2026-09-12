> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/withcstring-721oh](https://developer.apple.com/documentation/driverkit/osstring/withcstring-721oh)

# withCString

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSString object with a copy of a c-string, up to a given length.

## Declaration

```objectivec
static OSStringPtr withCString(const char *cString, size_t length);
```

## Parameters

- `cString`: Pointer to null terminated c-string. The string will be copied at the time of the call.
- `length`: Maximum length of the string to copy.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

## See Also

### Creating a String

- [withString](withstring.md): Allocates an OSString object with a copy of an OString object.
- [withCString](withcstring-4wsql.md): Allocates an OSString object with a copy of a c-string.
- [withCStringNoCopy](withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [OSStringCreate](../osstringcreate.md)
- [free](free.md)
