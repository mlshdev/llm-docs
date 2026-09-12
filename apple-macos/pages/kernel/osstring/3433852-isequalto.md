> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3433852-isequalto](https://developer.apple.com/documentation/kernel/osstring/3433852-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the string with an OSData.

## Declaration

```objectivec
bool isEqualTo(const OSData *aDataObject);
```

```objectivec
virtual bool isEqualTo(const OSData *aDataObject);
```

## Parameters

- `aDataObject`: The OSData to compare with.

<a id="return_value"></a>

## Return Value

true if the OSData and OSString contain the same c-string.

<a id="discussion"></a>

## Discussion

If the passed OSData object has the same length and all bytes are identical, true is returned. If the passed OSData object has a length one byte greater than the OSString, all bytes are identical, and the last byte of the OSData is zero, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](3180976-isequalto.md): Compares the string with an OSString.
- [isEqualTo](3433853-isequalto.md): Compares the string with a c-string.
- [isEqualTo](3434577-isequalto.md): Compares the string with an OSObject
