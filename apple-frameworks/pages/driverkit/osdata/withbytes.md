> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdata/withbytes

# withBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSData object with a copy of bytes.

## Declaration

```objectivec
static OSDataPtr withBytes(const void *bytes, size_t numBytes);
```

## Parameters

- `bytes`: C-pointer to untyped data. The data will be copied at the time of the call.
- `numBytes`: Count of bytes to be copied.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

## See Also

### Creating a Data Object

- [withBytesNoCopy](withbytesnocopy.md): Allocates an OSData object with a copy of bytes.
- [withCapacity](withcapacity.md): Allocates an OSData object with preallocated capacity.
- [withData](withdata-9y3g.md): Allocates an OSData object with a copy of bytes from another OSData.
- [withData](withdata-4rd8n.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataCreate](../osdatacreate.md)
- [OSDataPtr](../osdataptr.md)
- [free](free.md)
