> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/custommaterial/opacity/scale

# scale

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The amount of opacity specified as a single value.

## Declaration

```swift
var scale: Float
```

<a id="discussion"></a>

## Discussion

If [texture](texture.md) is `nil`, RealityKit uses this value for the opacity of the entire material. If [texture](texture.md) isn’t `nil`, RealityKit multiplies the value sampled from [texture](texture.md) by this property to calculate the final opacity values.

## See Also

### Accessing opacity data

- [texture](texture.md): The amount of opacity specified using a UV-mapped image.
