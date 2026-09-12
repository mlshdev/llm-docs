> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsecreatesubfactor(_:_:)-49d8w](https://developer.apple.com/documentation/accelerate/sparsecreatesubfactor(_:_:)-49d8w)

# SparseCreateSubfactor(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.

## Declaration

```swift
func SparseCreateSubfactor(_ subfactor: SparseSubfactor_t, _ Factor: SparseOpaqueFactorization_Double) -> SparseOpaqueSubfactor_Double
```

## Parameters

- `subfactor`: Defines which subfactor to extract.
- `Factor`: The factorization to extract the subfactor from.

<a id="return-value"></a>

## Return Value

A `SparseOpaqueSubfactor_Double` structure that represents the subfactor. You must free the resource through a call to [SparseCleanup(\_:)](sparsecleanup%28__%29-15kpj.md) after you finish with the object.

## See Also

### Subfactor Extraction

- [SparseSubfactor_t](sparsesubfactor_t.md): Constants that define the subfactor of a factorization.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.

# SparseCreateSubfactor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.

## Declaration

```objectivec
static SparseOpaqueSubfactor_Double SparseCreateSubfactor(SparseSubfactor_t subfactor, SparseOpaqueFactorization_Double Factor);
```

## Parameters

- `subfactor`: Defines which subfactor to extract.
- `Factor`: The factorization to extract the subfactor from.

<a id="return-value"></a>

## Return Value

A `SparseOpaqueSubfactor_Double` structure that represents the subfactor. You must free the resource through a call to [SparseCleanup](sparsecleanup%28__%29-15kpj.md) after you finish with the object.

## See Also

### Subfactor Extraction

- [SparseSubfactor_t](sparsesubfactor_t.md): Constants that define the subfactor of a factorization.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.
