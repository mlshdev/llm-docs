> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothgrabcomponent/grabmode/ray

# ray

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Grabbing will be performed using a ray.

## Declaration

```swift
static var ray: ClothGrabComponent.GrabMode { get }
```

<a id="discussion"></a>

## Discussion

The translation of the entity determines the origin of the ray, and the forward vector determines the ray direction.

## See Also

### Creating a grab mode

- [volume(shape:)](volume%28shape_%29.md): Grabbing will be performed using a volume of the given shape.
