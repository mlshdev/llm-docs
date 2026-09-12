> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vsndot(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vsndot(_:_:_:_:_:_:))

# vSndot(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.

> Use cblas_sdot or vDSP_dotpr in a loop instead

## Declaration

```swift
func vSndot(_ n: Int32, _ m: Int32, _ s: UnsafeMutablePointer<Float>, _ isw: Int32, _ x: UnsafePointer<vFloat>, _ y: UnsafePointer<vFloat>)
```

## Parameters

- `n`: Number of dot products to compute, and number of elements in vector `s` ; must be a multiple of 4.
- `m`: Number of elements in the vectors whose dot products are computed; must be a multiple of 4.
- `s`: Destination vector; the `n` dot products are accumulated or stored here.
- `isw`: A key that selects one of the four variants of this function: see Discussion below.
- `x`: A matrix whose rows are `n` floating-point vectors, each containing `m` values.
- `y`: A second matrix whose rows are `n` floating-point vectors, each containing `m` values.

<a id="Discussion"></a>

## Discussion

For i = 0 to n-1, the dot product of vectors `x`\[i\] and `y`\[i\] is computed.  The dot product is accumulated or stored in `s`\[i\], according to the value of `isw`:

- if `isw` = 1, the dot product is stored in `s`\[i\].
- if `isw` = 2, the dot product is negated and then stored in `s`\[i\].
- if `isw` = 3, the dot product is added to the value in `s`\[i\].
- if `isw` = 4, the dot product is negated and then added to the value in `s`\[i\].

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
- [vSnrm2(\_:\_:)](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2(\_:\_:)](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot(\_:\_:\_:\_:\_:)](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal(\_:\_:\_:)](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap(\_:\_:\_:)](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.

# vSndot (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.

> Use cblas_sdot or vDSP_dotpr in a loop instead

## Declaration

```objectivec
extern void vSndot(int32_t n, int32_t m, float *s, int32_t isw, const vFloat *x, const vFloat *y);
```

## Parameters

- `n`: Number of dot products to compute, and number of elements in vector `s` ; must be a multiple of 4.
- `m`: Number of elements in the vectors whose dot products are computed; must be a multiple of 4.
- `s`: Destination vector; the `n` dot products are accumulated or stored here.
- `isw`: A key that selects one of the four variants of this function: see Discussion below.
- `x`: A matrix whose rows are `n` floating-point vectors, each containing `m` values.
- `y`: A second matrix whose rows are `n` floating-point vectors, each containing `m` values.

<a id="Discussion"></a>

## Discussion

For i = 0 to n-1, the dot product of vectors `x`\[i\] and `y`\[i\] is computed.  The dot product is accumulated or stored in `s`\[i\], according to the value of `isw`:

- if `isw` = 1, the dot product is stored in `s`\[i\].
- if `isw` = 2, the dot product is negated and then stored in `s`\[i\].
- if `isw` = 3, the dot product is added to the value in `s`\[i\].
- if `isw` = 4, the dot product is negated and then added to the value in `s`\[i\].

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
- [vSnrm2](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.
