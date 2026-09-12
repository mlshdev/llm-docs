> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/isequalto-5paj5](https://developer.apple.com/documentation/driverkit/osstring/isequalto-5paj5)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the string with an OSString.

## Declaration

```objectivec
bool isEqualTo(const OSString *aString) const;
```

## Parameters

- `aString`: The OSString to compare with.

<a id="return-value"></a>

## Return Value

True iff the two strings have the same length and characters.

<a id="Discussion"></a>

## Discussion

If the passed OSString object has the same length and all characters are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](isequalto-1uq1f.md): Compares the string with an OSData.
- [isEqualTo](isequalto-712xj.md): Compares the string with an OSObject
- [isEqualTo](isequalto-2rg80.md): Compares the string with a c-string.
