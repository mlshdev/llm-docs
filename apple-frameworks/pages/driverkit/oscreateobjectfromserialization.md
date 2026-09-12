> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/oscreateobjectfromserialization](https://developer.apple.com/documentation/driverkit/oscreateobjectfromserialization)

# OSCreateObjectFromSerialization

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
OSObjectPtrOSCreateObjectFromSerialization(OSSerializationPtr serial);
```

## See Also

### Getting the Serialized Content

- [copyObject](osserialization/copyobject.md): Obtain the result of the deserialization performed by createFromBytes().
- [OSSerializationGetBytes](osserializationgetbytes.md)
- [finalizeBuffer](osserialization/finalizebuffer.md): Obtain the result of the serialization performed by createFromObject().
