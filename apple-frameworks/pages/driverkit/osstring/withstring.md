> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/withstring](https://developer.apple.com/documentation/driverkit/osstring/withstring)

# withString

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSString object with a copy of an OString object.

## Declaration

```objectivec
static OSStringPtr withString(const OSString *aString);
```

## Parameters

- `aString`: OSString object to copy from. The string will be copied at the time of the call.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSString with reference count 1 to be released by the caller.

<a id="Discussion"></a>

## Discussion

Allocates an OSString object with a copy of an OString object.

## See Also

### Creating a String

- [withCString](withcstring-4wsql.md): Allocates an OSString object with a copy of a c-string.
- [withCString](withcstring-721oh.md): Allocates an OSString object with a copy of a c-string, up to a given length.
- [withCStringNoCopy](withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [OSStringCreate](../osstringcreate.md)
- [free](free.md)
