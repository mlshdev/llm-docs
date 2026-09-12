> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocktile/contentview](https://developer.apple.com/documentation/appkit/nsdocktile/contentview)

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The view to use for drawing the dock tile contents.

## Declaration

```swift
var contentView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The view you specify should be height and width resizable.

Cocoa does not automatically redraw the contents of your dock tile. Instead, your application must explicitly send display messages to the dock tile object whenever the contents of your view change and need to be redrawn. Your dock tile view is responsible for drawing the entire contents of the dock tile. Your view does not need to draw the application or custom string badges.

## See Also

### Related Documentation

- [display()](display%28%29.md): Redraws the dock tile’s content.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The view to use for drawing the dock tile contents.

## Declaration

```objectivec
@property (strong, nullable) NSView * contentView;
```

<a id="Discussion"></a>

## Discussion

The view you specify should be height and width resizable.

Cocoa does not automatically redraw the contents of your dock tile. Instead, your application must explicitly send display messages to the dock tile object whenever the contents of your view change and need to be redrawn. Your dock tile view is responsible for drawing the entire contents of the dock tile. Your view does not need to draw the application or custom string badges.

## See Also

### Related Documentation

- [display](display%28%29.md): Redraws the dock tile’s content.
