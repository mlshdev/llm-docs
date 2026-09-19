> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdatacreate

# OSDataCreate

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
OSDataPtrOSDataCreate(const void *bytes, size_t length);
```

## See Also

### Creating a Data Object

- [withBytes](osdata/withbytes.md): Allocates an OSData object with a copy of bytes.
- [withBytesNoCopy](osdata/withbytesnocopy.md): Allocates an OSData object with a copy of bytes.
- [withCapacity](osdata/withcapacity.md): Allocates an OSData object with preallocated capacity.
- [withData](osdata/withdata-9y3g.md): Allocates an OSData object with a copy of bytes from another OSData.
- [withData](osdata/withdata-4rd8n.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataPtr](osdataptr.md)
- [free](osdata/free.md)
