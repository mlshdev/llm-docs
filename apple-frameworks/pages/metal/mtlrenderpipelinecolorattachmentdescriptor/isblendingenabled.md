> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/isblendingenabled](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/isblendingenabled)

# isBlendingEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that determines whether blending is enabled.

## Declaration

```swift
var isBlendingEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), meaning blending is disabled and pixel values are unaffected by blending. Disabled blending is effectively the same as the `MTLBlendOperationAdd` blend operation with a source blend factor of `1.0` and a destination blend factor of `0.0` for both RGB and alpha.

If the value is [true](https://developer.apple.com/documentation/swift/true), blending is enabled and the blend descriptor property values are used to determine how source and destination color values are combined.

## See Also

### Controlling blend operations

- [alphaBlendOperation](alphablendoperation.md): The blend operation assigned for the alpha data.
- [rgbBlendOperation](rgbblendoperation.md): The blend operation assigned for the RGB data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.

# blendingEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that determines whether blending is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isBlendingEnabled) BOOL blendingEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), meaning blending is disabled and pixel values are unaffected by blending. Disabled blending is effectively the same as the `MTLBlendOperationAdd` blend operation with a source blend factor of `1.0` and a destination blend factor of `0.0` for both RGB and alpha.

If the value is [true](https://developer.apple.com/documentation/swift/true), blending is enabled and the blend descriptor property values are used to determine how source and destination color values are combined.

## See Also

### Controlling blend operations

- [alphaBlendOperation](alphablendoperation.md): The blend operation assigned for the alpha data.
- [rgbBlendOperation](rgbblendoperation.md): The blend operation assigned for the RGB data.
- [MTLBlendOperation](../mtlblendoperation.md): For every pixel, `MTLBlendOperation` determines how to combine and weight the source fragment values with the destination values. Some blend operations multiply the source values by a source blend factor (SBF), multiply the destination values by a destination blend factor (DBF), and then combine the results using addition or subtraction. Other blend operations use either a minimum or maximum function to determine the result.
