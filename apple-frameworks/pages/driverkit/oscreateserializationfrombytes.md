> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/oscreateserializationfrombytes

# OSCreateSerializationFromBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
OSSerializationPtrOSCreateSerializationFromBytes(const void *bytes, size_t length, OSSerializationFreeBufferHandler freeBuffer);
```

## See Also

### Creating a Serialization Object

- [OSCreateSerializationFromObject](oscreateserializationfromobject.md)
- [free](osserialization/free.md)
- [OSSerializationFreeBufferHandler](osserializationfreebufferhandler.md)
- [OSSerializationPtr](osserializationptr.md)
