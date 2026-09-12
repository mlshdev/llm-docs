> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/withdata-4rd8n](https://developer.apple.com/documentation/driverkit/osdata/withdata-4rd8n)

# withData

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSData object with a copy of bytes from a subset of another OSData.

## Declaration

```objectivec
static OSDataPtr withData(const OSData *inData, size_t start, size_t numBytes);
```

## Parameters

- `inData`: An OSData object to copy. The data will be copied at the time of the call.
- `start`: An offset into the OSData object to copy from.
- `numBytes`: The length of data to copy. If (start + numBytes) exceeds the length of inData, the call will fail.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

## See Also

### Creating a Data Object

- [withBytes](withbytes.md): Allocates an OSData object with a copy of bytes.
- [withBytesNoCopy](withbytesnocopy.md): Allocates an OSData object with a copy of bytes.
- [withCapacity](withcapacity.md): Allocates an OSData object with preallocated capacity.
- [withData](withdata-9y3g.md): Allocates an OSData object with a copy of bytes from another OSData.
- [OSDataCreate](../osdatacreate.md)
- [OSDataPtr](../osdataptr.md)
- [free](free.md)
