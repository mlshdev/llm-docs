> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/metallic-swift.struct/scale](https://developer.apple.com/documentation/realitykit/custommaterial/metallic-swift.struct/scale)

# scale

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The reflectiveness value for the entire entity or a multiplier for the metallic texture.

## Declaration

```swift
var scale: Float
```

<a id="discussion"></a>

## Discussion

This property is an input to your material’s surface shader. Although you can choose how to use the `scale` value in your shader, RealityKit provides this property to control the reflectiveness of the entire entity when there’s no texture, or to function as a multiplier to the values you sample from the texture.

## See Also

### Accessing metallic data

- [texture](texture.md): The reflectiveness as a UV-mapped image texture.
