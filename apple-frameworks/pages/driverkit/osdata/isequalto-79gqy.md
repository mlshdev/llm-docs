> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdata/isequalto-79gqy](https://developer.apple.com/documentation/driverkit/osdata/isequalto-79gqy)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the data with a pointer to bytes

## Declaration

```objectivec
bool isEqualTo(const void *bytes, size_t numBytes) const;
```

## Parameters

- `bytes`: C-pointer to untyped data.
- `numBytes`: Count of bytes to be compared.

<a id="return-value"></a>

## Return Value

True iff the length of the data are equal and all bytes are identical.

<a id="Discussion"></a>

## Discussion

If the passed data has the same length and all bytes are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](isequalto-2kdml.md): Compares the data with an OSData
- [isEqualTo](isequalto-4xz0j.md): Compares the data with an OSObject
- [isEqualTo](isequalto-5ssf5.md): Compares the data with an OSString
