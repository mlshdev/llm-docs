> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdatagetbytes

# OSDataGetBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
size_t OSDataGetBytes(OSDataPtr obj, void *buffer, size_t offset, size_t length);
```

## See Also

### Getting Bytes

- [getBytesNoCopy](osdata/getbytesnocopy-91vcg.md): Returns a pointer to the OSData object’s internal data buffer.
- [getBytesNoCopy](osdata/getbytesnocopy-53puz.md): Returns a pointer to the OSData object’s internal data buffer.
- [OSDataGetBytesPtr](osdatagetbytesptr.md)
