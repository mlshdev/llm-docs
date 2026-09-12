> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/contentview](https://developer.apple.com/documentation/appkit/nsbox/contentview)

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s content view.

## Declaration

```swift
var contentView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The content view of the `NSBox` object. The content view is created automatically when the box is created and resized as the box is resized (you should never send frame-altering messages directly to a box’s content view). You can replace it with an `NSView` of your own.

## See Also

### Managing Content

- [contentViewMargins](contentviewmargins.md): The distances between the border and the content view.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s content view.

## Declaration

```objectivec
@property (strong, nullable) NSView * contentView;
```

<a id="Discussion"></a>

## Discussion

The content view of the `NSBox` object. The content view is created automatically when the box is created and resized as the box is resized (you should never send frame-altering messages directly to a box’s content view). You can replace it with an `NSView` of your own.

## See Also

### Managing Content

- [contentViewMargins](contentviewmargins.md): The distances between the border and the content view.
