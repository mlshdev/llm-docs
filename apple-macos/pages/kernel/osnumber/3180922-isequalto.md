> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osnumber/3180922-isequalto](https://developer.apple.com/documentation/kernel/osnumber/3180922-isequalto)

# isEqualTo

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Compares the number with an OSNumber.

## Declaration

```objectivec
bool isEqualTo(const OSNumber *aNumber);
```

```objectivec
virtual bool isEqualTo(const OSNumber *aNumber);
```

## Parameters

- `aNumber`: The OSNumber to compare with.

<a id="return_value"></a>

## Return Value

true iff the two numbers have the same value.

<a id="discussion"></a>

## Discussion

If the passed OSNumber object has the same value, regardless of size, true is returned. Otherwise false is returned.

## See Also

### Comparing Numbers

- [isEqualTo](3434345-isequalto.md): Compares the string with an OSObject
