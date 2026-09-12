> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dlals0_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/dlals0_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# dlals0\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func dlals0_(_ icompq: UnsafePointer<__LAPACK_int>, _ nl: UnsafePointer<__LAPACK_int>, _ nr: UnsafePointer<__LAPACK_int>, _ sqre: UnsafePointer<__LAPACK_int>, _ nrhs: UnsafePointer<__LAPACK_int>, _ b: UnsafeMutablePointer<Double>?, _ ldb: UnsafePointer<__LAPACK_int>, _ bx: UnsafeMutablePointer<Double>?, _ ldbx: UnsafePointer<__LAPACK_int>, _ perm: UnsafePointer<__LAPACK_int>?, _ givptr: UnsafePointer<__LAPACK_int>, _ givcol: UnsafePointer<__LAPACK_int>?, _ ldgcol: UnsafePointer<__LAPACK_int>, _ givnum: UnsafePointer<Double>?, _ ldgnum: UnsafePointer<__LAPACK_int>, _ poles: UnsafePointer<Double>?, _ difl: UnsafePointer<Double>?, _ difr: UnsafePointer<Double>?, _ z: UnsafePointer<Double>?, _ k: UnsafePointer<__LAPACK_int>, _ c: UnsafePointer<Double>, _ s: UnsafePointer<Double>, _ work: UnsafeMutablePointer<Double>, _ info: UnsafeMutablePointer<__LAPACK_int>)
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

# dlals0\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void dlals0_(const __LAPACK_int *icompq, const __LAPACK_int *nl, const __LAPACK_int *nr, const __LAPACK_int *sqre, const __LAPACK_int *nrhs, double *b, const __LAPACK_int *ldb, double *bx, const __LAPACK_int *ldbx, const __LAPACK_int *perm, const __LAPACK_int *givptr, const __LAPACK_int *givcol, const __LAPACK_int *ldgcol, const double *givnum, const __LAPACK_int *ldgnum, const double *poles, const double *difl, const double *difr, const double *z, const __LAPACK_int *k, const double *c, const double *s, double *work, __LAPACK_int *info);
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
