> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/color](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/color)

# color (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The color of the ink.

## Declaration

```swift
var color: UIColor { get }
```

```swift
var color: NSColor { get }
```

<a id="Discussion"></a>

## Discussion

The alpha of the final color may vary due to input from Apple Pencil. For example, light pressure from Apple Pencil introduces more transparency into the final color, while additional force increases opacity to create a more solid line.

## See Also

### Getting the inking tool attributes

- [width](width.md): The base line width for new content.
- [ink](ink.md): The ink that this tool creates strokes with.

# color (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The color of the ink.

## Declaration

```objectivec
@property (nonatomic, readonly) UIColor * color;
```

```objectivec
@property (nonatomic, readonly) NSColor * color;
```

<a id="Discussion"></a>

## Discussion

The alpha of the final color may vary due to input from Apple Pencil. For example, light pressure from Apple Pencil introduces more transparency into the final color, while additional force increases opacity to create a more solid line.

## See Also

### Getting the inking tool attributes

- [width](width.md): The base line width for new content.
- [ink](ink.md): The ink that this tool creates strokes with.
