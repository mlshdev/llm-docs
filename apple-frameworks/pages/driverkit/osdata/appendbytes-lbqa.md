> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/appendbytes-lbqa](https://developer.apple.com/documentation/driverkit/osdata/appendbytes-lbqa)

# appendBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Appends a buffer of bytes to the OSData object’s internal data buffer.

## Declaration

```objectivec
bool appendBytes(const void *bytes, size_t numBytes);
```

## Parameters

- `bytes`: C-pointer to untyped data. The data will be copied at the time of the call.
- `numBytes`: Count of bytes to be copied.

<a id="return-value"></a>

## Return Value

True on success or false on failure, due to allocation failure.

## See Also

### Appending Data to the Object

- [appendBytes](appendbytes-38hs5.md): Appends a buffer of bytes to the OSData object’s internal data buffer.
- [OSDataAppendBytes](../osdataappendbytes.md)
