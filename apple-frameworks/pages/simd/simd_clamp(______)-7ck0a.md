> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-7ck0a

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_clamp(_ x: simd_half16, _ min: simd_half16, _ max: simd_half16) -> simd_half16
```

<a id="discussion"></a>

## Discussion

X clamped to the range \[min, max\].

Note that if you want to clamp all lanes to the same range, you can use a scalar value for min and max.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_half16 simd_clamp(simd_half16 x, simd_half16 min, simd_half16 max);
```

<a id="discussion"></a>

## Discussion

X clamped to the range \[min, max\].

Note that if you want to clamp all lanes to the same range, you can use a scalar value for min and max.
