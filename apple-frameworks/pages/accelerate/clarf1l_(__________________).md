> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/clarf1l_(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/clarf1l_(_:_:_:_:_:_:_:_:_:))

# clarf1l\_(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func clarf1l_(_ side: UnsafePointer<CChar>, _ m: UnsafePointer<__LAPACK_int>, _ n: UnsafePointer<__LAPACK_int>, _ v: OpaquePointer?, _ incv: UnsafePointer<__LAPACK_int>, _ tau: OpaquePointer, _ c: OpaquePointer?, _ ldc: UnsafePointer<__LAPACK_int>, _ work: OpaquePointer?)
```

# clarf1l\_ (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```objectivec
void clarf1l_(const char *side, const __LAPACK_int *m, const __LAPACK_int *n, const __LAPACK_float_complex *v, const __LAPACK_int *incv, const __LAPACK_float_complex *tau, __LAPACK_float_complex *c, const __LAPACK_int *ldc, __LAPACK_float_complex *work);
```
