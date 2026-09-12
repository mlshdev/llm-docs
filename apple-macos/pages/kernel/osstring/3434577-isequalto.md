> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3434577-isequalto](https://developer.apple.com/documentation/kernel/osstring/3434577-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the string with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The object to compare with.

<a id="return_value"></a>

## Return Value

true iff the object is of class OSData or OSString and isEqualTo() returns true.

<a id="discussion"></a>

## Discussion

If the object is of class OSString, the result of isEqualTo(const OSString \* aDataObj) is returned. If the object is of class OSData, the result of isEqualTo(const OSData \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Strings

- [isEqualTo](3180976-isequalto.md): Compares the string with an OSString.
- [isEqualTo](3433852-isequalto.md): Compares the string with an OSData.
- [isEqualTo](3433853-isequalto.md): Compares the string with a c-string.
