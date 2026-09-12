> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderbarcontainer/contentview()](https://developer.apple.com/documentation/appkit/nstextfinderbarcontainer/contentview())

# contentView() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

A view hierarchy that contains all the views which display the contents being searched.

## Declaration

```swift
optional func contentView() -> NSView?
```

<a id="return-value"></a>

## Return Value

The root view of the content view hierarchy.

<a id="Discussion"></a>

## Discussion

This content view defines the view hierarchy to be dimmed during incremental search, if the `NSTextFinder` instance’s [incrementalSearchingShouldDimContentView](../nstextfinder/incrementalsearchingshoulddimcontentview.md) is [true](https://developer.apple.com/documentation/swift/true). If this method is not implemented or returns `nil`, then the `NSTextFinder` instance will act as if [incrementalSearchingShouldDimContentView](../nstextfinder/incrementalsearchingshoulddimcontentview.md) is [false](https://developer.apple.com/documentation/swift/false)

## See Also

### Find Bar View

- [findBarView](findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [isFindBarVisible](isfindbarvisible.md): Returns whether the container should display its find bar.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

A view hierarchy that contains all the views which display the contents being searched.

## Declaration

```objectivec
- (NSView *) contentView;
```

<a id="return-value"></a>

## Return Value

The root view of the content view hierarchy.

<a id="Discussion"></a>

## Discussion

This content view defines the view hierarchy to be dimmed during incremental search, if the `NSTextFinder` instance’s [incrementalSearchingShouldDimContentView](../nstextfinder/incrementalsearchingshoulddimcontentview.md) is [true](https://developer.apple.com/documentation/swift/true). If this method is not implemented or returns `nil`, then the `NSTextFinder` instance will act as if [incrementalSearchingShouldDimContentView](../nstextfinder/incrementalsearchingshoulddimcontentview.md) is [false](https://developer.apple.com/documentation/swift/false)

## See Also

### Find Bar View

- [findBarView](findbarview.md): The view assigned by the text bar as the find bar view for the container.
- [findBarVisible](isfindbarvisible.md): Returns whether the container should display its find bar.
