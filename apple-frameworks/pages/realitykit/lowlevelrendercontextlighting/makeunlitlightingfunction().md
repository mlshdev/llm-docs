> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextlighting/makeunlitlightingfunction()](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextlighting/makeunlitlightingfunction())

# makeUnlitLightingFunction()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an unlit lighting function that emits the surface emissive color directly, without any lighting calculations.

## Declaration

```swift
func makeUnlitLightingFunction() -> sending LowLevelMaterialResource.LightingFunction
```

<a id="return-value"></a>

## Return Value

An unlit [LowLevelMaterialResource.LightingFunction](../lowlevelmaterialresource/lightingfunction.md).

## See Also

### Making lighting functions

- [makeImageBasedLightingFunction()](makeimagebasedlightingfunction%28%29.md): Returns a lighting function using image-based lighting (IBL).
