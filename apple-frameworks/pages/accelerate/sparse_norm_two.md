> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse_norm_two](https://developer.apple.com/documentation/accelerate/sparse_norm_two)

# SPARSE_NORM_TWO (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Norm Two

## Declaration

```swift
var SPARSE_NORM_TWO: sparse_norm { get }
```

<a id="Discussion"></a>

## Discussion

| Matrix element wise | *sqrt( sumᵢ,ⱼ (A\[i,j\])² )*\_\_ |
| --- | --- |
| Matrix operator | Largest singular value of matrix, note that the operator [SPARSE_NORM_TWO](sparse_norm_two.md) is significantly more expensive than other norm operations.\_\_ |
| Vector element wise | *sqrt( sumᵢ (x\[i\])² )*\_\_ |

## See Also

### Constants

- [SPARSE_NORM_ONE](sparse_norm_one.md): Norm One
- [SPARSE_NORM_INF](sparse_norm_inf.md): Norm Inf
- [SPARSE_NORM_R1](sparse_norm_r1.md): Norm R1

# SPARSE_NORM_TWO (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Norm Two

## Declaration

```objectivec
SPARSE_NORM_TWO
```

<a id="Discussion"></a>

## Discussion

| Matrix element wise | *sqrt( sumᵢ,ⱼ (A\[i,j\])² )*\_\_ |
| --- | --- |
| Matrix operator | Largest singular value of matrix, note that the operator [SPARSE_NORM_TWO](sparse_norm_two.md) is significantly more expensive than other norm operations.\_\_ |
| Vector element wise | *sqrt( sumᵢ (x\[i\])² )*\_\_ |

## See Also

### Constants

- [SPARSE_NORM_ONE](sparse_norm_one.md): Norm One
- [SPARSE_NORM_INF](sparse_norm_inf.md): Norm Inf
- [SPARSE_NORM_R1](sparse_norm_r1.md): Norm R1
