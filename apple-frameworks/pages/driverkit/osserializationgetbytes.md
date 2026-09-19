> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osserializationgetbytes

# OSSerializationGetBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
const void *OSSerializationGetBytes(OSSerializationPtr serial, size_t *length);
```

## See Also

### Getting the Serialized Content

- [copyObject](osserialization/copyobject.md): Obtain the result of the deserialization performed by createFromBytes().
- [OSCreateObjectFromSerialization](oscreateobjectfromserialization.md)
- [finalizeBuffer](osserialization/finalizebuffer.md): Obtain the result of the serialization performed by createFromObject().
