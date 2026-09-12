> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/getbytesnocopy-91vcg](https://developer.apple.com/documentation/driverkit/osdata/getbytesnocopy-91vcg)

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a pointer to the OSData object’s internal data buffer.

## Declaration

```objectivec
const void * getBytesNoCopy() const;
```

<a id="return-value"></a>

## Return Value

A pointer to the data or NULL if the OSData has zero length.

## See Also

### Getting Bytes

- [getBytesNoCopy](getbytesnocopy-53puz.md): Returns a pointer to the OSData object’s internal data buffer.
- [OSDataGetBytes](../osdatagetbytes.md)
- [OSDataGetBytesPtr](../osdatagetbytesptr.md)
