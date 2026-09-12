> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/ispreview](https://developer.apple.com/documentation/screensaver/screensaverview/ispreview)

# isPreview (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.

## Declaration

```swift
var isPreview: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when it creates a smaller preview of your screen saver. When the value is [false](https://developer.apple.com/documentation/swift/false), your view matches the size of the screen. Use this property to adjust the content you present. For example, you might change the drawing parameters or data you display in your view.

## See Also

### Drawing the view

- [draw(\_:)](draw%28__%29.md): Draws the screen saver view.

# preview (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver view is set to a size suitable for previewing its content.

## Declaration

```objectivec
@property (atomic, readonly, getter=isPreview) BOOL preview;
```

<a id="Discussion"></a>

## Discussion

The system sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when it creates a smaller preview of your screen saver. When the value is [false](https://developer.apple.com/documentation/swift/false), your view matches the size of the screen. Use this property to adjust the content you present. For example, you might change the drawing parameters or data you display in your view.

## See Also

### Drawing the view

- [drawRect:](draw%28__%29.md): Draws the screen saver view.
