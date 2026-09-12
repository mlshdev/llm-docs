> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3433844-isequalto](https://developer.apple.com/documentation/kernel/osdata/3433844-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Compares the data with a pointer to bytes

## Declaration

```objectivec
bool isEqualTo(const void *bytes, size_t numBytes);
```

```objectivec
virtual bool isEqualTo(const void *bytes, unsigned int numBytes);
```

## Parameters

- `bytes`: C-pointer to untyped data.
- `numBytes`: Count of bytes to be compared.

<a id="return_value"></a>

## Return Value

true iff the length of the data are equal and all bytes are identical.

<a id="discussion"></a>

## Discussion

If the passed data has the same length and all bytes are identical, true is returned. Otherwise false is returned.

## See Also

### Comparing Data Objects

- [isEqualTo](3180882-isequalto.md): Compares the data with an OSData
- [isEqualTo](3433843-isequalto.md): Compares the data with an OSString
- [isEqualTo](3433858-isequalto.md): Compares the data with an OSObject
