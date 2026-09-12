> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/slaqr2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/slaqr2_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# slaqr2\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func slaqr2_(_ wantt: UnsafePointer<__LAPACK_bool>, _ wantz: UnsafePointer<__LAPACK_bool>, _ n: UnsafePointer<__LAPACK_int>, _ ktop: UnsafePointer<__LAPACK_int>, _ kbot: UnsafePointer<__LAPACK_int>, _ nw: UnsafePointer<__LAPACK_int>, _ h: UnsafeMutablePointer<Float>?, _ ldh: UnsafePointer<__LAPACK_int>, _ iloz: UnsafePointer<__LAPACK_int>, _ ihiz: UnsafePointer<__LAPACK_int>, _ z: UnsafeMutablePointer<Float>?, _ ldz: UnsafePointer<__LAPACK_int>, _ ns: UnsafeMutablePointer<__LAPACK_int>, _ nd: UnsafeMutablePointer<__LAPACK_int>, _ sr: UnsafeMutablePointer<Float>?, _ si: UnsafeMutablePointer<Float>?, _ v: UnsafeMutablePointer<Float>?, _ ldv: UnsafePointer<__LAPACK_int>, _ nh: UnsafePointer<__LAPACK_int>, _ t: UnsafeMutablePointer<Float>?, _ ldt: UnsafePointer<__LAPACK_int>, _ nv: UnsafePointer<__LAPACK_int>, _ wv: UnsafeMutablePointer<Float>?, _ ldwv: UnsafePointer<__LAPACK_int>, _ work: UnsafeMutablePointer<Float>, _ lwork: UnsafePointer<__LAPACK_int>)
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

# slaqr2\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
void slaqr2_(const __LAPACK_bool *wantt, const __LAPACK_bool *wantz, const __LAPACK_int *n, const __LAPACK_int *ktop, const __LAPACK_int *kbot, const __LAPACK_int *nw, float *h, const __LAPACK_int *ldh, const __LAPACK_int *iloz, const __LAPACK_int *ihiz, float *z, const __LAPACK_int *ldz, __LAPACK_int *ns, __LAPACK_int *nd, float *sr, float *si, float *v, const __LAPACK_int *ldv, const __LAPACK_int *nh, float *t, const __LAPACK_int *ldt, const __LAPACK_int *nv, float *wv, const __LAPACK_int *ldwv, float *work, const __LAPACK_int *lwork);
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
