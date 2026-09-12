> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserialization/finalizebuffer](https://developer.apple.com/documentation/driverkit/osserialization/finalizebuffer)

# finalizeBuffer

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Obtain the result of the serialization performed by createFromObject().

## Declaration

```objectivec
const void * finalizeBuffer(size_t *length);
```

## Parameters

- `length`: The length of the serialization data.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise a pointer to the serialization data. It is valid only while the OSSerialization object is retained.

<a id="Discussion"></a>

## Discussion

Obtain the result of the serialization performed by createFromObject().

## See Also

### Getting the Serialized Content

- [copyObject](copyobject.md): Obtain the result of the deserialization performed by createFromBytes().
- [OSCreateObjectFromSerialization](../oscreateobjectfromserialization.md)
- [OSSerializationGetBytes](../osserializationgetbytes.md)
