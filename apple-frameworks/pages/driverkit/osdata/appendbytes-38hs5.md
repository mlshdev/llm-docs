> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdata/appendbytes-38hs5

# appendBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Appends a buffer of bytes to the OSData object’s internal data buffer.

## Declaration

```objectivec
bool appendBytes(const OSData *aDataObj);
```

## Parameters

- `aDataObj`: An OSData object to copy all bytes from.

<a id="return-value"></a>

## Return Value

True on success or false on failure, due to allocation failure.

## See Also

### Appending Data to the Object

- [appendBytes](appendbytes-lbqa.md): Appends a buffer of bytes to the OSData object’s internal data buffer.
- [appendBytes](appendbytes-lbqa.md): Appends a buffer of bytes to the OSData object’s internal data buffer.
- [OSDataAppendBytes](../osdataappendbytes.md)
