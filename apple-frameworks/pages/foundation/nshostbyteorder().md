> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshostbyteorder()](https://developer.apple.com/documentation/foundation/nshostbyteorder())

# NSHostByteOrder() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the endian format.

## Declaration

```swift
func NSHostByteOrder() -> Int
```

<a id="return-value"></a>

## Return Value

The endian format, either [NS_LittleEndian](ns_littleendian.md) or [NS_BigEndian](ns_bigendian.md).

## See Also

### Functions

- [NSConvertHostDoubleToSwapped(\_:)](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped(\_:)](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost(\_:)](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost(\_:)](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSSwapBigDoubleToHost(\_:)](nsswapbigdoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigFloatToHost(\_:)](nsswapbigfloattohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigIntToHost(\_:)](nsswapbiginttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongLongToHost(\_:)](nsswapbiglonglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongToHost(\_:)](nsswapbiglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigShortToHost(\_:)](nsswapbigshorttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapDouble(\_:)](nsswapdouble%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat(\_:)](nsswapfloat%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig(\_:)](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToLittle(\_:)](nsswaphostdoubletolittle%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostFloatToBig(\_:)](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.

# NSHostByteOrder (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the endian format.

## Declaration

```objectivec
static long NSHostByteOrder();
```

<a id="return-value"></a>

## Return Value

The endian format, either [NS_LittleEndian](ns_littleendian.md) or [NS_BigEndian](ns_bigendian.md).

## See Also

### Functions

- [NSConvertHostDoubleToSwapped](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSSwapBigDoubleToHost](nsswapbigdoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigFloatToHost](nsswapbigfloattohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigIntToHost](nsswapbiginttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongLongToHost](nsswapbiglonglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongToHost](nsswapbiglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigShortToHost](nsswapbigshorttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapDouble](nsswapdouble%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat](nsswapfloat%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToLittle](nsswaphostdoubletolittle%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostFloatToBig](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.
