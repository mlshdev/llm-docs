> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserialization/copyobject](https://developer.apple.com/documentation/driverkit/osserialization/copyobject)

# copyObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Obtain the result of the deserialization performed by createFromBytes().

## Declaration

```objectivec
OSObjectPtr copyObject();
```

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSObject with reference count 1 to be released by the caller.

<a id="Discussion"></a>

## Discussion

Obtain the result of the deserialization performed by createFromBytes().

## See Also

### Getting the Serialized Content

- [OSCreateObjectFromSerialization](../oscreateobjectfromserialization.md)
- [OSSerializationGetBytes](../osserializationgetbytes.md)
- [finalizeBuffer](finalizebuffer.md): Obtain the result of the serialization performed by createFromObject().
