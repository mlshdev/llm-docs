> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3180886-withdata](https://developer.apple.com/documentation/kernel/osdata/3180886-withdata)

# withData

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSData object with a copy of bytes from another OSData.

## Declaration

```objectivec
static OSDataPtr withData(const OSData *inData);
```

```objectivec
static OSPtr<OSData> withData(const OSData *inData);
```

## Parameters

- `inData`: An OSData object to copy. The data will be copied at the time of the call.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

## See Also

### Creating a Data Object

- [withBytes](https://developer.apple.com/documentation/driverkit/osdata/withbytes): Allocates an OSData object with a copy of bytes.
- [withBytesNoCopy](https://developer.apple.com/documentation/driverkit/osdata/withbytesnocopy): Allocates an OSData object with a copy of bytes.
- [withCapacity](3180885-withcapacity.md): Allocates an OSData object with preallocated capacity.
- [withData](3433845-withdata.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataPtr](https://developer.apple.com/documentation/driverkit/osdataptr)
- [free](3180878-free.md)
