> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3433853-isequalto](https://developer.apple.com/documentation/kernel/osstring/3433853-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the string with a c-string.

## Declaration

```objectivec
bool isEqualTo(const char *cString);
```

```objectivec
virtual bool isEqualTo(const char *cString);
```

## Parameters

- `cString`: The c-string to compare with.

<a id="return_value"></a>

## Return Value

true iff the two strings have the same length and characters.

<a id="discussion"></a>

## Discussion

If the passed c-string has the same length and all characters are identical to those in the OSString, true is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](3180976-isequalto.md): Compares the string with an OSString.
- [isEqualTo](3433852-isequalto.md): Compares the string with an OSData.
- [isEqualTo](3434577-isequalto.md): Compares the string with an OSObject
