> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osnumber/3434345-isequalto](https://developer.apple.com/documentation/kernel/osnumber/3434345-isequalto)

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

true iff the object is of class OSNumber isEqualTo() returns true.

<a id="discussion"></a>

## Discussion

If the object is of class OSNumber, the result of isEqualTo(const OSNumber \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Numbers

- [isEqualTo](3180922-isequalto.md): Compares the number with an OSNumber.
