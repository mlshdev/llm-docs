> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/slasq3_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/slasq3_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# slasq3\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func slasq3_(_ i0: UnsafePointer<__LAPACK_int>, _ n0: UnsafeMutablePointer<__LAPACK_int>, _ z: UnsafeMutablePointer<Float>?, _ pp: UnsafeMutablePointer<__LAPACK_int>, _ dmin: UnsafeMutablePointer<Float>, _ sigma: UnsafeMutablePointer<Float>, _ desig: UnsafeMutablePointer<Float>, _ qmax: UnsafeMutablePointer<Float>, _ nfail: UnsafeMutablePointer<__LAPACK_int>, _ iter: UnsafeMutablePointer<__LAPACK_int>, _ ndiv: UnsafeMutablePointer<__LAPACK_int>, _ ieee: UnsafePointer<__LAPACK_bool>, _ ttype: UnsafeMutablePointer<__LAPACK_int>, _ dmin1: UnsafeMutablePointer<Float>, _ dmin2: UnsafeMutablePointer<Float>, _ dn: UnsafeMutablePointer<Float>, _ dn1: UnsafeMutablePointer<Float>, _ dn2: UnsafeMutablePointer<Float>, _ g: UnsafeMutablePointer<Float>, _ tau: UnsafeMutablePointer<Float>)
```

## See Also

### Functions

- [caxpy\_(\_:\_:\_:\_:\_:\_:)](caxpy_%28____________%29.md)
- [ccopy\_(\_:\_:\_:\_:\_:)](ccopy_%28__________%29.md)
- [cdotc\_(\_:\_:\_:\_:\_:\_:)](cdotc_%28____________%29.md)
- [cdotu\_(\_:\_:\_:\_:\_:\_:)](cdotu_%28____________%29.md)
- [cgbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgbmv_%28__________________________%29.md)
- [cgemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemm_%28__________________________%29.md)
- [cgemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgemv_%28______________________%29.md)
- [cgerc\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgerc_%28__________________%29.md)
- [cgeru\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeru_%28__________________%29.md)
- [chbmv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chbmv_%28______________________%29.md)
- [chemm\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemm_%28________________________%29.md)
- [chemv\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](chemv_%28____________________%29.md)
- [cher2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2_%28__________________%29.md)
- [cher2k\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cher2k_%28________________________%29.md)
- [cher\_(\_:\_:\_:\_:\_:\_:\_:)](cher_%28______________%29.md)

# slasq3\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void slasq3_(const __LAPACK_int *i0, __LAPACK_int *n0, float *z, __LAPACK_int *pp, float *dmin, float *sigma, float *desig, float *qmax, __LAPACK_int *nfail, __LAPACK_int *iter, __LAPACK_int *ndiv, const __LAPACK_bool *ieee, __LAPACK_int *ttype, float *dmin1, float *dmin2, float *dn, float *dn1, float *dn2, float *g, float *tau);
```

## See Also

### Functions

- [caxpy\_](caxpy_%28____________%29.md)
- [ccopy\_](ccopy_%28__________%29.md)
- [cdotc\_](cdotc_%28____________%29.md)
- [cdotu\_](cdotu_%28____________%29.md)
- [cgbmv\_](cgbmv_%28__________________________%29.md)
- [cgemm\_](cgemm_%28__________________________%29.md)
- [cgemv\_](cgemv_%28______________________%29.md)
- [cgerc\_](cgerc_%28__________________%29.md)
- [cgeru\_](cgeru_%28__________________%29.md)
- [chbmv\_](chbmv_%28______________________%29.md)
- [chemm\_](chemm_%28________________________%29.md)
- [chemv\_](chemv_%28____________________%29.md)
- [cher2\_](cher2_%28__________________%29.md)
- [cher2k\_](cher2k_%28________________________%29.md)
- [cher\_](cher_%28______________%29.md)
