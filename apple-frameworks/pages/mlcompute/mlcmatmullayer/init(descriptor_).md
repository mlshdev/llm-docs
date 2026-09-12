> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmullayer/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcmatmullayer/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a matrix multiplication layer with the specified descriptor you specify.

## Declaration

```swift
convenience init?(descriptor: MLCMatMulDescriptor)
```

## Parameters

- `descriptor`: An object you use to configure the matrix multiplication layer.

## See Also

### Creating Matrix Multiplication Layers

- [MLCMatMulDescriptor](../mlcmatmuldescriptor.md): Deprecated. A configuration object you use to create a matrix multiplication layer.

# layerWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a matrix multiplication layer with the specified descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithDescriptor:(MLCMatMulDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An object you use to configure the matrix multiplication layer.

## See Also

### Creating Matrix Multiplication Layers

- [MLCMatMulDescriptor](../mlcmatmuldescriptor.md): Deprecated. A configuration object you use to create a matrix multiplication layer.
