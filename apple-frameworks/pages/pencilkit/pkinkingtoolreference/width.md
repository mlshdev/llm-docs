> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/width](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/width)

# width (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The base line width for new content.

## Declaration

```swift
var width: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The actual line width at any given point varies based on input from Apple Pencil. For finger-based drawing, the line width is equal to the value in this property.

## See Also

### Getting the inking tool attributes

- [color](color.md): The color of the ink.
- [ink](ink.md): The ink that this tool creates strokes with.

# width (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The base line width for new content.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat width;
```

<a id="Discussion"></a>

## Discussion

The actual line width at any given point varies based on input from Apple Pencil. For finger-based drawing, the line width is equal to the value in this property.

## See Also

### Getting the inking tool attributes

- [color](color.md): The color of the ink.
- [ink](ink.md): The ink that this tool creates strokes with.
