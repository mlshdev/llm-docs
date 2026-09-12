> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseorderamd](https://developer.apple.com/documentation/accelerate/sparseorderamd)

# SparseOrderAMD (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Approximate minimum degree (AMD) ordering.

## Declaration

```swift
var SparseOrderAMD: SparseOrder_t { get }
```

<a id="Discussion"></a>

## Discussion

There’s a large overhead cost if you use this for QR-based factorization due to explicit formation of *AᵀA*.

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.

# SparseOrderAMD (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Approximate minimum degree (AMD) ordering.

## Declaration

```objectivec
SparseOrderAMD
```

<a id="Discussion"></a>

## Discussion

There’s a large overhead cost if you use this for QR-based factorization due to explicit formation of *AᵀA*.

## See Also

### Constants

- [SparseOrderDefault](sparseorderdefault.md): The default ordering.
- [SparseOrderUser](sparseorderuser.md): The user-supplied ordering, or identity if the order parameter is null.
- [SparseOrderMetis](sparseordermetis.md): METIS nested dissection ordering.
- [SparseOrderMTMetis](sparseordermtmetis.md): Specifies type of fill-reducing ordering.
- [SparseOrderCOLAMD](sparseordercolamd.md): The column AMD ordering for *AᵀA*.
