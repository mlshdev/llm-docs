> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sbbcsd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/sbbcsd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# sbbcsd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func sbbcsd_(_ jobu1: UnsafePointer<CChar>, _ jobu2: UnsafePointer<CChar>, _ jobv1t: UnsafePointer<CChar>, _ jobv2t: UnsafePointer<CChar>, _ trans: UnsafePointer<CChar>, _ m: UnsafePointer<__LAPACK_int>, _ p: UnsafePointer<__LAPACK_int>, _ q: UnsafePointer<__LAPACK_int>, _ theta: UnsafeMutablePointer<Float>?, _ phi: UnsafeMutablePointer<Float>?, _ u1: UnsafeMutablePointer<Float>?, _ ldu1: UnsafePointer<__LAPACK_int>, _ u2: UnsafeMutablePointer<Float>?, _ ldu2: UnsafePointer<__LAPACK_int>, _ v1t: UnsafeMutablePointer<Float>?, _ ldv1t: UnsafePointer<__LAPACK_int>, _ v2t: UnsafeMutablePointer<Float>?, _ ldv2t: UnsafePointer<__LAPACK_int>, _ b11d: UnsafeMutablePointer<Float>?, _ b11e: UnsafeMutablePointer<Float>?, _ b12d: UnsafeMutablePointer<Float>?, _ b12e: UnsafeMutablePointer<Float>?, _ b21d: UnsafeMutablePointer<Float>?, _ b21e: UnsafeMutablePointer<Float>?, _ b22d: UnsafeMutablePointer<Float>?, _ b22e: UnsafeMutablePointer<Float>?, _ work: UnsafeMutablePointer<Float>, _ lwork: UnsafePointer<__LAPACK_int>, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# sbbcsd\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void sbbcsd_(const char *jobu1, const char *jobu2, const char *jobv1t, const char *jobv2t, const char *trans, const __LAPACK_int *m, const __LAPACK_int *p, const __LAPACK_int *q, float *theta, float *phi, float *u1, const __LAPACK_int *ldu1, float *u2, const __LAPACK_int *ldu2, float *v1t, const __LAPACK_int *ldv1t, float *v2t, const __LAPACK_int *ldv2t, float *b11d, float *b11e, float *b12d, float *b12e, float *b21d, float *b21e, float *b22d, float *b22e, float *work, const __LAPACK_int *lwork, __LAPACK_int *info);
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
