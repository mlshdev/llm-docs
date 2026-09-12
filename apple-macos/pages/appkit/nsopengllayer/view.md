> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopengllayer/view](https://developer.apple.com/documentation/appkit/nsopengllayer/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the view associated with the layer.

> Please use CAMetalLayer instead.

## Declaration

```swift
weak var view: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

Subclasses shouldn’t invoke setView:, but can override it if desired to intercept the layer’s association to, or dissociation from, a view.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Returns the view associated with the layer.

> Please use CAMetalLayer instead.

## Declaration

```objectivec
@property (weak, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

Subclasses shouldn’t invoke setView:, but can override it if desired to intercept the layer’s association to, or dissociation from, a view.
