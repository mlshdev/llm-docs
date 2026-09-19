> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osserialization/createfrombytes-9lb79

# createFromBytes

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSerializationPtr createFromBytes(const void *bytes, size_t length, OSSerializationFreeBufferHandler freeBuffer);
```

<a id="discussion"></a>

## Discussion

Similar to the above variant, except assuming copyInHandler to be NULL.
