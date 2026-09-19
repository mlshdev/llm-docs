> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osstringcreate

# OSStringCreate

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
OSStringPtrOSStringCreate(const char *cstring, size_t length);
```

## See Also

### Creating a String

- [withString](osstring/withstring.md): Allocates an OSString object with a copy of an OString object.
- [withCString](osstring/withcstring-4wsql.md): Allocates an OSString object with a copy of a c-string.
- [withCString](osstring/withcstring-721oh.md): Allocates an OSString object with a copy of a c-string, up to a given length.
- [withCStringNoCopy](osstring/withcstringnocopy.md): Allocates an OSString object with a copy of a c-string.
- [free](osstring/free.md)
