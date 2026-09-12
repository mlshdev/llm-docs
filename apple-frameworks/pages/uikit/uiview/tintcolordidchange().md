> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/tintcolordidchange()](https://developer.apple.com/documentation/uikit/uiview/tintcolordidchange())

# tintColorDidChange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called by the system when the tint color property changes.

## Declaration

```swift
func tintColorDidChange()
```

<a id="Discussion"></a>

## Discussion

The system calls this method on a view when your code changes the value of the [tintColor](tintcolor.md) property on that view. In addition, the system calls this method on a subview that inherits a changed interaction tint color.

In your implementation, refresh the view rendering as needed.

## See Also

### Related Documentation

- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.

### Drawing and updating the view

- [draw(\_:)](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Marks the receiver’s entire bounds rectangle as needing to be redrawn.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the specified rectangle of the receiver as needing to be redrawn.
- [contentScaleFactor](contentscalefactor.md): The scale factor applied to the view.

# tintColorDidChange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Called by the system when the tint color property changes.

## Declaration

```objectivec
- (void) tintColorDidChange;
```

<a id="Discussion"></a>

## Discussion

The system calls this method on a view when your code changes the value of the [tintColor](tintcolor.md) property on that view. In addition, the system calls this method on a subview that inherits a changed interaction tint color.

In your implementation, refresh the view rendering as needed.

## See Also

### Related Documentation

- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.

### Drawing and updating the view

- [drawRect:](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Marks the receiver’s entire bounds rectangle as needing to be redrawn.
- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the specified rectangle of the receiver as needing to be redrawn.
- [contentScaleFactor](contentscalefactor.md): The scale factor applied to the view.
