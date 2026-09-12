> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseordermtmetis](https://developer.apple.com/documentation/accelerate/sparseordermtmetis)

# SparseOrderMTMetis (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies type of fill-reducing ordering.

## Declaration

```swift
var SparseOrderMTMetis: SparseOrder_t { get }
```

<a id="discussion"></a>

## Discussion

The order in which variables are eliminated (i.e. the column/row ordering) in a sparse factorization makes a big difference to the size of the resulting factors and amount of work required to calculate them (it is probably the biggest single factor). Minimizing the size or work required is an NP-complete problem, so only heuristics are implemented in this library.

We note that AMD-based orderings tend to be fast and provide good quality for small matrices, whilst nested dissection based orderings (such as metis) are normally considerably slower to compute, but provide better quality orderings for larger problems, and expose more parallelism during the factorization. We recommend AMD is used unless the problem is very large (millions of rows and columns) or you will perform many repeated factorizations. If you are uncertain, try both and see which gives better performance for your usage.

The AMD and MeTiS orderings provide good orderings for symmetric (Hermitian) matrices. They can be used for the QR factorizations, but this involves forming A^TA explicitly, which is expensive. COLAMD on the other hand finds an ordering for `A^T A` whilst only working with A. For this reason, COLAMD cannot be used for symmetric (Hermitian) factorizations.

- **`SparseOrderDefault`**: Default ordering (AMD for symmetric factorizations, COLAMD for QR/CholeskyAtA, and MT-METIS for LU. Defaults may change in future releases if better algorithms become available).
- **`SparseOrderUser`**: User-supplied ordering, or identity if options-\>order is NULL
- **`SparseOrderAMD`**: AMD ordering. Large overhead cost if used for QR-based factorization due to explicit formation of `A^T A`.
- **`SparseOrderMetis`**: MeTiS Nested Dissection ordering. Large overhead cost if used for QR-based factorization due to explicit formation of `A^T A`.
- **`SparseOrderMTMetis`**: MT-MeTiS Nested Dissection ordering. Similar to `SparseOrderMetis`, but uses multiple threads to increase performance at cost of slightly worse ordering quality.
- **`SparseOrderCOLAMD`**: Column AMD ordering for `A^T A`. Not valid for symmetric (Hermitian) factorizations (use AMD instead).

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.

# SparseOrderMTMetis (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies type of fill-reducing ordering.

## Declaration

```objectivec
SparseOrderMTMetis
```

<a id="discussion"></a>

## Discussion

The order in which variables are eliminated (i.e. the column/row ordering) in a sparse factorization makes a big difference to the size of the resulting factors and amount of work required to calculate them (it is probably the biggest single factor). Minimizing the size or work required is an NP-complete problem, so only heuristics are implemented in this library.

We note that AMD-based orderings tend to be fast and provide good quality for small matrices, whilst nested dissection based orderings (such as metis) are normally considerably slower to compute, but provide better quality orderings for larger problems, and expose more parallelism during the factorization. We recommend AMD is used unless the problem is very large (millions of rows and columns) or you will perform many repeated factorizations. If you are uncertain, try both and see which gives better performance for your usage.

The AMD and MeTiS orderings provide good orderings for symmetric (Hermitian) matrices. They can be used for the QR factorizations, but this involves forming A^TA explicitly, which is expensive. COLAMD on the other hand finds an ordering for `A^T A` whilst only working with A. For this reason, COLAMD cannot be used for symmetric (Hermitian) factorizations.

- **`SparseOrderDefault`**: Default ordering (AMD for symmetric factorizations, COLAMD for QR/CholeskyAtA, and MT-METIS for LU. Defaults may change in future releases if better algorithms become available).
- **`SparseOrderUser`**: User-supplied ordering, or identity if options-\>order is NULL
- **`SparseOrderAMD`**: AMD ordering. Large overhead cost if used for QR-based factorization due to explicit formation of `A^T A`.
- **`SparseOrderMetis`**: MeTiS Nested Dissection ordering. Large overhead cost if used for QR-based factorization due to explicit formation of `A^T A`.
- **`SparseOrderMTMetis`**: MT-MeTiS Nested Dissection ordering. Similar to `SparseOrderMetis`, but uses multiple threads to increase performance at cost of slightly worse ordering quality.
- **`SparseOrderCOLAMD`**: Column AMD ordering for `A^T A`. Not valid for symmetric (Hermitian) factorizations (use AMD instead).

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.
