> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osdictionary/isequalto-2p9or](https://developer.apple.com/documentation/driverkit/osdictionary/isequalto-2p9or)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Compares certain members of two dictionaries with isEqualTo().

## Declaration

```objectivec
bool isEqualTo(const OSDictionary *aDictionary, const OSCollection *keys) const;
```

## Parameters

- `aDictionary`: The other dictionary to compare with.
- `keys`: The collection of keys to compare.

<a id="return-value"></a>

## Return Value

True if both dictionaries have equal counts, every key exists in both, values for each key compare true with isEqualTo().

<a id="Discussion"></a>

## Discussion

For each key in the given collection, both dictionaries must contain values for the key that compare successfully with isEqualTo().

## See Also

### Comparing Dictionaries

- [isEqualTo](isequalto-3c1k0.md): Compares all members of two dictionaries with isEqualTo().
- [isEqualTo](isequalto-3kuk7.md): Compares the dictionary with an OSObject
