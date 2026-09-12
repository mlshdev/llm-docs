> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserializationfreebufferhandler](https://developer.apple.com/documentation/driverkit/osserializationfreebufferhandler)

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
