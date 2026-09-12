> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsswapbigdoubletohost(_:)](https://developer.apple.com/documentation/foundation/nsswapbigdoubletohost(_:))

# NSSwapBigDoubleToHost(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```swift
func NSSwapBigDoubleToHost(_ x: NSSwappedDouble) -> Double
```

<a id="Discussion"></a>

## Discussion

Converts the big-endian value in `x` to the current endian format and returns the resulting value. If it is necessary to swap the bytes of `x`, this function calls [NSSwapDouble(\_:)](nsswapdouble%28__%29.md) to perform the swap.

## See Also

### Related Documentation

- [NSSwapLittleDoubleToHost(\_:)](nsswaplittledoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig(\_:)](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped(\_:)](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped(\_:)](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost(\_:)](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost(\_:)](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder()](nshostbyteorder%28%29.md): Returns the endian format.
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

# NSSwapBigDoubleToHost (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```objectivec
static double NSSwapBigDoubleToHost(NSSwappedDouble x);
```

<a id="Discussion"></a>

## Discussion

Converts the big-endian value in `x` to the current endian format and returns the resulting value. If it is necessary to swap the bytes of `x`, this function calls [NSSwapDouble](nsswapdouble%28__%29.md) to perform the swap.

## See Also

### Related Documentation

- [NSSwapLittleDoubleToHost](nsswaplittledoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder](nshostbyteorder%28%29.md): Returns the endian format.
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
