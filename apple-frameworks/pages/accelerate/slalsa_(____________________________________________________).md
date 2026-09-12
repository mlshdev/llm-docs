> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/slalsa_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/slalsa_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# slalsa\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func slalsa_(_ icompq: UnsafePointer<__LAPACK_int>, _ smlsiz: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ nrhs: UnsafePointer<__LAPACK_int>, _ b: UnsafeMutablePointer<Float>?, _ ldb: UnsafePointer<__LAPACK_int>, _ bx: UnsafeMutablePointer<Float>?, _ ldbx: UnsafePointer<__LAPACK_int>, _ u: UnsafePointer<Float>?, _ ldu: UnsafePointer<__LAPACK_int>, _ vt: UnsafePointer<Float>?, _ k: UnsafePointer<__LAPACK_int>?, _ difl: UnsafePointer<Float>?, _ difr: UnsafePointer<Float>?, _ z: UnsafePointer<Float>?, _ poles: UnsafePointer<Float>?, _ givptr: UnsafePointer<__LAPACK_int>?, _ givcol: UnsafePointer<__LAPACK_int>?, _ ldgcol: UnsafePointer<__LAPACK_int>, _ perm: UnsafePointer<__LAPACK_int>?, _ givnum: UnsafePointer<Float>?, _ c: UnsafePointer<Float>?, _ s: UnsafePointer<Float>?, _ work: UnsafeMutablePointer<Float>, _ iwork: UnsafeMutablePointer<__LAPACK_int>?, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# slalsa\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void slalsa_(const __LAPACK_int *icompq, const __LAPACK_int *smlsiz, const __LAPACK_int *n, const __LAPACK_int *nrhs, float *b, const __LAPACK_int *ldb, float *bx, const __LAPACK_int *ldbx, const float *u, const __LAPACK_int *ldu, const float *vt, const __LAPACK_int *k, const float *difl, const float *difr, const float *z, const float *poles, const __LAPACK_int *givptr, const __LAPACK_int *givcol, const __LAPACK_int *ldgcol, const __LAPACK_int *perm, const float *givnum, const float *c, const float *s, float *work, __LAPACK_int *iwork, __LAPACK_int *info);
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
