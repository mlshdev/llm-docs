> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem/view](https://developer.apple.com/documentation/appkit/nstabviewitem/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets the view associated with the receiver to `view`.

## Declaration

```swift
var view: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

This is the view displayed when a user clicks the tab. When you set a new view, the old view is released.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets the view associated with the receiver to `view`.

## Declaration

```objectivec
@property (strong, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

This is the view displayed when a user clicks the tab. When you set a new view, the old view is released.
