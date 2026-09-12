> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsesymbolicfactoroptions](https://developer.apple.com/documentation/accelerate/sparsesymbolicfactoroptions)

# SparseSymbolicFactorOptions (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains options that affect the symbolic stage of a sparse factorization.

## Declaration

```swift
struct SparseSymbolicFactorOptions
```

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)

<a id="overview"></a>

## Overview

[SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md) supports the following ordering algorithms:

| [SparseOrderDefault](sparseorderdefault.md) | The default ordering ([SparseOrderAMD](sparseorderamd.md) for symmetric and [SparseOrderCOLAMD](sparseordercolamd.md) for unsymmetric factorizations). |
| --- | --- |
| [SparseOrderUser](sparseorderuser.md) | The user-supplied ordering, or identity if [order](sparsesymbolicfactoroptions/order.md) is `null`. |
| [SparseOrderAMD](sparseorderamd.md) | Approximate minimum degree (AMD) ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*. |
| [SparseOrderMetis](sparseordermetis.md) | METIS nested dissection ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*. |
| [SparseOrderCOLAMD](sparseordercolamd.md) | The column AMD ordering for *AᵀA*. This isn’t valid for symmetric factorizations (use [SparseOrderAMD](sparseorderamd.md) instead). |

## Topics

### Creating a Symbolic Factor Options Structure

- [init(control:orderMethod:order:ignoreRowsAndColumns:malloc:free:reportError:)](sparsesymbolicfactoroptions/init%28control_ordermethod_order_ignorerowsandcolumns_malloc_free_reporterror_%29.md): Creates a new structure that contains options that affect the symbolic stage of a sparse factorization.

### Inspecting Symbolic Factor Options

- [control](sparsesymbolicfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [orderMethod](sparsesymbolicfactoroptions/ordermethod.md): The ordering algorithm.
- [order](sparsesymbolicfactoroptions/order.md): The user-supplied array for ordering.
- [SparseOrder_t](sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](sparsesymbolicfactoroptions/ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](sparsesymbolicfactoroptions/malloc.md): The function for allocating any necessary storage.
- [free](sparsesymbolicfactoroptions/free.md): The function for freeing allocated storage.
- [reportError](sparsesymbolicfactoroptions/reporterror.md): The function for reporting parameter errors.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Related Documentation

- [SparseOrder_t](sparseorder_t.md): Options that define which ordering algorithm to use.

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

# SparseSymbolicFactorOptions (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains options that affect the symbolic stage of a sparse factorization.

## Declaration

```objectivec
typedef struct { ... } SparseSymbolicFactorOptions;
```

## Mentioned In

- [Solving systems using direct methods](solving-systems-using-direct-methods.md)

<a id="overview"></a>

## Overview

[SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md) supports the following ordering algorithms:

| [SparseOrderDefault](sparseorderdefault.md) | The default ordering ([SparseOrderAMD](sparseorderamd.md) for symmetric and [SparseOrderCOLAMD](sparseordercolamd.md) for unsymmetric factorizations). |
| --- | --- |
| [SparseOrderUser](sparseorderuser.md) | The user-supplied ordering, or identity if [order](sparsesymbolicfactoroptions/order.md) is `null`. |
| [SparseOrderAMD](sparseorderamd.md) | Approximate minimum degree (AMD) ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*. |
| [SparseOrderMetis](sparseordermetis.md) | METIS nested dissection ordering. There’s a large overhead cost if you use it for QR-based factorization due to explicit formation of *AᵀA*. |
| [SparseOrderCOLAMD](sparseordercolamd.md) | The column AMD ordering for *AᵀA*. This isn’t valid for symmetric factorizations (use [SparseOrderAMD](sparseorderamd.md) instead). |

## Topics

### Inspecting Symbolic Factor Options

- [control](sparsesymbolicfactoroptions/control.md): The flags that control the computation.
- [SparseControl_t](sparsecontrol_t.md): Options that control the computation.
- [orderMethod](sparsesymbolicfactoroptions/ordermethod.md): The ordering algorithm.
- [order](sparsesymbolicfactoroptions/order.md): The user-supplied array for ordering.
- [SparseOrder_t](sparseorder_t.md): Options that define which ordering algorithm to use.
- [ignoreRowsAndColumns](sparsesymbolicfactoroptions/ignorerowsandcolumns.md): An array that contains row and column indices to ignore.
- [malloc](sparsesymbolicfactoroptions/malloc.md): The function for allocating any necessary storage.
- [free](sparsesymbolicfactoroptions/free.md): The function for freeing allocated storage.
- [reportError](sparsesymbolicfactoroptions/reporterror.md): The function for reporting parameter errors.

## See Also

### Related Documentation

- [SparseOrder_t](sparseorder_t.md): Options that define which ordering algorithm to use.

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.
