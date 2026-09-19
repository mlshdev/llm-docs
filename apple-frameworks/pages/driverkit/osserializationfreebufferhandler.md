> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osserializationfreebufferhandler

# OSSerializationFreeBufferHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef void (^)(const void *, unsigned long) OSSerializationFreeBufferHandler;
```

## See Also

### Creating a Serialization Object

- [OSCreateSerializationFromBytes](oscreateserializationfrombytes.md)
- [OSCreateSerializationFromObject](oscreateserializationfromobject.md)
- [free](osserialization/free.md)
- [OSSerializationPtr](osserializationptr.md)
