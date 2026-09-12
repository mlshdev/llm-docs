> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsrot(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsrot(_:_:_:_:_:))

# vSrot(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.

> Use cblas_srot instead

## Declaration

```swift
func vSrot(_ n: Int32, _ x: UnsafeMutablePointer<vFloat>, _ y: UnsafeMutablePointer<vFloat>, _ c: Float, _ s: Float)
```

## Parameters

- `n`: Number of points to be rotated; must be a multiple of 4.
- `x`: Vector with `n`/4 elements of type `vector float`, representing the x-coordinates of the points.
- `y`: Vector with `n`/4 elements of type `vector float`, representing the y-coordinates of the points.
- `c`: Cosine of the angle of rotation.
- `s`: Sine of the angle of rotation.

<a id="Discussion"></a>

## Discussion

The coordinates are modified in place in the vectors in arrays `x` and `y`.

## See Also

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax(\_:\_:)](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin(\_:\_:)](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax(\_:\_:)](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin(\_:\_:)](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum(\_:\_:)](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSsum(\_:\_:)](vssum%28____%29.md): Deprecated. Finds the sum of the values of the elements in a vector.
- [vSaxpy(\_:\_:\_:\_:)](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy(\_:\_:\_:\_:\_:)](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy(\_:\_:\_:)](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot(\_:\_:\_:)](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot(\_:\_:\_:\_:\_:\_:)](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2(\_:\_:)](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2(\_:\_:)](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSscal(\_:\_:\_:)](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap(\_:\_:\_:)](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.

# vSrot (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.

> Use cblas_srot instead

## Declaration

```objectivec
extern void vSrot(int32_t n, vFloat *x, vFloat *y, float c, float s);
```

## Parameters

- `n`: Number of points to be rotated; must be a multiple of 4.
- `x`: Vector with `n`/4 elements of type `vector float`, representing the x-coordinates of the points.
- `y`: Vector with `n`/4 elements of type `vector float`, representing the y-coordinates of the points.
- `c`: Cosine of the angle of rotation.
- `s`: Sine of the angle of rotation.

<a id="Discussion"></a>

## Discussion

The coordinates are modified in place in the vectors in arrays `x` and `y`.

## See Also

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSsum](vssum%28____%29.md): Deprecated. Finds the sum of the values of the elements in a vector.
- [vSaxpy](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSscal](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.
