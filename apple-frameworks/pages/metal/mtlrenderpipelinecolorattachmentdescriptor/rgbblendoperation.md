> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/rgbblendoperation](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/rgbblendoperation)

# rgbBlendOperation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The blend operation assigned for the RGB data.

## Declaration

```swift
var rgbBlendOperation: MTLBlendOperation { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendOperation.add](../mtlblendoperation/add.md).

## See Also

### Controlling blend operations

- [isBlendingEnabled](isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [alphaBlendOperation](alphablendoperation.md): The blend operation assigned for the alpha data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.

# rgbBlendOperation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The blend operation assigned for the RGB data.

## Declaration

```objectivec
@property (nonatomic) MTLBlendOperation rgbBlendOperation;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendOperationAdd](../mtlblendoperation/add.md).

## See Also

### Controlling blend operations

- [blendingEnabled](isblendingenabled.md): A Boolean value that determines whether blending is enabled.
- [alphaBlendOperation](alphablendoperation.md): The blend operation assigned for the alpha data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.
