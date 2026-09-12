> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcactivationdescriptor/init(type:a:b:c:)](https://developer.apple.com/documentation/mlcompute/mlcactivationdescriptor/init(type:a:b:c:))

# init(type:a:b:c:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.

## Declaration

```swift
convenience init?(type activationType: MLCActivationType, a: Float, b: Float, c: Float)
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.
- `b`: Parameter b.
- `c`: Parameter c.

## See Also

### Creating Activation Descriptors

- [init(type:)](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [init(type:a:)](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [init(type:a:b:)](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.

# descriptorWithType:a:b:c: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an activation descriptor with the activation type and parameters a, b, and c that you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithType:(MLCActivationType) activationType a:(float) a b:(float) b c:(float) c;
```

## Parameters

- `activationType`: A type of activation function.
- `a`: Parameter a.
- `b`: Parameter b.
- `c`: Parameter c.

## See Also

### Creating Activation Descriptors

- [descriptorWithType:](init%28type_%29.md): Deprecated. Creates an activation descriptor with the activation type you specify.
- [descriptorWithType:a:](init%28type_a_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameter a that you specify.
- [descriptorWithType:a:b:](init%28type_a_b_%29.md): Deprecated. Creates an activation descriptor with the activation type and parameters a and b that you specify.
- [MLCActivationType](../mlcactivationtype.md): Deprecated. An activation type that you specify for an activation descriptor.
