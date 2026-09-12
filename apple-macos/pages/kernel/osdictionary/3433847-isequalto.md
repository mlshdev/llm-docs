> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3433847-isequalto](https://developer.apple.com/documentation/kernel/osdictionary/3433847-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares all members of two dictionaries with isEqualTo().

## Declaration

```objectivec
bool isEqualTo(const OSDictionary *aDictionary);
```

```objectivec
virtual bool isEqualTo(const OSDictionary *aDictionary);
```

## Parameters

- `aDictionary`: The other dictionary to compare with.

<a id="return_value"></a>

## Return Value

true if both dictionaries have equal counts, every key exists in both, values for each key compare true with isEqualTo().

<a id="discussion"></a>

## Discussion

If the dictionaries have equal counts, each member is compared with the other at the same index with isEqualTo(). Otherwise false is returned.

## See Also

### Comparing Dictionaries

- [isEqualTo](3180902-isequalto.md): Compares certain members of two dictionaries with isEqualTo().
- [isEqualTo](3433848-isequalto.md): Compares the dictionary with an OSObject
