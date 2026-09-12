> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3433848-isequalto](https://developer.apple.com/documentation/kernel/osdictionary/3433848-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the dictionary with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The object to compare with.

<a id="return_value"></a>

## Return Value

true iff the object is of class OSDictionary and isEqualTo(const OSDictionary \* anArray) returns true.

<a id="discussion"></a>

## Discussion

If the object is of class OSDictionary, the result of isEqualTo(const OSDictionary \* anArray) is returned. Otherwise false is returned.

## See Also

### Comparing Dictionaries

- [isEqualTo](3180902-isequalto.md): Compares certain members of two dictionaries with isEqualTo().
- [isEqualTo](3433847-isequalto.md): Compares all members of two dictionaries with isEqualTo().
