> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsswaplong(_:)](https://developer.apple.com/documentation/foundation/nsswaplong(_:))

# NSSwapLong(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```swift
func NSSwapLong(_ inv: UInt) -> UInt
```

<a id="Discussion"></a>

## Discussion

Swaps the bytes of `inv` and returns the resulting value. Bytes are swapped from each low-order position to the corresponding high-order position and vice versa. For example, if the bytes of `inv` are numbered from 1 to 4, this function swaps bytes 1 and 4, and bytes 2 and 3.

## See Also

### Related Documentation

- [NSSwapInt(\_:)](nsswapint%28__%29.md): Swaps the bytes of a number.
- [NSSwapLongLong(\_:)](nsswaplonglong%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat(\_:)](nsswapfloat%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped(\_:)](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped(\_:)](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost(\_:)](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost(\_:)](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder()](nshostbyteorder%28%29.md): Returns the endian format.
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

# NSSwapLong (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Swaps the bytes of a number.

## Declaration

```objectivec
static unsigned long NSSwapLong(unsigned long inv);
```

<a id="Discussion"></a>

## Discussion

Swaps the bytes of `inv` and returns the resulting value. Bytes are swapped from each low-order position to the corresponding high-order position and vice versa. For example, if the bytes of `inv` are numbered from 1 to 4, this function swaps bytes 1 and 4, and bytes 2 and 3.

## See Also

### Related Documentation

- [NSSwapInt](nsswapint%28__%29.md): Swaps the bytes of a number.
- [NSSwapLongLong](nsswaplonglong%28__%29.md): Swaps the bytes of a number.
- [NSSwapFloat](nsswapfloat%28__%29.md): Swaps the bytes of a number.

### Functions

- [NSConvertHostDoubleToSwapped](nsconverthostdoubletoswapped%28__%29.md): Performs a type conversion.
- [NSConvertHostFloatToSwapped](nsconverthostfloattoswapped%28__%29.md): Performs a type conversion.
- [NSConvertSwappedDoubleToHost](nsconvertswappeddoubletohost%28__%29.md): Performs a type conversion.
- [NSConvertSwappedFloatToHost](nsconvertswappedfloattohost%28__%29.md): Performs a type conversion.
- [NSHostByteOrder](nshostbyteorder%28%29.md): Returns the endian format.
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
