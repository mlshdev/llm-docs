> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/dlarf1l_(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/dlarf1l_(_:_:_:_:_:_:_:_:_:))

# dlarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func dlarf1l_(_ side: UnsafePointer<CChar>, _ m: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ v: UnsafePointer<Double>?, _ incv: UnsafePointer<__LAPACK_int>, _ tau: UnsafePointer<Double>, _ c: UnsafeMutablePointer<Double>?, _ ldc: UnsafePointer<__LAPACK_int>, _ work: UnsafeMutablePointer<Double>?)
```

# dlarf1l\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
void dlarf1l_(const char *side, const __LAPACK_int *m, const __LAPACK_int *n, const double *v, const __LAPACK_int *incv, const double *tau, double *c, const __LAPACK_int *ldc, double *work);
```
