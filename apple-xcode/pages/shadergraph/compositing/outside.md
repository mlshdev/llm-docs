> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/compositing/outside](https://developer.apple.com/documentation/shadergraph/compositing/outside)

# Outside

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

Multiplies (1 - mask) to all channels of the input.

<a id="Parameter-Types"></a>

## Parameter Types

**Outside (float)**

| Input | Type |
| --- | --- |
| `In` | Float |
| `Mask` | Float |

| Output | Type |
| --- | --- |
| `Out` | Float |

**Outside (half)**

| Input | Type |
| --- | --- |
| `In` | Half |
| `Mask` | Half |

| Output | Type |
| --- | --- |
| `Out` | Half |

**Outside (color3f)**

| Input | Type |
| --- | --- |
| `In` | Color3 |
| `Mask` | Float |

| Output | Type |
| --- | --- |
| `Out` | Color3 |

**Outside (color4f)**

| Input | Type |
| --- | --- |
| `In` | Color4 |
| `Mask` | Float |

| Output | Type |
| --- | --- |
| `Out` | Color4 |

<a id="Parameter-descriptions"></a>

## Parameter descriptions

- **`In`**: The input value to which the mask applies.
- **`Mask`**: The value by which the input is multiplied.

<a id="Discussion"></a>

## Discussion

Below is an example of a simple node graph that uses the `Outside` node to apply a mask to a brick texture:

![](https://developer.apple.com/images/ShaderGraph-Docs/OutsideGraph.png)

Below, the resulting texture applies to a cube:

![Mask](https://developer.apple.com/images/ShaderGraph-Docs/InsideMaterial1.png)

![Input](https://developer.apple.com/images/ShaderGraph-Docs/InsideMaterial2.png)

![](https://developer.apple.com/images/ShaderGraph-Docs/OutsideMaterial.png)

## See Also

### Nodes

- [Premultiply](premultiply.md): Multiplies the RGB channels of the input by the alpha channel.
- [Unpremultiply](unpremultiply.md): Divides the RGB channels of the input by the alpha channel.
- [Additive Mix](additive-mix.md): Adds foreground and background values.
- [Subtractive Mix](subtractive-mix.md): Subtracts foreground from background values.
- [Difference](difference.md): Outputs the distance between foreground and background values.
- [Burn](burn.md): A blend operation that darkens the foreground layer using the background.
- [Dodge](dodge.md): A blend operation that lightens the background layer depending on the foreground.
- [Screen](screen.md): A blend operation that lightens areas that are darker than white.
- [Overlay](overlay.md): A blend operation that multiplies dark areas and screens light areas.
- [Disjoint Over](disjoint-over.md): A merge operation that layers foreground over background color, but assumes no overlap in partially transparent areas covered by both.
- [In](in.md): Outputs areas of foreground that overlap with the alpha of background.
- [Mask](mask.md): Outputs areas of background that overlap with the alpha of foreground.
- [Matte](matte.md): A merge operation that layers premultiplied foreground over background.
- [Out](out.md): Outputs areas of foreground that do not overlap with background.
- [Over](over.md): A merge operation that layers foreground over background, using the alpha of the foreground.
