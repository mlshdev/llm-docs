> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/zggevx_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/zggevx_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# zggevx\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func zggevx_(_ balanc: UnsafePointer<CChar>, _ jobvl: UnsafePointer<CChar>, _ jobvr: UnsafePointer<CChar>, _ sense: UnsafePointer<CChar>, _ n: UnsafePointer<__LAPACK_int>, _ a: OpaquePointer?, _ lda: UnsafePointer<__LAPACK_int>, _ b: OpaquePointer?, _ ldb: UnsafePointer<__LAPACK_int>, _ alpha: OpaquePointer?, _ beta: OpaquePointer?, _ vl: OpaquePointer?, _ ldvl: UnsafePointer<__LAPACK_int>, _ vr: OpaquePointer?, _ ldvr: UnsafePointer<__LAPACK_int>, _ ilo: UnsafeMutablePointer<__LAPACK_int>, _ ihi: UnsafeMutablePointer<__LAPACK_int>, _ lscale: UnsafeMutablePointer<Double>?, _ rscale: UnsafeMutablePointer<Double>?, _ abnrm: UnsafeMutablePointer<Double>, _ bbnrm: UnsafeMutablePointer<Double>, _ rconde: UnsafeMutablePointer<Double>?, _ rcondv: UnsafeMutablePointer<Double>?, _ work: OpaquePointer, _ lwork: UnsafePointer<__LAPACK_int>, _ rwork: UnsafeMutablePointer<Double>?, _ iwork: UnsafeMutablePointer<__LAPACK_int>?, _ bwork: UnsafeMutablePointer<__LAPACK_bool>?, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# zggevx\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void zggevx_(const char *balanc, const char *jobvl, const char *jobvr, const char *sense, const __LAPACK_int *n, __LAPACK_double_complex *a, const __LAPACK_int *lda, __LAPACK_double_complex *b, const __LAPACK_int *ldb, __LAPACK_double_complex *alpha, __LAPACK_double_complex *beta, __LAPACK_double_complex *vl, const __LAPACK_int *ldvl, __LAPACK_double_complex *vr, const __LAPACK_int *ldvr, __LAPACK_int *ilo, __LAPACK_int *ihi, double *lscale, double *rscale, double *abnrm, double *bbnrm, double *rconde, double *rcondv, __LAPACK_double_complex *work, const __LAPACK_int *lwork, double *rwork, __LAPACK_int *iwork, __LAPACK_bool *bwork, __LAPACK_int *info);
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
