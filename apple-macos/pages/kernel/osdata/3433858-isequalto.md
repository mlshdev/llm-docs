> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3433858-isequalto](https://developer.apple.com/documentation/kernel/osdata/3433858-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the data with an OSObject

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

If the object is of class OSData, the result of isEqualTo(const OSData \* aDataObj) is returned. If the object is of class OSString, the result of OSString::isEqualTo(const OSData \* aDataObj) is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](3180882-isequalto.md): Compares the data with an OSData
- [isEqualTo](3433843-isequalto.md): Compares the data with an OSString
- [isEqualTo](3433844-isequalto.md): Compares the data with a pointer to bytes
