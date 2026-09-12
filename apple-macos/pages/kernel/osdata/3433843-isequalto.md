> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3433843-isequalto](https://developer.apple.com/documentation/kernel/osdata/3433843-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the data with an OSString

## Declaration

```objectivec
bool isEqualTo(const OSString *aString);
```

```objectivec
virtual bool isEqualTo(const OSString *aString);
```

## Parameters

- `aString`: The object to compare with.

<a id="return_value"></a>

## Return Value

true if the OSData and OSString contain the same c-string.

<a id="discussion"></a>

## Discussion

If the passed OSString object has the same length and all bytes are identical, true is returned. If the passed OSString object has a length one byte less than the OSData, all bytes are identical, and the last byte of the OSData is zero, true is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](3180882-isequalto.md): Compares the data with an OSData
- [isEqualTo](3433844-isequalto.md): Compares the data with a pointer to bytes
- [isEqualTo](3433858-isequalto.md): Compares the data with an OSObject
