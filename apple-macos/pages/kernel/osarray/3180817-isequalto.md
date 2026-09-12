> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3180817-isequalto](https://developer.apple.com/documentation/kernel/osarray/3180817-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Compares all members of two arrays with isEqualTo().

## Declaration

```objectivec
bool isEqualTo(const OSArray *anArray);
```

```objectivec
virtual bool isEqualTo(const OSArray *anArray);
```

## Parameters

- `anArray`: The other array to compare with.

<a id="return_value"></a>

## Return Value

true if both arrays have equal counts and all members compare successfully with isEqualTo.

<a id="discussion"></a>

## Discussion

If the arrays have equal counts, each member is compared with the other at the same index with isEqualTo(). Otherwise false is returned.

## See Also

### Comparing Arrays

- [isEqualTo](3433839-isequalto.md): Compares the array with an OSObject
