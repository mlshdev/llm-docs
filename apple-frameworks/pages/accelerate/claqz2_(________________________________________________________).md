> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/claqz2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/claqz2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# claqz2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func claqz2_(_ ilschur: UnsafePointer<__LAPACK_bool>, _ ilq: UnsafePointer<__LAPACK_bool>, _ ilz: UnsafePointer<__LAPACK_bool>, _ n: UnsafePointer<__LAPACK_int>, _ ilo: UnsafePointer<__LAPACK_int>, _ ihi: UnsafePointer<__LAPACK_int>, _ nw: UnsafePointer<__LAPACK_int>, _ a: OpaquePointer?, _ lda: UnsafePointer<__LAPACK_int>, _ b: OpaquePointer?, _ ldb: UnsafePointer<__LAPACK_int>, _ q: OpaquePointer?, _ ldq: UnsafePointer<__LAPACK_int>, _ z: OpaquePointer?, _ ldz: UnsafePointer<__LAPACK_int>, _ ns: UnsafeMutablePointer<__LAPACK_int>, _ nd: UnsafeMutablePointer<__LAPACK_int>, _ alpha: OpaquePointer?, _ beta: OpaquePointer?, _ qc: OpaquePointer?, _ ldqc: UnsafePointer<__LAPACK_int>, _ zc: OpaquePointer?, _ ldzc: UnsafePointer<__LAPACK_int>, _ work: OpaquePointer, _ lwork: UnsafePointer<__LAPACK_int>, _ rwork: UnsafeMutablePointer<Float>?, _ rec: UnsafePointer<__LAPACK_int>, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# claqz2\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
void claqz2_(const __LAPACK_bool *ilschur, const __LAPACK_bool *ilq, const __LAPACK_bool *ilz, const __LAPACK_int *n, const __LAPACK_int *ilo, const __LAPACK_int *ihi, const __LAPACK_int *nw, __LAPACK_float_complex *a, const __LAPACK_int *lda, __LAPACK_float_complex *b, const __LAPACK_int *ldb, __LAPACK_float_complex *q, const __LAPACK_int *ldq, __LAPACK_float_complex *z, const __LAPACK_int *ldz, __LAPACK_int *ns, __LAPACK_int *nd, __LAPACK_float_complex *alpha, __LAPACK_float_complex *beta, __LAPACK_float_complex *qc, const __LAPACK_int *ldqc, __LAPACK_float_complex *zc, const __LAPACK_int *ldzc, __LAPACK_float_complex *work, const __LAPACK_int *lwork, float *rwork, const __LAPACK_int *rec, __LAPACK_int *info);
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
