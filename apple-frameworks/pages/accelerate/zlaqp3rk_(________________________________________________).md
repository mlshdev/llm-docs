> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/zlaqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/zlaqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# zlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```swift
func zlaqp3rk_(_ m: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ nrhs: UnsafePointer<__LAPACK_int>, _ ioffset: UnsafePointer<__LAPACK_int>, _ nb: UnsafeMutablePointer<__LAPACK_int>, _ abstol: UnsafePointer<Double>, _ reltol: UnsafePointer<Double>, _ kp1: UnsafePointer<__LAPACK_int>, _ maxc2nrm: UnsafePointer<Double>, _ a: OpaquePointer?, _ lda: UnsafePointer<__LAPACK_int>, _ done: UnsafeMutablePointer<__LAPACK_bool>, _ kb: UnsafeMutablePointer<__LAPACK_int>, _ maxc2nrmk: UnsafeMutablePointer<Double>, _ relmaxc2nrmk: UnsafeMutablePointer<Double>, _ jpiv: UnsafeMutablePointer<__LAPACK_int>?, _ tau: OpaquePointer?, _ vn1: UnsafeMutablePointer<Double>?, _ vn2: UnsafeMutablePointer<Double>?, _ auxv: OpaquePointer?, _ f: OpaquePointer?, _ ldf: UnsafePointer<__LAPACK_int>, _ iwork: UnsafeMutablePointer<__LAPACK_int>?, _ info: UnsafeMutablePointer<__LAPACK_int>)
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
- [dgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](sgeqp3rk_%28__________________________________%29.md)

# zlaqp3rk\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

## Declaration

```objectivec
void zlaqp3rk_(const __LAPACK_int *m, const __LAPACK_int *n, const __LAPACK_int *nrhs, const __LAPACK_int *ioffset, __LAPACK_int *nb, const double *abstol, const double *reltol, const __LAPACK_int *kp1, const double *maxc2nrm, __LAPACK_double_complex *a, const __LAPACK_int *lda, __LAPACK_bool *done, __LAPACK_int *kb, double *maxc2nrmk, double *relmaxc2nrmk, __LAPACK_int *jpiv, __LAPACK_double_complex *tau, double *vn1, double *vn2, __LAPACK_double_complex *auxv, __LAPACK_double_complex *f, const __LAPACK_int *ldf, __LAPACK_int *iwork, __LAPACK_int *info);
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
- [dgedmd\_](dgedmd_%28____________________________________________________________%29.md)
- [dgedmdq\_](dgedmdq_%28____________________________________________________________________%29.md)
- [dgeqp3rk\_](dgeqp3rk_%28__________________________________%29.md)
- [dlaqp2rk\_](dlaqp2rk_%28________________________________________%29.md)
- [dlaqp3rk\_](dlaqp3rk_%28________________________________________________%29.md)
- [sgedmd\_](sgedmd_%28____________________________________________________________%29.md)
- [sgedmdq\_](sgedmdq_%28____________________________________________________________________%29.md)
- [sgeqp3rk\_](sgeqp3rk_%28__________________________________%29.md)
