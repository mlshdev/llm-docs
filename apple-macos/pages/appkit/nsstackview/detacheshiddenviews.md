> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/detacheshiddenviews](https://developer.apple.com/documentation/appkit/nsstackview/detacheshiddenviews)

# detachesHiddenViews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.

## Declaration

```swift
var detachesHiddenViews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), setting the [isHidden](../nsview/ishidden.md) property of a view to [true](https://developer.apple.com/documentation/swift/true) causes the stack view to remove hidden views from its view hierarchy and put them in the [detachedViews](detachedviews.md) property. Changing the view’s [isHidden](../nsview/ishidden.md) property to [false](https://developer.apple.com/documentation/swift/false) causes the stack view to add the view back to the view hierarchy. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), views remain in the view hierarchy, even when they are hidden. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Dynamic Behavior for a Stack View

- [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [setHuggingPriority(\_:for:)](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.

# detachesHiddenViews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that indicates whether the stack view removes hidden views from its view hierarchy.

## Declaration

```objectivec
@property BOOL detachesHiddenViews;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), setting the [hidden](../nsview/ishidden.md) property of a view to [true](https://developer.apple.com/documentation/swift/true) causes the stack view to remove hidden views from its view hierarchy and put them in the [detachedViews](detachedviews.md) property. Changing the view’s [hidden](../nsview/ishidden.md) property to [false](https://developer.apple.com/documentation/swift/false) causes the stack view to add the view back to the view hierarchy. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), views remain in the view hierarchy, even when they are hidden. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Dynamic Behavior for a Stack View

- [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md): Sets the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [setHuggingPriority:forOrientation:](sethuggingpriority%28__for_%29.md): Sets the Auto Layout priority for the stack view to minimize its size, for a specified user interface axis.
