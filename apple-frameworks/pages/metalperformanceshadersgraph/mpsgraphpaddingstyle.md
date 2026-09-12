> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpaddingstyle](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpaddingstyle)

# MPSGraphPaddingStyle (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The tensor padding style.

## Declaration

```swift
enum MPSGraphPaddingStyle
```

## Topics

### Enumeration Cases

- [MPSGraphPaddingStyle.ONNX_SAME_LOWER](mpsgraphpaddingstyle/onnx_same_lower.md): Explicit offsets
- [MPSGraphPaddingStyle.TF_SAME](mpsgraphpaddingstyle/tf_same.md): TF_SAME
- [MPSGraphPaddingStyle.TF_VALID](mpsgraphpaddingstyle/tf_valid.md): ONNX_SAME_LOWER
- [MPSGraphPaddingStyle.explicit](mpsgraphpaddingstyle/explicit.md): Explicit
- [MPSGraphPaddingStyle.explicitOffset](mpsgraphpaddingstyle/explicitoffset.md): TF_VALID

### Initializers

- [init(rawValue:)](mpsgraphpaddingstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphPaddingStyle (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The tensor padding style.

## Declaration

```objectivec
enum MPSGraphPaddingStyle : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphPaddingStyleONNX_SAME_LOWER](mpsgraphpaddingstyle/onnx_same_lower.md): Explicit offsets
- [MPSGraphPaddingStyleTF_SAME](mpsgraphpaddingstyle/tf_same.md): TF_SAME
- [MPSGraphPaddingStyleTF_VALID](mpsgraphpaddingstyle/tf_valid.md): ONNX_SAME_LOWER
- [MPSGraphPaddingStyleExplicit](mpsgraphpaddingstyle/explicit.md): Explicit
- [MPSGraphPaddingStyleExplicitOffset](mpsgraphpaddingstyle/explicitoffset.md): TF_VALID
