> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsswapbigfloattohost(_:)](https://developer.apple.com/documentation/foundation/nsswapbigfloattohost(_:))

# NSSwapBigFloatToHost(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```swift
func NSSwapBigFloatToHost(_ x: NSSwappedFloat) -> Float
```

<a id="Discussion"></a>

## Discussion

Converts the big-endian value in `x` to the current endian format and returns the resulting value. If it is necessary to swap the bytes of `x`, this function calls [NSSwapFloat(\_:)](nsswapfloat%28__%29.md) to perform the swap.

## See Also

### Related Documentation

- [NSSwapHostFloatToBig(\_:)](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapLittleFloatToHost(\_:)](nsswaplittlefloattohost%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped(\_:)](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped(\_:)](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost(\_:)](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost(\_:)](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder()](nshostbyteorder%28%29.md): Returns the endian format.
- [NSSwapBigDoubleToHost(\_:)](nsswapbigdoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigIntToHost(\_:)](nsswapbiginttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongLongToHost(\_:)](nsswapbiglonglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongToHost(\_:)](nsswapbiglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigShortToHost(\_:)](nsswapbigshorttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapDouble(\_:)](nsswapdouble%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat(\_:)](nsswapfloat%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig(\_:)](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToLittle(\_:)](nsswaphostdoubletolittle%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostFloatToBig(\_:)](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.

# NSSwapBigFloatToHost (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```objectivec
static float NSSwapBigFloatToHost(NSSwappedFloat x);
```

<a id="Discussion"></a>

## Discussion

Converts the big-endian value in `x` to the current endian format and returns the resulting value. If it is necessary to swap the bytes of `x`, this function calls [NSSwapFloat](nsswapfloat%28__%29.md) to perform the swap.

## See Also

### Related Documentation

- [NSSwapHostFloatToBig](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapLittleFloatToHost](nsswaplittlefloattohost%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder](nshostbyteorder%28%29.md): Returns the endian format.
- [NSSwapBigDoubleToHost](nsswapbigdoubletohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigIntToHost](nsswapbiginttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongLongToHost](nsswapbiglonglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigLongToHost](nsswapbiglongtohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapBigShortToHost](nsswapbigshorttohost%28__%29.md): Swaps the bytes of a number.
- [NSSwapDouble](nsswapdouble%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat](nsswapfloat%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToBig](nsswaphostdoubletobig%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostDoubleToLittle](nsswaphostdoubletolittle%28__%29.md): Swaps the bytes of a number.
- [NSSwapHostFloatToBig](nsswaphostfloattobig%28__%29.md): Swaps the bytes of a number.
