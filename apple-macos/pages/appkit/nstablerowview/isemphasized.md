> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/isemphasized](https://developer.apple.com/documentation/appkit/nstablerowview/isemphasized)

# isEmphasized (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines whether the row will draw with the alternate or secondary color (unless overridden).

## Declaration

```swift
var isEmphasized: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When emphasized is [true](https://developer.apple.com/documentation/swift/true), the view will draw with the [alternateSelectedControlColor](../nscolor/alternateselectedcontrolcolor.md) defined by [NSColor](../nscolor.md). When [false](https://developer.apple.com/documentation/swift/false) it will use the [secondarySelectedControlColor](../nscolor/secondaryselectedcontrolcolor.md) defined by [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [Table View](../table-view.md): Display custom data in rows and columns.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Display Style

- [interiorBackgroundStyle](interiorbackgroundstyle.md): Specifies how the subviews should draw.
- [isFloating](isfloating.md): Specifies whether the row is drawn using the floating style.

# emphasized (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines whether the row will draw with the alternate or secondary color (unless overridden).

## Declaration

```objectivec
@property (getter=isEmphasized) BOOL emphasized;
```

<a id="Discussion"></a>

## Discussion

When emphasized is [true](https://developer.apple.com/documentation/swift/true), the view will draw with the [alternateSelectedControlColor](../nscolor/alternateselectedcontrolcolor.md) defined by [NSColor](../nscolor.md). When [false](https://developer.apple.com/documentation/swift/false) it will use the [secondarySelectedControlColor](../nscolor/secondaryselectedcontrolcolor.md) defined by [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [Table View](../table-view.md): Display custom data in rows and columns.
- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.

### Display Style

- [interiorBackgroundStyle](interiorbackgroundstyle.md): Specifies how the subviews should draw.
- [floating](isfloating.md): Specifies whether the row is drawn using the floating style.
