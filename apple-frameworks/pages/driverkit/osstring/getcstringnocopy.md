> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osstring/getcstringnocopy

# getCStringNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns a pointer to the OSString object’s internal data buffer.

## Declaration

```objectivec
const char * getCStringNoCopy() const;
```

<a id="return-value"></a>

## Return Value

A pointer to the string or NULL if the OSString has zero length. The string will be null terminated.

## See Also

### Getting a C String

- [OSStringGetStringPtr](../osstringgetstringptr.md)
- [OSStringPtr](../osstringptr.md)
