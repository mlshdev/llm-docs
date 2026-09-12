> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmultiheadattentiondescriptor/init(modeldimension:headcount:)](https://developer.apple.com/documentation/mlcompute/mlcmultiheadattentiondescriptor/init(modeldimension:headcount:))

# init(modelDimension:headCount:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.

## Declaration

```swift
convenience init(modelDimension: Int, headCount: Int)
```

## Parameters

- `modelDimension`: The total dimension of model space.
- `headCount`: The number of parallel attention heads.

## See Also

### Creating Multi-Head Attention Descriptors

- [init(modelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention:)](init%28modeldimension_keydimension_valuedimension_headcount_dropout_hasbiases_hasattentionbiases_addszeroattention_%29.md): Deprecated. Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.

# descriptorWithModelDimension:headCount: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a multi-head attention descriptor with the model dimension and number of parallel attention heads you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithModelDimension:(NSUInteger) modelDimension headCount:(NSUInteger) headCount;
```

## Parameters

- `modelDimension`: The total dimension of model space.
- `headCount`: The number of parallel attention heads.

## See Also

### Creating Multi-Head Attention Descriptors

- [descriptorWithModelDimension:keyDimension:valueDimension:headCount:dropout:hasBiases:hasAttentionBiases:addsZeroAttention:](init%28modeldimension_keydimension_valuedimension_headcount_dropout_hasbiases_hasattentionbiases_addszeroattention_%29.md): Deprecated. Creates a multi-head attention descriptor with the dimensions, number of attention heads, dropout rate, and bias and padding options you specify.
