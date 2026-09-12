> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/dgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# dgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func dgedmd_(_ jobs: UnsafePointer<CChar>, _ jobz: UnsafePointer<CChar>, _ jobr: UnsafePointer<CChar>, _ jobf: UnsafePointer<CChar>, _ whtsvd: UnsafePointer<__LAPACK_int>, _ m: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ x: UnsafeMutablePointer<Double>?, _ ldx: UnsafePointer<__LAPACK_int>, _ y: UnsafeMutablePointer<Double>?, _ ldy: UnsafePointer<__LAPACK_int>, _ nrnk: UnsafePointer<__LAPACK_int>, _ tol: UnsafePointer<Double>, _ k: UnsafeMutablePointer<__LAPACK_int>, _ reig: UnsafeMutablePointer<Double>?, _ imeig: UnsafeMutablePointer<Double>?, _ z: UnsafeMutablePointer<Double>?, _ ldz: UnsafePointer<__LAPACK_int>, _ res: UnsafeMutablePointer<Double>?, _ b: UnsafeMutablePointer<Double>?, _ ldb: UnsafePointer<__LAPACK_int>, _ w: UnsafeMutablePointer<Double>?, _ ldw: UnsafePointer<__LAPACK_int>, _ s: UnsafeMutablePointer<Double>?, _ lds: UnsafePointer<__LAPACK_int>, _ work: UnsafeMutablePointer<Double>, _ lwork: UnsafePointer<__LAPACK_int>, _ iwork: UnsafeMutablePointer<__LAPACK_int>?, _ liwork: UnsafePointer<__LAPACK_int>, _ info: UnsafeMutablePointer<__LAPACK_int>)
```

## See Also

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgedmd_%28______________________________________________________________%29.md)
- [cgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](claqp3rk_%28________________________________________________%29.md)
- [crscl\_(\_:\_:\_:\_:)](crscl_%28________%29.md)
- [dgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](slaqp2rk_%28________________________________________%29.md)

# dgedmd\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
void dgedmd_(const char *jobs, const char *jobz, const char *jobr, const char *jobf, const __LAPACK_int *whtsvd, const __LAPACK_int *m, const __LAPACK_int *n, double *x, const __LAPACK_int *ldx, double *y, const __LAPACK_int *ldy, const __LAPACK_int *nrnk, const double *tol, __LAPACK_int *k, double *reig, double *imeig, double *z, const __LAPACK_int *ldz, double *res, double *b, const __LAPACK_int *ldb, double *w, const __LAPACK_int *ldw, double *s, const __LAPACK_int *lds, double *work, const __LAPACK_int *lwork, __LAPACK_int *iwork, const __LAPACK_int *liwork, __LAPACK_int *info);
```

## See Also

### LAPACK functions

- [LAPACK/BLAS Functions](lapack-functions.md): An updated BLAS interface supporting ILP64 is available.
- [cgedmd\_](cgedmd_%28______________________________________________________________%29.md)
- [cgedmdq\_](cgedmdq_%28______________________________________________________________________%29.md)
- [cgeqp3rk\_](cgeqp3rk_%28____________________________________%29.md)
- [claqp2rk\_](claqp2rk_%28________________________________________%29.md)
- [claqp3rk\_](claqp3rk_%28________________________________________________%29.md)
- [crscl\_](crscl_%28________%29.md)
- [dgedmdq\_](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_](sgeqp3rk_%28__________________________________%29.md)
- [slaqp2rk\_](slaqp2rk_%28________________________________________%29.md)
