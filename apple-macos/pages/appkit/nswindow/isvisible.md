> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isvisible](https://developer.apple.com/documentation/appkit/nswindow/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).

## Declaration

```swift
var isVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is onscreen (even if it’s obscured by other windows); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [visibleRect](../nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Managing Window Visibility and Occlusion State

- [occlusionState](occlusionstate-swift.property.md): The occlusion state of the window.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).

## Declaration

```objectivec
@property (readonly, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is onscreen (even if it’s obscured by other windows); otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [visibleRect](../nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.

### Managing Window Visibility and Occlusion State

- [occlusionState](occlusionstate-swift.property.md): The occlusion state of the window.
