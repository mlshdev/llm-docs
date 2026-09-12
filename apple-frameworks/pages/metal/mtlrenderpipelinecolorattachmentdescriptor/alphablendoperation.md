> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/alphablendoperation](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/alphablendoperation)

# alphaBlendOperation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The blend operation assigned for the alpha data.

## Declaration

```swift
var alphaBlendOperation: MTLBlendOperation { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendOperation.add](../mtlblendoperation/add.md).

## See Also

### Controlling blend operations

- [isBlendingEnabled](isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [rgbBlendOperation](rgbblendoperation.md): The blend operation assigned for the RGB data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.

# alphaBlendOperation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The blend operation assigned for the alpha data.

## Declaration

```objectivec
@property (nonatomic) MTLBlendOperation alphaBlendOperation;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendOperationAdd](../mtlblendoperation/add.md).

## See Also

### Controlling blend operations

- [blendingEnabled](isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [rgbBlendOperation](rgbblendoperation.md): The blend operation assigned for the RGB data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.
