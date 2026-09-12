> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/contentviewmargins](https://developer.apple.com/documentation/appkit/nsbox/contentviewmargins)

# contentViewMargins (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The distances between the border and the content view.

## Declaration

```swift
var contentViewMargins: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The width (the horizontal distance between the innermost edge of the border and the content view) and height  (the vertical distance between the innermost edge of the border and the content view) describing the distance between the border and the content view. By default, these are both 5.0 in the box’s coordinate system.

Unlike changing a box’s other attributes, such as its title position or border type, changing the offsets doesn’t automatically resize the content view. In general, you should send a [sizeToFit()](sizetofit%28%29.md) message to the box after changing the size of its offsets. This message causes the content view to remain unchanged while the box is sized to fit around it.

## See Also

### Managing Content

- [contentView](contentview.md): The receiver’s content view.

# contentViewMargins (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The distances between the border and the content view.

## Declaration

```objectivec
@property NSSize contentViewMargins;
```

<a id="Discussion"></a>

## Discussion

The width (the horizontal distance between the innermost edge of the border and the content view) and height  (the vertical distance between the innermost edge of the border and the content view) describing the distance between the border and the content view. By default, these are both 5.0 in the box’s coordinate system.

Unlike changing a box’s other attributes, such as its title position or border type, changing the offsets doesn’t automatically resize the content view. In general, you should send a [sizeToFit](sizetofit%28%29.md) message to the box after changing the size of its offsets. This message causes the content view to remain unchanged while the box is sized to fit around it.

## See Also

### Managing Content

- [contentView](contentview.md): The receiver’s content view.
