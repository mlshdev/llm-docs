> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3433842-getbytesnocopy](https://developer.apple.com/documentation/kernel/osdata/3433842-getbytesnocopy)

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Returns a pointer to the OSData object's internal data buffer.

## Declaration

```objectivec
const void * getBytesNoCopy(size_t start, size_t numBytes);
```

```objectivec
virtual const void * getBytesNoCopy(unsigned int start, unsigned int numBytes);
```

## Parameters

- `start`: An offset into the OSData object.
- `numBytes`: The length of data intended to be read. If (start + numBytes) exceeds the size of the OSData's length, the call will fail.

<a id="return_value"></a>

## Return Value

A pointer to the data or NULL if the OSData does not have data for all the requested range.

## See Also

### Getting Bytes

- [getBytesNoCopy](3180879-getbytesnocopy.md): Returns a pointer to the OSData object's internal data buffer.
