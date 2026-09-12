> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/oscreateserializationfrombytes](https://developer.apple.com/documentation/driverkit/oscreateserializationfrombytes)

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
