> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/zbbcsd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/zbbcsd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# zbbcsd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func zbbcsd_(_ jobu1: UnsafePointer<CChar>, _ jobu2: UnsafePointer<CChar>, _ jobv1t: UnsafePointer<CChar>, _ jobv2t: UnsafePointer<CChar>, _ trans: UnsafePointer<CChar>, _ m: UnsafePointer<__LAPACK_int>, _ p: UnsafePointer<__LAPACK_int>, _ q: UnsafePointer<__LAPACK_int>, _ theta: UnsafeMutablePointer<Double>?, _ phi: UnsafeMutablePointer<Double>?, _ u1: OpaquePointer?, _ ldu1: UnsafePointer<__LAPACK_int>, _ u2: OpaquePointer?, _ ldu2: UnsafePointer<__LAPACK_int>, _ v1t: OpaquePointer?, _ ldv1t: UnsafePointer<__LAPACK_int>, _ v2t: OpaquePointer?, _ ldv2t: UnsafePointer<__LAPACK_int>, _ b11d: UnsafeMutablePointer<Double>?, _ b11e: UnsafeMutablePointer<Double>?, _ b12d: UnsafeMutablePointer<Double>?, _ b12e: UnsafeMutablePointer<Double>?, _ b21d: UnsafeMutablePointer<Double>?, _ b21e: UnsafeMutablePointer<Double>?, _ b22d: UnsafeMutablePointer<Double>?, _ b22e: UnsafeMutablePointer<Double>?, _ rwork: UnsafeMutablePointer<Double>?, _ lrwork: UnsafePointer<__LAPACK_int>, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# zbbcsd\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void zbbcsd_(const char *jobu1, const char *jobu2, const char *jobv1t, const char *jobv2t, const char *trans, const __LAPACK_int *m, const __LAPACK_int *p, const __LAPACK_int *q, double *theta, double *phi, __LAPACK_double_complex *u1, const __LAPACK_int *ldu1, __LAPACK_double_complex *u2, const __LAPACK_int *ldu2, __LAPACK_double_complex *v1t, const __LAPACK_int *ldv1t, __LAPACK_double_complex *v2t, const __LAPACK_int *ldv2t, double *b11d, double *b11e, double *b12d, double *b12e, double *b21d, double *b21e, double *b22d, double *b22e, double *rwork, const __LAPACK_int *lrwork, __LAPACK_int *info);
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
