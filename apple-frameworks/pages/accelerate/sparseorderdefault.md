> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseorderdefault](https://developer.apple.com/documentation/accelerate/sparseorderdefault)

# SparseOrderDefault (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default ordering.

## Declaration

```swift
var SparseOrderDefault: SparseOrder_t { get }
```

<a id="Discussion"></a>

## Discussion

The default ordering is [SparseOrderAMD](sparseorderamd.md) for symmetric and [SparseOrderCOLAMD](sparseordercolamd.md) for unsymmetric factorizations.

## See Also

### Constants

- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.

# SparseOrderDefault (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default ordering.

## Declaration

```objectivec
SparseOrderDefault
```

<a id="Discussion"></a>

## Discussion

The default ordering is [SparseOrderAMD](sparseorderamd.md) for symmetric and [SparseOrderCOLAMD](sparseordercolamd.md) for unsymmetric factorizations.

## See Also

### Constants

- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.
