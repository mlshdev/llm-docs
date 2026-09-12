> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattributevalue/vectorfloat3value](https://developer.apple.com/documentation/spritekit/skattributevalue/vectorfloat3value)

# vectorFloat3Value (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of three floating point numbers.

## Declaration

```swift
var vectorFloat3Value: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number or a [vector_float2](../../simd/vector_float2.md), the empty items in the vector are set to 0. If the receiver’s original value is a [vector_float4](../../simd/vector_float4.md), the last item is truncated.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat4Value](vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.

# vectorFloat3Value (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of three floating point numbers.

## Declaration

```objectivec
@property (nonatomic) vector_float3 vectorFloat3Value;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number or a [vector_float2](../../simd/vector_float2.md), the empty items in the vector are set to 0. If the receiver’s original value is a [vector_float4](../../simd/vector_float4.md), the last item is truncated.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat4Value](vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.
