> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor/scaletype-swift.enum](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor/scaletype-swift.enum)

# AXNumericDataAxisDescriptor.ScaleType (Swift)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Constants that describe the scale of a numeric axis.

## Declaration

```swift
enum ScaleType
```

## Topics

### Scales

- [AXNumericDataAxisDescriptor.ScaleType.linear](scaletype-swift.enum/linear.md): A linear scale.
- [AXNumericDataAxisDescriptor.ScaleType.ln](scaletype-swift.enum/ln.md): A natural log scale.
- [AXNumericDataAxisDescriptor.ScaleType.log10](scaletype-swift.enum/log10.md): A log scale.

### Initializers

- [init(rawValue:)](scaletype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the axis scale

- [scaleType](scaletype-swift.property.md): The scale for the axis.

# AXNumericDataAxisDescriptorScale (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Constants that describe the scale of a numeric axis.

## Declaration

```objectivec
enum AXNumericDataAxisDescriptorScale : NSInteger;
```

## Topics

### Scales

- [AXScaleTypeLinear](scaletype-swift.enum/linear.md): A linear scale.
- [AXScaleTypeLn](scaletype-swift.enum/ln.md): A natural log scale.
- [AXScaleTypeLog10](scaletype-swift.enum/log10.md): A log scale.

## See Also

### Configuring the axis scale

- [scaleType](scaletype-swift.property.md): The scale for the axis.
