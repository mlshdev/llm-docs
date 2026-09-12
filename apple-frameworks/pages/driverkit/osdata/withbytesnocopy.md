> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/withbytesnocopy](https://developer.apple.com/documentation/driverkit/osdata/withbytesnocopy)

# withBytesNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSData object with a copy of bytes.

## Declaration

```objectivec
static OSDataPtr withBytesNoCopy(void *bytes, size_t numBytes);
```

## Parameters

- `bytes`: C-pointer to untyped data. The data will be copied at the time of the call.
- `numBytes`: Count of bytes to be copied.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

<a id="Discussion"></a>

## Discussion

Allocates an OSData object with a copy of bytes. A synonym for OSData::withBytes() for compatibility with kernel code.

## See Also

### Creating a Data Object

- [withBytes](withbytes.md): Allocates an OSData object with a copy of bytes.
- [withCapacity](withcapacity.md): Allocates an OSData object with preallocated capacity.
- [withData](withdata-9y3g.md): Allocates an OSData object with a copy of bytes from another OSData.
- [withData](withdata-4rd8n.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataCreate](../osdatacreate.md)
- [OSDataPtr](../osdataptr.md)
- [free](free.md)
