> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderbarcontainer/findbarview](https://developer.apple.com/documentation/appkit/nstextfinderbarcontainer/findbarview)

# findBarView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view assigned by the text bar as the find bar view for the container.

## Declaration

```swift
var findBarView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is managed by `NSTextFinder` and you must not set this property.

The container may freely modify the view’s width, but should not modify its height.

## See Also

### Find Bar View

- [contentView()](contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.
- [isFindBarVisible](isfindbarvisible.md): Returns whether the container should display its find bar.

# findBarView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view assigned by the text bar as the find bar view for the container.

## Declaration

```objectivec
@property (strong, nullable) NSView * findBarView;
```

<a id="Discussion"></a>

## Discussion

This property is managed by `NSTextFinder` and you must not set this property.

The container may freely modify the view’s width, but should not modify its height.

## See Also

### Find Bar View

- [contentView](contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.
- [findBarVisible](isfindbarvisible.md): Returns whether the container should display its find bar.
