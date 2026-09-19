> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/aspectratio(for:)

# aspectRatio(for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

The aspect ratio of the image this component will present for the requested viewing mode.

## Declaration

```swift
func aspectRatio(for viewingMode: ImagePresentationComponent.ViewingMode) -> Float?
```

<a id="return-value"></a>

## Return Value

Returns `nil` if the requested viewing mode is not in the component’s `availableViewingModes` set.
