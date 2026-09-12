> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/set(in:)](https://developer.apple.com/documentation/appkit/nsfont/set(in:))

# set(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets this font as the font for the specified graphics context.

## Declaration

```swift
func set(in graphicsContext: NSGraphicsContext)
```

## Parameters

- `graphicsContext`: The graphics context for which the font is set.

<a id="Discussion"></a>

## Discussion

This method sets the font for the graphics system but does not affect the higher-level settings of the Cocoa text system, which are controlled by text attributes.

## See Also

### Using a Font to Draw

- [set()](set%28%29.md): Sets this font as the font for the current graphics context.

# setInContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets this font as the font for the specified graphics context.

## Declaration

```objectivec
- (void) setInContext:(NSGraphicsContext *) graphicsContext;
```

## Parameters

- `graphicsContext`: The graphics context for which the font is set.

<a id="Discussion"></a>

## Discussion

This method sets the font for the graphics system but does not affect the higher-level settings of the Cocoa text system, which are controlled by text attributes.

## See Also

### Using a Font to Draw

- [set](set%28%29.md): Sets this font as the font for the current graphics context.
