> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentiondescriptor/valuedimension](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentiondescriptor/valuedimension)

# valueDimension (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The total dimension of value space, which must be divisible by the number of heads.

## Declaration

```swift
var valueDimension: Int { get }
```

## See Also

### Inspecting Multi-Head Attention Descriptors

- [modelDimension](modeldimension.md): Deprecated. The model or embedding dimension.
- [keyDimension](keydimension.md): Deprecated. The total dimension of key space, which must be divisible by the number of heads.
- [headCount](headcount.md): Deprecated. The number of parallel attention heads.
- [dropout](dropout.md): Deprecated. The dropout rate you apply to the output projection weights.
- [hasBiases](hasbiases.md): Deprecated. A Boolean that specifies whether you add a bias to query, key, value, and output projections.
- [hasAttentionBiases](hasattentionbiases.md): Deprecated. A Boolean that specifies whether you add an array of biases to key and value, respectively.
- [addsZeroAttention](addszeroattention.md): Deprecated. A Boolean that specifies whether you add a row of zeros to projected key and value.

# valueDimension (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The total dimension of value space, which must be divisible by the number of heads.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger valueDimension;
```

## See Also

### Inspecting Multi-Head Attention Descriptors

- [modelDimension](modeldimension.md): Deprecated. The model or embedding dimension.
- [keyDimension](keydimension.md): Deprecated. The total dimension of key space, which must be divisible by the number of heads.
- [headCount](headcount.md): Deprecated. The number of parallel attention heads.
- [dropout](dropout.md): Deprecated. The dropout rate you apply to the output projection weights.
- [hasBiases](hasbiases.md): Deprecated. A Boolean that specifies whether you add a bias to query, key, value, and output projections.
- [hasAttentionBiases](hasattentionbiases.md): Deprecated. A Boolean that specifies whether you add an array of biases to key and value, respectively.
- [addsZeroAttention](addszeroattention.md): Deprecated. A Boolean that specifies whether you add a row of zeros to projected key and value.
