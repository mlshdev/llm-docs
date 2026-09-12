> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmuldescriptor/init(alpha:transposesx:transposesy:)](https://developer.apple.com/documentation/mlcompute/mlcmatmuldescriptor/init(alpha:transposesx:transposesy:))

# init(alpha:transposesX:transposesY:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batched matrix multiplication descriptor with the alpha value and transpose options you specify.

## Declaration

```swift
convenience init?(alpha: Float, transposesX: Bool, transposesY: Bool)
```

## Parameters

- `alpha`: A scalar value you specify to scale the left-hand side, `C = alpha x A x B`.
- `transposesX`: A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- `transposesY`: A Boolean that specifies whether you choose to transpose the last two dimensions of y.

## See Also

### Creating Matrix Multiplication Descriptors

- [init()](init%28%29.md): Deprecated. Creates a batched matrix multiplication descriptor.

# descriptorWithAlpha:transposesX:transposesY: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a batched matrix multiplication descriptor with the alpha value and transpose options you specify.

## Declaration

```objectivec
+ (instancetype) descriptorWithAlpha:(float) alpha transposesX:(BOOL) transposesX transposesY:(BOOL) transposesY;
```

## Parameters

- `alpha`: A scalar value you specify to scale the left-hand side, `C = alpha x A x B`.
- `transposesX`: A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- `transposesY`: A Boolean that specifies whether you choose to transpose the last two dimensions of y.

## See Also

### Creating Matrix Multiplication Descriptors

- [descriptor](init%28%29.md): Deprecated. Creates a batched matrix multiplication descriptor.
