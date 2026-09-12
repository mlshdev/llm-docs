> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseorder_t](https://developer.apple.com/documentation/accelerate/sparseorder_t)

# SparseOrder_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that define which ordering algorithm to use.

## Declaration

```swift
struct SparseOrder_t
```

<a id="overview"></a>

## Overview

The column and row ordering you use when eliminating variables in a sparse factorization has a significant influence on the size of the resulting factors and the amount of work necessary to calculate them. Minimizing the size or the amount of work is an NP-complete problem, so the system only implements heuristics in this library.

Approximate minimum degree (AMD)-based orderings tend to be fast and provide good quality for small matrices. Conversely, nested dissection-based orderings, such as METIS, are usually considerably slower to compute, but provide better quality orderings for larger problems, and expose more parallelism during the factorization. Use AMD unless the problem is very large (millions of rows and columns) to avoid performing many repeated factorizations. If you’re uncertain, try both and see which gives better performance for your usage.

AMD and METIS provide good orderings for symmetric matrices. You can use them for QR factorizations, but that involves forming *AᵀA* explicitly, which is expensive. Alternatively, column AMD (COLAMD) finds an ordering for *AᵀA* while only working with *A*. For this reason, you can’t use COLAMD for symmetric factorizations.

## Topics

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.

### Raw Values

- [init(\_:)](sparseorder_t/init%28__%29.md)
- [init(rawValue:)](sparseorder_t/init%28rawvalue_%29.md)
- [rawValue](sparseorder_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Symbolic Factor Options

- [control](sparsesymbolicfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [orderMethod](sparsesymbolicfactoroptions/ordermethod.md): The ordering algorithm.
- [order](sparsesymbolicfactoroptions/order.md): The user-supplied array for ordering.
- [ignoreRowsAndColumns](sparsesymbolicfactoroptions/ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](sparsesymbolicfactoroptions/malloc.md): The function for allocating any necessary storage.
- [free](sparsesymbolicfactoroptions/free.md): The function for freeing allocated storage.
- [reportError](sparsesymbolicfactoroptions/reporterror.md): The function for reporting parameter errors.

# SparseOrder_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that define which ordering algorithm to use.

## Declaration

```objectivec
typedef enum { ... } SparseOrder_t;
```

<a id="overview"></a>

## Overview

The column and row ordering you use when eliminating variables in a sparse factorization has a significant influence on the size of the resulting factors and the amount of work necessary to calculate them. Minimizing the size or the amount of work is an NP-complete problem, so the system only implements heuristics in this library.

Approximate minimum degree (AMD)-based orderings tend to be fast and provide good quality for small matrices. Conversely, nested dissection-based orderings, such as METIS, are usually considerably slower to compute, but provide better quality orderings for larger problems, and expose more parallelism during the factorization. Use AMD unless the problem is very large (millions of rows and columns) to avoid performing many repeated factorizations. If you’re uncertain, try both and see which gives better performance for your usage.

AMD and METIS provide good orderings for symmetric matrices. You can use them for QR factorizations, but that involves forming *AᵀA* explicitly, which is expensive. Alternatively, column AMD (COLAMD) finds an ordering for *AᵀA* while only working with *A*. For this reason, you can’t use COLAMD for symmetric factorizations.

## Topics

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.

## See Also

### Inspecting Symbolic Factor Options

- [control](sparsesymbolicfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [orderMethod](sparsesymbolicfactoroptions/ordermethod.md): The ordering algorithm.
- [order](sparsesymbolicfactoroptions/order.md): The user-supplied array for ordering.
- [ignoreRowsAndColumns](sparsesymbolicfactoroptions/ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](sparsesymbolicfactoroptions/malloc.md): The function for allocating any necessary storage.
- [free](sparsesymbolicfactoroptions/free.md): The function for freeing allocated storage.
- [reportError](sparsesymbolicfactoroptions/reporterror.md): The function for reporting parameter errors.
