> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/init(componentnoises:selectionnoise:)](https://developer.apple.com/documentation/gameplaykit/gknoise/init(componentnoises:selectionnoise:))

# init(componentNoises:selectionNoise:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a noise object by combining the specified noise objects, using another noise object to select which regions of the output correspond to which input noise.

## Declaration

```swift
convenience init(componentNoises noises: [GKNoise], selectionNoise: GKNoise)
```

## Parameters

- `noises`: The array of noise objects to combine.
- `selectionNoise`: A noise object whose values determine which object from the `noises` array contributes to which region of the generated output.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [init(componentNoises:selectionNoise:componentBoundaries:boundaryBlendDistances:)](init%28componentnoises_selectionnoise_componentboundaries_boundaryblenddistances_%29.md) method, but automatically determines uniformly spaced boundaries based on the number of noise objects in the `noises` array, and using a blend distance of zero for each boundary. Together with these boundaries, the `selectionNoise` parameter determines which of the input noise objects appears in which region of generated noise.

For example, if the `noises` array contains two noise objects, the boundary value is zero: In regions where the `selectionNoise` field has negative values, the noise created by this method uses values from the first element of the `noises` array, and in regions where the `selectionNoise` field has positive values, the created noise uses values from the second element in the `noises` array.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556365@2x.png)

## See Also

### Creating Noise by Combining Noise

- [init(componentNoises:selectionNoise:componentBoundaries:boundaryBlendDistances:)](init%28componentnoises_selectionnoise_componentboundaries_boundaryblenddistances_%29.md): Creates a noise object by combining the specified noise objects, using another noise object and the specified boundaries to select which regions of the output correspond to which input noise.

# noiseWithComponentNoises:selectionNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a noise object by combining the specified noise objects, using another noise object to select which regions of the output correspond to which input noise.

## Declaration

```objectivec
+ (instancetype) noiseWithComponentNoises:(NSArray<GKNoise *> *) noises selectionNoise:(GKNoise *) selectionNoise;
```

## Parameters

- `noises`: The array of noise objects to combine.
- `selectionNoise`: A noise object whose values determine which object from the `noises` array contributes to which region of the generated output.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

This method is equivalent to the [noiseWithComponentNoises:selectionNoise:componentBoundaries:boundaryBlendDistances:](init%28componentnoises_selectionnoise_componentboundaries_boundaryblenddistances_%29.md) method, but automatically determines uniformly spaced boundaries based on the number of noise objects in the `noises` array, and using a blend distance of zero for each boundary. Together with these boundaries, the `selectionNoise` parameter determines which of the input noise objects appears in which region of generated noise.

For example, if the `noises` array contains two noise objects, the boundary value is zero: In regions where the `selectionNoise` field has negative values, the noise created by this method uses values from the first element of the `noises` array, and in regions where the `selectionNoise` field has positive values, the created noise uses values from the second element in the `noises` array.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556365@2x.png)

## See Also

### Creating Noise by Combining Noise

- [noiseWithComponentNoises:selectionNoise:componentBoundaries:boundaryBlendDistances:](init%28componentnoises_selectionnoise_componentboundaries_boundaryblenddistances_%29.md): Creates a noise object by combining the specified noise objects, using another noise object and the specified boundaries to select which regions of the output correspond to which input noise.
