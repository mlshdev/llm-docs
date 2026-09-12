> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/getbytesnocopy-53puz](https://developer.apple.com/documentation/driverkit/osdata/getbytesnocopy-53puz)

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a pointer to the OSData object’s internal data buffer.

## Declaration

```objectivec
const void * getBytesNoCopy(size_t start, size_t numBytes) const;
```

## Parameters

- `start`: An offset into the OSData object.
- `numBytes`: The length of data intended to be read. If (start + numBytes) exceeds the size of the OSData’s length, the call will fail.

<a id="return-value"></a>

## Return Value

A pointer to the data or NULL if the OSData does not have data for all the requested range.

## See Also

### Getting Bytes

- [getBytesNoCopy](getbytesnocopy-91vcg.md): Returns a pointer to the OSData object’s internal data buffer.
- [OSDataGetBytes](../osdatagetbytes.md)
- [OSDataGetBytesPtr](../osdatagetbytesptr.md)
