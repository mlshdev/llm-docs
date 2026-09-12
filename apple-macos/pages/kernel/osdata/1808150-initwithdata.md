> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/1808150-initwithdata](https://developer.apple.com/documentation/kernel/osdata/1808150-initwithdata)

# initWithData(const OSData \*, unsigned int, unsigned int)

**Interface language:** Objective-C

**Framework:** Kernel

Initializes an instance of OSData with contents copied from a range within another OSData object.

## Declaration

```objectivec
virtual bool initWithData( 
 const OSData *inData, 
 unsigned intstart, 
 unsigned intnumBytes); 
```

## Parameters

- `inData`: An OSData object that provides the initial data.
- `start`: The starting index from which bytes will be copied.
- `numBytes`: The number of bytes to be copied from `start`.

<a id="return_value"></a>

## Return Value

Returns `true` on success, `false` on failure.

<a id="overview"></a>

## Overview

Not for general use. Use the static instance creation method withData(OSData \*, unsigned int, unsigned int) instead.

The new OSData object will grow as needed to accommodate more bytes (*unlike*[CFMutableData](https://developer.apple.com/documentation/corefoundation/cfmutabledata), for which a nonzero initial capacity is a hard limit).

## See Also

### Miscellaneous

- [appendByte](1808052-appendbyte.md): Appends a single byte value to the OSData object's internal data buffer a specified number of times.
- [appendBytes(const OSData \*)](1808058-appendbytes.md): Appends the data contained in another OSData object.
- [appendBytes(const void \*, unsigned int)](1808067-appendbytes.md): Appends a buffer of bytes to the OSData object's internal data buffer.
- [ensureCapacity](1808072-ensurecapacity.md): Ensures the array has enough space to store the requested number of bytes.
- [free](1808080-free.md): Deallocates or releases any resources used by the OSDictionary instance.
- [getBytesNoCopy()](1808085-getbytesnocopy.md): Returns a pointer to the OSData object's internal data buffer.
- [getBytesNoCopy(unsigned int, unsigned int)](1808094-getbytesnocopy.md): Returns a pointer into the OSData object's internal data buffer with a given offset and length.
- [getCapacity](1808100-getcapacity.md): Returns the total number of bytes the OSData can store without reallocating.
- [getCapacityIncrement](1808106-getcapacityincrement.md): Returns the storage increment of the OSData object.
- [getLength](1808111-getlength.md): Returns the number of bytes in or referenced by the OSData object.
- [initWithBytes](1808118-initwithbytes.md): Initializes an instance of OSData with a copy of the provided data buffer.
- [initWithBytesNoCopy](1808127-initwithbytesnocopy.md): Initializes an instance of OSData to share the provided data buffer.
- [initWithCapacity](1808134-initwithcapacity.md): Initializes an instance of OSData.
- [initWithData(const OSData \*)](1808141-initwithdata.md): Creates and initializes an instance of OSData with contents copied from another OSData object.
- [isEqualTo(const OSData \*)](1808160-isequalto.md): Tests the equality of two OSData objects.
- [isEqualTo(const OSMetaClassBase \*)](1808165-isequalto.md): Tests the equality of an OSData object to an arbitrary object.
- [isEqualTo(const OSString \*)](1808172-isequalto.md): Tests the equality of an OSData object to an OSString.
- [isEqualTo(const void \*, unsigned int)](1808178-isequalto.md): Tests the equality of an OSData object's contents to a C array of bytes.
- [serialize](1808185-serialize.md): Archives the receiver into the provided OSSerialize object.
- [setCapacityIncrement](1808190-setcapacityincrement.md): Sets the storage increment of the array.
- [withBytes](1808195-withbytes.md): Creates and initializes an instance of OSData with a copy of the provided data buffer.
- [withBytesNoCopy](1808197-withbytesnocopy.md): Creates and initializes an instance of OSData that shares the provided data buffer.
- [withCapacity](1808204-withcapacity.md): Creates and initializes an empty instance of OSData.
- [withData(const OSData \*)](1808208-withdata.md): Creates and initializes an instance of OSData with contents copied from another OSData object.
- [withData(const OSData \*, unsigned int, unsigned int)](1808211-withdata.md): Creates and initializes an instance of OSData with contents copied from a range within another OSData object.
