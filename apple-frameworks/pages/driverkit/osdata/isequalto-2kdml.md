> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osdata/isequalto-2kdml

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the data with an OSData

## Declaration

```objectivec
bool isEqualTo(const OSData *aDataObj) const;
```

## Parameters

- `aDataObj`: The OSData to compare with.

<a id="return-value"></a>

## Return Value

True iff the object is of class OSArray and isEqualTo(const OSArray \* anArray) returns true.

<a id="Discussion"></a>

## Discussion

If the passed OSData object has the same length and all bytes are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](isequalto-4xz0j.md): Compares the data with an OSObject
- [isEqualTo](isequalto-5ssf5.md): Compares the data with an OSString
- [isEqualTo](isequalto-79gqy.md): Compares the data with a pointer to bytes
