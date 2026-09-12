> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osarray/isequalto-5w7om](https://developer.apple.com/documentation/driverkit/osarray/isequalto-5w7om)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares all members of two arrays with isEqualTo().

## Declaration

```objectivec
bool isEqualTo(const OSArray *anArray) const;
```

## Parameters

- `anArray`: The other array to compare with.

<a id="return-value"></a>

## Return Value

True if both arrays have equal counts and all members compare successfully with isEqualTo.

<a id="Discussion"></a>

## Discussion

If the arrays have equal counts, each member is compared with the other at the same index with isEqualTo(). Otherwise false is returned.

## See Also

### Comparing Arrays

- [isEqualTo](isequalto-93qxy.md): Compares the array with an OSObject
