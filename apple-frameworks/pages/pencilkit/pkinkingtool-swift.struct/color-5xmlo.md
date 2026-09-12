> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct/color-5xmlo](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct/color-5xmlo)

# color

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The color of the ink.

## Declaration

```swift
var color: UIColor { get set }
```

<a id="Discussion"></a>

## Discussion

The alpha of the final color may vary due to input from Apple Pencil. For example, light pressure from Apple Pencil introduces more transparency into the final color, while additional force increases opacity to create a more solid line.

## See Also

### Getting the inking tool attributes

- [color](color-22zaw.md): The color of the ink.
- [width](width.md): The width of the ink.
- [ink](ink.md): The ink used by this inking tool.
