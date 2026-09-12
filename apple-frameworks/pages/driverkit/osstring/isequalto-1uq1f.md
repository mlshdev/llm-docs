> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/isequalto-1uq1f](https://developer.apple.com/documentation/driverkit/osstring/isequalto-1uq1f)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the string with an OSData.

## Declaration

```objectivec
bool isEqualTo(const OSData *aDataObject) const;
```

## Parameters

- `aDataObject`: The OSData to compare with.

<a id="return-value"></a>

## Return Value

True if the OSData and OSString contain the same c-string.

<a id="Discussion"></a>

## Discussion

If the passed OSData object has the same length and all bytes are identical, true is returned. If the passed OSData object has a length one byte greater than the OSString, all bytes are identical, and the last byte of the OSData is zero, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](isequalto-712xj.md): Compares the string with an OSObject
- [isEqualTo](isequalto-5paj5.md): Compares the string with an OSString.
- [isEqualTo](isequalto-2rg80.md): Compares the string with a c-string.
