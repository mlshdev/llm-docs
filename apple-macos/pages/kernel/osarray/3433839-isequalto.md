> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osarray/3433839-isequalto](https://developer.apple.com/documentation/kernel/osarray/3433839-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the array with an OSObject

## Declaration

```objectivec
virtual bool isEqualTo(const OSMetaClassBase *anObject);
```

## Parameters

- `anObject`: The object to compare with.

<a id="return_value"></a>

## Return Value

true iff the object is of class OSArray and isEqualTo(const OSArray \* anArray) returns true.

<a id="discussion"></a>

## Discussion

If the object is of class OSArray, the result of isEqualTo(const OSArray \* anArray) is returned. Otherwise false is returned.

## See Also

### Comparing Arrays

- [isEqualTo](3180817-isequalto.md): Compares all members of two arrays with isEqualTo().
