> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderbarcontainer/isfindbarvisible](https://developer.apple.com/documentation/appkit/nstextfinderbarcontainer/isfindbarvisible)

# isFindBarVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the container should display its find bar.

## Declaration

```swift
var isFindBarVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the [findBarView](findbarview.md) property is set, then the find bar is displayed by the container. Otherwise, the find bar is not displayed.

The default value should be [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Find Bar View

- [findBarView](findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [contentView()](contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.

# findBarVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the container should display its find bar.

## Declaration

```objectivec
@property (getter=isFindBarVisible) BOOL findBarVisible;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the [findBarView](findbarview.md) property is set, then the find bar is displayed by the container. Otherwise, the find bar is not displayed.

The default value should be [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Find Bar View

- [findBarView](findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [contentView](contentview%28%29.md): A view hierarchy that contains all the views which display the contents being searched.
