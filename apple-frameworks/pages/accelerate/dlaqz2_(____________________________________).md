> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dlaqz2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/dlaqz2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# dlaqz2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func dlaqz2_(_ ilq: UnsafePointer<__LAPACK_bool>, _ ilz: UnsafePointer<__LAPACK_bool>, _ k: UnsafePointer<__LAPACK_int>, _ istartm: UnsafePointer<__LAPACK_int>, _ istopm: UnsafePointer<__LAPACK_int>, _ ihi: UnsafePointer<__LAPACK_int>, _ a: UnsafeMutablePointer<Double>?, _ lda: UnsafePointer<__LAPACK_int>, _ b: UnsafeMutablePointer<Double>?, _ ldb: UnsafePointer<__LAPACK_int>, _ nq: UnsafePointer<__LAPACK_int>, _ qstart: UnsafePointer<__LAPACK_int>, _ q: UnsafeMutablePointer<Double>?, _ ldq: UnsafePointer<__LAPACK_int>, _ nz: UnsafePointer<__LAPACK_int>, _ zstart: UnsafePointer<__LAPACK_int>, _ z: UnsafeMutablePointer<Double>?, _ ldz: UnsafePointer<__LAPACK_int>)
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

# dlaqz2\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
void dlaqz2_(const __LAPACK_bool *ilq, const __LAPACK_bool *ilz, const __LAPACK_int *k, const __LAPACK_int *istartm, const __LAPACK_int *istopm, const __LAPACK_int *ihi, double *a, const __LAPACK_int *lda, double *b, const __LAPACK_int *ldb, const __LAPACK_int *nq, const __LAPACK_int *qstart, double *q, const __LAPACK_int *ldq, const __LAPACK_int *nz, const __LAPACK_int *zstart, double *z, const __LAPACK_int *ldz);
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
