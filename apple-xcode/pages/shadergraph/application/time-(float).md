> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/application/time-(float)](https://developer.apple.com/documentation/shadergraph/application/time-(float))

# Time (float)

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

The current time in seconds.

<a id="Parameter-Types"></a>

## Parameter Types

| Output | Type |
| --- | --- |
| `Out` | Float |

<a id="Discussion"></a>

## Discussion

The `Time` node outputs a float that represents the current time in seconds. When applied or connected to other nodes, this value changes constantly, allowing for dynamic materials. Below is an example of a simple node graph that causes an image texture to scroll in real time:

![](https://developer.apple.com/images/ShaderGraph-Docs/TimeGraph.png)

Adding Time to the incoming texture coordinates horizontal component causes the texture to “scroll” along the horizontal plane. Below, the resulting texture applies to a cube:

Video: TimeMaterialVideo

## See Also

### Nodes

- [Up Direction](up-direction.md): The direction of the up vector.
