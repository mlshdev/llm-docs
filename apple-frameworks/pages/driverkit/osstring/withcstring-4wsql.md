> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/withcstring-4wsql](https://developer.apple.com/documentation/driverkit/osstring/withcstring-4wsql)

# withCString

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSString object with a copy of a c-string.

## Declaration

```objectivec
static OSStringPtr withCString(const char *cString);
```

## Parameters

- `cString`: Pointer to null terminated c-string. The string will be copied at the time of the call.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

## See Also

### Creating a String

- [withString](withstring.md): Allocates an OSString object with a copy of an OString object.
- [withCString](withcstring-721oh.md): Allocates an OSString object with a copy of a c-string, up to a given length.
- [withCStringNoCopy](withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [OSStringCreate](../osstringcreate.md)
- [free](free.md)
