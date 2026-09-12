> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendoperation](https://developer.apple.com/documentation/metal/mtlblendoperation)

# MTLBlendOperation (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.

## Declaration

```swift
enum MTLBlendOperation
```

## Topics

### Blend operations

- [MTLBlendOperation.add](mtlblendoperation/add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperation.subtract](mtlblendoperation/subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperation.reverseSubtract](mtlblendoperation/reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperation.min](mtlblendoperation/min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperation.max](mtlblendoperation/max.md): Maximum of the source and destination pixel values.

### Enumeration Cases

- [MTLBlendOperation.unspecialized](mtlblendoperation/unspecialized.md): Defers assigning the blend operation.

### Initializers

- [init(rawValue:)](mtlblendoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling blend operations

- [isBlendingEnabled](mtlrenderpipelinecolorattachmentdescriptor/isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [alphaBlendOperation](mtlrenderpipelinecolorattachmentdescriptor/alphablendoperation.md): The blend operation assigned for the alpha data.
- [rgbBlendOperation](mtlrenderpipelinecolorattachmentdescriptor/rgbblendoperation.md): The blend operation assigned for the RGB data.

# MTLBlendOperation (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.

## Declaration

```objectivec
enum MTLBlendOperation : NSUInteger;
```

## Topics

### Blend operations

- [MTLBlendOperationAdd](mtlblendoperation/add.md): Add portions of both source and destination pixel values.
- [MTLBlendOperationSubtract](mtlblendoperation/subtract.md): Subtract a portion of the destination pixel values from a portion of the source.
- [MTLBlendOperationReverseSubtract](mtlblendoperation/reversesubtract.md): Subtract a portion of the source values from a portion of the destination pixel values.
- [MTLBlendOperationMin](mtlblendoperation/min.md): Minimum of the source and destination pixel values.
- [MTLBlendOperationMax](mtlblendoperation/max.md): Maximum of the source and destination pixel values.

### Enumeration Cases

- [MTLBlendOperationUnspecialized](mtlblendoperation/unspecialized.md): Defers assigning the blend operation.

## See Also

### Controlling blend operations

- [blendingEnabled](mtlrenderpipelinecolorattachmentdescriptor/isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [alphaBlendOperation](mtlrenderpipelinecolorattachmentdescriptor/alphablendoperation.md): The blend operation assigned for the alpha data.
- [rgbBlendOperation](mtlrenderpipelinecolorattachmentdescriptor/rgbblendoperation.md): The blend operation assigned for the RGB data.
