> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktile/display()](https://developer.apple.com/documentation/appkit/nsdocktile/display())

# display() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Redraws the dock tile’s content.

## Declaration

```swift
func display()
```

<a id="Discussion"></a>

## Discussion

If a custom content view is provided, Cocoa calls the `drawRect:` method of that view (and its subviews) to draw the tile’s content.

You can call this method to force the redrawing of the dock tile contents. You might do this if the contents of the underlying application or window change in a way that would require a refreshing of the tile. Some types of system activity, such as resizing the dock, may trigger automatic redraws of the tile. In most cases, however, your application is responsible for triggering redraws.

Cocoa does not automatically redraw the contents of your dock tile. Instead, your application must explicitly send `display` messages to the dock tile object whenever the contents of your view change and need to be redrawn.

# display (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Redraws the dock tile’s content.

## Declaration

```objectivec
- (void) display;
```

<a id="Discussion"></a>

## Discussion

If a custom content view is provided, Cocoa calls the `drawRect:` method of that view (and its subviews) to draw the tile’s content.

You can call this method to force the redrawing of the dock tile contents. You might do this if the contents of the underlying application or window change in a way that would require a refreshing of the tile. Some types of system activity, such as resizing the dock, may trigger automatic redraws of the tile. In most cases, however, your application is responsible for triggering redraws.

Cocoa does not automatically redraw the contents of your dock tile. Instead, your application must explicitly send `display` messages to the dock tile object whenever the contents of your view change and need to be redrawn.
