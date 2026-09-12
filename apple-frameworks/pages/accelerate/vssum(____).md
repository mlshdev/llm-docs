> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vssum(_:_:)](https://developer.apple.com/documentation/accelerate/vssum(_:_:))

# vSsum(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Finds the sum of the values of the elements in a vector.

> Use vDSP_sve instead

## Declaration

```swift
func vSsum(_ count: Int32, _ x: UnsafePointer<vFloat>) -> Float
```

## Parameters

- `count`: Number of elements in the vector `x`; must be a multiple of 4.
- `x`: A vector array of `float` values.

<a id="return-value"></a>

## Return Value

The sum of the values of the elements in the vector.

## See Also

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax(\_:\_:)](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin(\_:\_:)](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax(\_:\_:)](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin(\_:\_:)](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum(\_:\_:)](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSaxpy(\_:\_:\_:\_:)](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy(\_:\_:\_:\_:\_:)](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy(\_:\_:\_:)](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot(\_:\_:\_:)](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot(\_:\_:\_:\_:\_:\_:)](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2(\_:\_:)](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2(\_:\_:)](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot(\_:\_:\_:\_:\_:)](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal(\_:\_:\_:)](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap(\_:\_:\_:)](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.

# vSsum (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Finds the sum of the values of the elements in a vector.

> Use vDSP_sve instead

## Declaration

```objectivec
extern float vSsum(int32_t count, const vFloat *x);
```

## Parameters

- `count`: Number of elements in the vector `x`; must be a multiple of 4.
- `x`: A vector array of `float` values.

<a id="return-value"></a>

## Return Value

The sum of the values of the elements in the vector.

## See Also

### Vector-Scalar Linear Algebra Functions (from vectorOps.h)

- [vIsamax](visamax%28____%29.md): Deprecated. Finds the position of the first vector element having the largest absolute value.
- [vIsamin](visamin%28____%29.md): Deprecated. Finds the position of the first vector element having the smallest absolute value.
- [vIsmax](vismax%28____%29.md): Deprecated. Finds the position of the first vector element having the maximum value.
- [vIsmin](vismin%28____%29.md): Deprecated. Finds the position of the first vector element having the minimum value.
- [vSasum](vsasum%28____%29.md): Deprecated. Finds the sum of the absolute values of the elements in a vector.
- [vSaxpy](vsaxpy%28________%29.md): Deprecated. Multiplies a vector by a scalar , adds it to a second vector , and stores the result in the second vector.
- [vSnaxpy](vsnaxpy%28__________%29.md): Deprecated. Performs the computation of `vSaxpy` `n` times, using a different multiplier each time.
- [vScopy](vscopy%28______%29.md): Deprecated. Copies one vector to another.
- [vSdot](vsdot%28______%29.md): Deprecated. Computes the dot product of two vectors.
- [vSndot](vsndot%28____________%29.md): Deprecated. Computes the dot products of n pairs of vectors, accumulating or storing the results in an array of `n` `float` values.
- [vSnrm2](vsnrm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSnorm2](vsnorm2%28____%29.md): Deprecated. Finds the Euclidean length of a vector.
- [vSrot](vsrot%28__________%29.md): Deprecated. Applies planar rotation to a set of n points whose x and y coordinates are contained in two arrays of vectors.
- [vSscal](vsscal%28______%29.md): Deprecated. Scales a vector in place.
- [vSswap](vsswap%28______%29.md): Deprecated. Interchanges the elements of two vectors.
