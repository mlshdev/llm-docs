> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_muladd(_:_:_:)-41x8n](https://developer.apple.com/documentation/simd/simd_muladd(_:_:_:)-41x8n)

# simd_muladd(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```swift
func simd_muladd(_ x: Float16, _ y: Float16, _ z: Float16) -> Float16
```

## Parameters

- `x`: The *x* in `x*y + z`.
- `y`: The *y* in `x*y + z`.
- `z`: The *z* in `x*y + z`.

<a id="return-value"></a>

## Return Value

The result of `x*y + z`.

# simd_muladd (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns the multiply-add result for corresponding elements in three vectors.

## Declaration

```objectivec
static _Float16 simd_muladd(_Float16 x, _Float16 y, _Float16 z);
```

## Parameters

- `x`: The *x* in `x*y + z`.
- `y`: The *y* in `x*y + z`.
- `z`: The *z* in `x*y + z`.

<a id="return-value"></a>

## Return Value

The result of `x*y + z`.
