> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/withcapacity](https://developer.apple.com/documentation/driverkit/osdata/withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSData object with preallocated capacity.

## Declaration

```objectivec
static OSDataPtr withCapacity(uint32_t capacity);
```

## Parameters

- `capacity`: Number of bytes of data the object can hold.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

<a id="Discussion"></a>

## Discussion

Allocates an OSData object with preallocated capacity. The OSData will have zero length until data is added to it with appendBytes().

## See Also

### Creating a Data Object

- [withBytes](withbytes.md): Allocates an OSData object with a copy of bytes.
- [withBytesNoCopy](withbytesnocopy.md): Allocates an OSData object with a copy of bytes.
- [withData](withdata-9y3g.md): Allocates an OSData object with a copy of bytes from another OSData.
- [withData](withdata-4rd8n.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataCreate](../osdatacreate.md)
- [OSDataPtr](../osdataptr.md)
- [free](free.md)
