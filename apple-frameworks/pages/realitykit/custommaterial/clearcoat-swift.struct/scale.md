> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/clearcoat-swift.struct/scale](https://developer.apple.com/documentation/realitykit/custommaterial/clearcoat-swift.struct/scale)

# scale

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The intensity of the clearcoat.

## Declaration

```swift
var scale: Float
```

<a id="discussion"></a>

## Discussion

Use the scale value either to hold a uniform clearcoat value that applies to the entire entity, or use it as a multiplier to scale the clearcoat intensity sampled from the [texture](texture.md) property.

## See Also

### Accessing clearcoat values

- [texture](texture.md): The clearcoat intensity specified using a UV-mapped image.
