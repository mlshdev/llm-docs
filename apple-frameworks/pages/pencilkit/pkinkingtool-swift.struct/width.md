> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct/width](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct/width)

# width

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

The width of the ink.

## Declaration

```swift
var width: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The actual line width at any given point varies based on input from Apple Pencil. For finger-based drawing, the line width is equal to the value in this property.

## See Also

### Getting the inking tool attributes

- [color](color-5xmlo.md): The color of the ink.
- [color](color-22zaw.md): The color of the ink.
- [ink](ink.md): The ink used by this inking tool.
