> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3180885-withcapacity](https://developer.apple.com/documentation/kernel/osdata/3180885-withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Allocates an OSData object with preallocated capacity.

## Declaration

```objectivec
static OSDataPtr withCapacity(uint32_t capacity);
```

```objectivec
static OSPtr<OSData> withCapacity(unsigned int capacity);
```

## Parameters

- `capacity`: Number of bytes of data the object can hold.

<a id="return_value"></a>

## Return Value

NULL on failure, otherwise the allocated OSData with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSData object with preallocated capacity. The OSData will have zero length until data is added to it with appendBytes().

## See Also

### Creating a Data Object

- [withBytes](https://developer.apple.com/documentation/driverkit/osdata/withbytes): Allocates an OSData object with a copy of bytes.
- [withBytesNoCopy](https://developer.apple.com/documentation/driverkit/osdata/withbytesnocopy): Allocates an OSData object with a copy of bytes.
- [withData](3180886-withdata.md): Allocates an OSData object with a copy of bytes from another OSData.
- [withData](3433845-withdata.md): Allocates an OSData object with a copy of bytes from a subset of another OSData.
- [OSDataPtr](https://developer.apple.com/documentation/driverkit/osdataptr)
- [free](3180878-free.md)
