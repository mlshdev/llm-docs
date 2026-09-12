> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpaddinglayer/init(zeropadding:)](https://developer.apple.com/documentation/mlcompute/mlcpaddinglayer/init(zeropadding:))

# init(zeroPadding:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a padding layer with the zero padding sizes you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init(zeroPadding: [Int])
```

## Parameters

- `zeroPadding`: An array that contains the zero padding sizes.

## See Also

### Creating Padding Layers

- [init(reflectionPadding:)](init%28reflectionpadding_%29.md): Deprecated. Creates a padding layer with the reflection padding sizes you specify.
- [init(symmetricPadding:)](init%28symmetricpadding_%29.md): Deprecated. Creates a padding layer with the symmetric padding sizes you specify.
- [init(constantPadding:constantValue:)](init%28constantpadding_constantvalue_%29.md): Deprecated. Creates a padding layer with the constant padding sizes and constant value you specify.
