> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/cgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/cgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# cgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func cgedmd_(_ jobs: UnsafePointer<CChar>, _ jobz: UnsafePointer<CChar>, _ jobr: UnsafePointer<CChar>, _ jobf: UnsafePointer<CChar>, _ whtsvd: UnsafePointer<__LAPACK_int>, _ m: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ x: OpaquePointer?, _ ldx: UnsafePointer<__LAPACK_int>, _ y: OpaquePointer?, _ ldy: UnsafePointer<__LAPACK_int>, _ nrnk: UnsafePointer<__LAPACK_int>, _ tol: UnsafePointer<Float>, _ k: UnsafeMutablePointer<__LAPACK_int>, _ eigs: OpaquePointer?, _ z: OpaquePointer?, _ ldz: UnsafeMutablePointer<__LAPACK_int>, _ res: UnsafeMutablePointer<Float>?, _ b: OpaquePointer?, _ ldb: UnsafePointer<__LAPACK_int>, _ w: OpaquePointer?, _ ldw: UnsafePointer<__LAPACK_int>, _ s: OpaquePointer?, _ lds: UnsafePointer<__LAPACK_int>, _ zwork: OpaquePointer?, _ lzwork: UnsafePointer<__LAPACK_int>, _ rwork: UnsafeMutablePointer<Float>?, _ lrwork: UnsafePointer<__LAPACK_int>, _ iwork: UnsafeMutablePointer<__LAPACK_int>?, _ liwork: UnsafePointer<__LAPACK_int>, _ info: UnsafeMutablePointer<__LAPACK_int>)
```

## See Also

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp3rk_%28________________________________________________%29.md)
- [crscl\_(\_:\_:\_:\_:)](crscl_%28________%29.md)
- [dgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slaqp2rk_%28________________________________________%29.md)

# cgedmd\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
void cgedmd_(const char *jobs, const char *jobz, const char *jobr, const char *jobf, const __LAPACK_int *whtsvd, const __LAPACK_int *m, const __LAPACK_int *n, __LAPACK_float_complex *x, const __LAPACK_int *ldx, __LAPACK_float_complex *y, const __LAPACK_int *ldy, const __LAPACK_int *nrnk, const float *tol, __LAPACK_int *k, __LAPACK_float_complex *eigs, __LAPACK_float_complex *z, __LAPACK_int *ldz, float *res, __LAPACK_float_complex *b, const __LAPACK_int *ldb, __LAPACK_float_complex *w, const __LAPACK_int *ldw, __LAPACK_float_complex *s, const __LAPACK_int *lds, __LAPACK_float_complex *zwork, const __LAPACK_int *lzwork, float *rwork, const __LAPACK_int *lrwork, __LAPACK_int *iwork, const __LAPACK_int *liwork, __LAPACK_int *info);
```

## See Also

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmdq\_](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_](claqp3rk_%28________________________________________________%29.md)
- [crscl\_](crscl_%28________%29.md)
- [dgedmd\_](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_](slaqp2rk_%28________________________________________%29.md)
