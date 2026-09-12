> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/backgroundcolor](https://developer.apple.com/documentation/appkit/nsimage/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color for the image.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The background color is visible only if the drawn image representation does not completely cover all of the pixels available for the image’s current size.  The background color is ignored for cached image representations; such caches are always created with a white background. Assigning a new background color does not cause the receiver to recache itself.

The default color is transparent, as returned by the [clear](../nscolor/clear.md) method of `NSColor`.

## See Also

### Related Documentation

- [recache()](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.

### Managing Drawing Options

- [isValid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [capInsets](capinsets.md): The cap insets for the image.
- [resizingMode](resizingmode-swift.property.md): The resizing mode for the image.
- [NSImage.ResizingMode](resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color for the image.

## Declaration

```objectivec
@property (copy) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The background color is visible only if the drawn image representation does not completely cover all of the pixels available for the image’s current size.  The background color is ignored for cached image representations; such caches are always created with a white background. Assigning a new background color does not cause the receiver to recache itself.

The default color is transparent, as returned by the [clearColor](../nscolor/clear.md) method of `NSColor`.

## See Also

### Related Documentation

- [recache](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.

### Managing Drawing Options

- [valid](isvalid.md): A Boolean value that indicates whether it is possible to draw an image representation.
- [capInsets](capinsets.md): The cap insets for the image.
- [resizingMode](resizingmode-swift.property.md): The resizing mode for the image.
- [NSImageResizingMode](resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.
