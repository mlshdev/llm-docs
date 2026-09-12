> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsamplemode](https://developer.apple.com/documentation/mlcompute/mlcsamplemode)

# MLCSampleMode (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A sampling mode for an upsample layer.

## Declaration

```swift
enum MLCSampleMode
```

## Topics

### Enumeration Cases

- [MLCSampleMode.nearest](mlcsamplemode/nearest.md): Deprecated.
- [MLCSampleMode.linear](mlcsamplemode/linear.md): Deprecated.
- [debugDescription](mlcsamplemode/debugdescription.md): A textual description of the sample mode, suitable for debugging.

### Initializers

- [init(rawValue:)](mlcsamplemode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Upsample Layers

- [init(shape:)](mlcupsamplelayer/init%28shape_%29.md): Deprecated. Creates an upsample layer with the shape you specify.
- [init(shape:sampleMode:alignsCorners:)](mlcupsamplelayer/init%28shape_samplemode_alignscorners_%29.md): Deprecated. Creates an upsample layer with the shape, upsampling algorithm, and corner alignment option you specify.

# MLCSampleMode (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A sampling mode for an upsample layer.

## Declaration

```objectivec
enum MLCSampleMode : int32_t;
```

## Topics

### Enumeration Cases

- [MLCSampleModeNearest](mlcsamplemode/nearest.md): Deprecated.
- [MLCSampleModeLinear](mlcsamplemode/linear.md): Deprecated.
- [MLCSampleModeDebugDescription](mlcsamplemode/debugdescription.md): A textual description of the sample mode, suitable for debugging.

## See Also

### Creating Upsample Layers

- [layerWithShape:](mlcupsamplelayer/layerwithshape_.md): Deprecated. Creates an upsample layer with the shape you specify.
- [layerWithShape:sampleMode:alignsCorners:](mlcupsamplelayer/layerwithshape_samplemode_alignscorners_.md): Deprecated. Creates an upsample layer with the shape, upsampling algorithm, and corner alignement option you specify.
