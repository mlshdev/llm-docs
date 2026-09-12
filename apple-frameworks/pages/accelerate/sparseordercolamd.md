> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseordercolamd](https://developer.apple.com/documentation/accelerate/sparseordercolamd)

# SparseOrderCOLAMD (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The column AMD ordering for *AᵀA*.

## Declaration

```swift
var SparseOrderCOLAMD: SparseOrder_t { get }
```

<a id="Discussion"></a>

## Discussion

This ordering isn’t valid for symmetric factorizations (use [SparseOrderAMD](sparseorderamd.md) instead).

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.

# SparseOrderCOLAMD (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The column AMD ordering for *AᵀA*.

## Declaration

```objectivec
SparseOrderCOLAMD
```

<a id="Discussion"></a>

## Discussion

This ordering isn’t valid for symmetric factorizations (use [SparseOrderAMD](sparseorderamd.md) instead).

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderAMD](sparseorderamd.md): Approximate minimum degree (AMD) ordering.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
