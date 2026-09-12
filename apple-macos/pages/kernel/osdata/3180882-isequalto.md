> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3180882-isequalto](https://developer.apple.com/documentation/kernel/osdata/3180882-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Compares the data with an OSData

## Declaration

```objectivec
bool isEqualTo(const OSData *aDataObj);
```

```objectivec
virtual bool isEqualTo(const OSData *aDataObj);
```

## Parameters

- `aDataObj`: The OSData to compare with.

<a id="return_value"></a>

## Return Value

true iff the object is of class OSArray and isEqualTo(const OSArray \* anArray) returns true.

<a id="discussion"></a>

## Discussion

If the passed OSData object has the same length and all bytes are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](3433843-isequalto.md): Compares the data with an OSString
- [isEqualTo](3433844-isequalto.md): Compares the data with a pointer to bytes
- [isEqualTo](3433858-isequalto.md): Compares the data with an OSObject
