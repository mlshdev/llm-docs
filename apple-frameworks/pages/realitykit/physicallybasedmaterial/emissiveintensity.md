> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/emissiveintensity](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/emissiveintensity)

# emissiveIntensity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The intensity of light emitted by the entity.

## Declaration

```swift
var emissiveIntensity: Float { get set }
```

<a id="discussion"></a>

## Discussion

To make a material *emissive* and appear to emit light, set this property to a value greater than zero and set [emissiveColor](emissivecolor-swift.property.md) to a value other than black. RealityKit multiplies [emissiveColor](emissivecolor-swift.property.md) by this value, so the higher the value, the more intense the entity’s emission of light.

You can set this property to values greater than `1.0`.

## See Also

### Adding light emission

- [emissiveColor](emissivecolor-swift.property.md): The color of the light the entity emits.
