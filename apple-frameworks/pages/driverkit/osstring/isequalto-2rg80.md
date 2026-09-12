> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osstring/isequalto-2rg80](https://developer.apple.com/documentation/driverkit/osstring/isequalto-2rg80)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares the string with a c-string.

## Declaration

```objectivec
bool isEqualTo(const char *cString) const;
```

## Parameters

- `cString`: The c-string to compare with.

<a id="return-value"></a>

## Return Value

True iff the two strings have the same length and characters.

<a id="Discussion"></a>

## Discussion

If the passed c-string has the same length and all characters are identical to those in the OSString, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](isequalto-1uq1f.md): Compares the string with an OSData.
- [isEqualTo](isequalto-712xj.md): Compares the string with an OSObject
- [isEqualTo](isequalto-5paj5.md): Compares the string with an OSString.
