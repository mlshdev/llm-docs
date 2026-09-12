> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawbutton(_:_:)](https://developer.apple.com/documentation/appkit/nsdrawbutton(_:_:))

# NSDrawButton(\_:\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle representing a user-interface button.

## Declaration

```swift
func NSDrawButton(_ rect: NSRect, _ clipRect: NSRect)
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

<a id="Discussion"></a>

## Discussion

Draws a gray-filled rectangle, used to signify a user-interface button. Since this function is often used to draw the border of a view, the `aRect` parameter typically contains the view’s bounds rectangle. For an Aqua button, use an [NSButton](nsbutton.md) object instead.

This function fills the specified rectangle with light gray. This function is designed for rectangles that are defined in unscaled, unrotated coordinate systems (that is, where the y axis is vertical, the x axis is horizontal, and a unit along either axis is equal to 1 screen pixel). The coordinate system can be either flipped or unflipped. The sides of the rectangle should lie on pixel boundaries.

## See Also

### Drawing Backgrounds

- [NSDrawWindowBackground(\_:)](nsdrawwindowbackground%28__%29.md): Draws the window’s default background pattern into the specified rectangle of the currently focused view.

# NSDrawButton (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle representing a user-interface button.

## Declaration

```objectivec
extern void NSDrawButton(NSRect rect, NSRect clipRect);
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

<a id="Discussion"></a>

## Discussion

Draws a gray-filled rectangle, used to signify a user-interface button. Since this function is often used to draw the border of a view, the `aRect` parameter typically contains the view’s bounds rectangle. For an Aqua button, use an [NSButton](nsbutton.md) object instead.

This function fills the specified rectangle with light gray. This function is designed for rectangles that are defined in unscaled, unrotated coordinate systems (that is, where the y axis is vertical, the x axis is horizontal, and a unit along either axis is equal to 1 screen pixel). The coordinate system can be either flipped or unflipped. The sides of the rectangle should lie on pixel boundaries.

## See Also

### Drawing Backgrounds

- [NSDrawWindowBackground](nsdrawwindowbackground%28__%29.md): Draws the window’s default background pattern into the specified rectangle of the currently focused view.
