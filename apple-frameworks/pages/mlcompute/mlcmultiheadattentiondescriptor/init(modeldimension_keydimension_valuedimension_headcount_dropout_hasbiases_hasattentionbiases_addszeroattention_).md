> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentiondescriptor/init(modeldimension:keydimension:valuedimension:headcount:dropout:hasbiases:hasattentionbiases:addszeroattention:)](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentiondescriptor/init(modeldimension:keydimension:valuedimension:headcount:dropout:hasbiases:hasattentionbiases:addszeroattention:))

# init(modelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.

## Declaration

```swift
convenience init?(modelDimension: Int, keyDimension: Int, valueDimension: Int, headCount: Int, dropout: Float, hasBiases: Bool, hasAttentionBiases: Bool, addsZeroAttention: Bool)
```

## Parameters

- `modelDimension`: The total dimension of model space.
- `keyDimension`: The total dimension of key space; the default value is equal to `modelDimension`.
- `valueDimension`: The total dimension of value space; the default value is equal to `modelDimension`.
- `headCount`: The number of parallel attention heads.
- `dropout`: The dropout rate you apply to the output projection weights; the default value is `0.0`.
- `hasBiases`: A Boolean that specifies whether you add a bias to query, key, value, and output projections; the default value is `true`.
- `hasAttentionBiases`: A Boolean that specifies whether you add a row of zeros to projected key and value; the default value is `false`.
- `addsZeroAttention`: A Boolean that specifies whether you add a row of zeros to projected key and value; the default value is `false`.

## See Also

### Creating Multi-Head Attention Descriptors

- [init(modelDimension:headCount:)](init%28modeldimension_headcount_%29.md): Deprecated. Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.

# descriptorWithModelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithModelDimension:(NSUInteger) modelDimension keyDimension:(NSUInteger) keyDimension valueDimension:(NSUInteger) valueDimension headCount:(NSUInteger) headCount dropout:(float) dropout hasBiases:(BOOL) hasBiases hasAttentionBiases:(BOOL) hasAttentionBiases addsZeroAttention:(BOOL) addsZeroAttention;
```

## Parameters

- `modelDimension`: The total dimension of model space.
- `keyDimension`: The total dimension of key space; the default value is equal to `modelDimension`.
- `valueDimension`: The total dimension of value space; the default value is equal to `modelDimension`.
- `headCount`: The number of parallel attention heads.
- `dropout`: The dropout rate you apply to the output projection weights; the default value is `0.0`.
- `hasBiases`: A Boolean that specifies whether you add a bias to query, key, value, and output projections; the default value is `true`.
- `hasAttentionBiases`: A Boolean that specifies whether you add a row of zeros to projected key and value; the default value is `false`.
- `addsZeroAttention`: A Boolean that specifies whether you add a row of zeros to projected key and value; the default value is `false`.

## See Also

### Creating Multi-Head Attention Descriptors

- [descriptorWithModelDimension:headCount:](init%28modeldimension_headcount_%29.md): Deprecated. Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.
