> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osstring/3180976-isequalto

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Compares the string with an OSString.

## Declaration

```objectivec
bool isEqualTo(const OSString *aString);
```

```objectivec
virtual bool isEqualTo(const OSString *aString);
```

## Parameters

- `aString`: The OSString to compare with.

<a id="return_value"></a>

## Return Value

true iff the two strings have the same length and characters.

<a id="discussion"></a>

## Discussion

If the passed OSString object has the same length and all characters are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](3433852-isequalto.md): Compares the string with an OSData.
- [isEqualTo](3433853-isequalto.md): Compares the string with a c-string.
- [isEqualTo](3434577-isequalto.md): Compares the string with an OSObject
