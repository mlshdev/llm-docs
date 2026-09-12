> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserialization/createfrombytes-8jjh8](https://developer.apple.com/documentation/driverkit/osserialization/createfrombytes-8jjh8)

# createFromBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSerializationPtr createFromBytes(const void *bytes, size_t length, OSSerializationFreeBufferHandler freeBuffer, OSSerializationPortCopyInHandler copyInHandler);
```

## Parameters

- `bytes`: The serialized data from a previous call to OSSerialization::finalizeBuffer().
- `length`: The length of the serialized data from a previous call to OSSerialization::finalizeBuffer().
- `freeBuffer`: A required block to be called when the OSSerialization is freed and the serialized data will no longer be accessed. Note that unserialized objects may retain the OSSerialization they were created from, so the OSSerialization will retain the data until they have been freed.
- `copyInHandler`: An optional handler that allows a port number to be replaced with an OSObject instance during unserialization

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSSerialization with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSSerialization object from the serialized data of a previous serialization.

Allocates an OSSerialization object from the serialized data of a previous serialization.
