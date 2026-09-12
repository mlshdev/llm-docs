> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/scrollrecttovisible(_:)](https://developer.apple.com/documentation/quartzcore/calayer/scrollrecttovisible(_:))

# scrollRectToVisible(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

## Declaration

```swift
func scrollRectToVisible(_ r: CGRect)
```

## Parameters

- `r`: The rectangle to be made visible.

<a id="Discussion"></a>

## Discussion

If the layer is not contained by a [CAScrollLayer](../cascrolllayer.md) object, this method does nothing.

## See Also

### Scrolling

- [visibleRect](visiblerect.md): The visible region of the layer in its own coordinate space.
- [scroll(\_:)](scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.

# scrollRectToVisible: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

## Declaration

```objectivec
- (void) scrollRectToVisible:(CGRect) r;
```

## Parameters

- `r`: The rectangle to be made visible.

<a id="Discussion"></a>

## Discussion

If the layer is not contained by a [CAScrollLayer](../cascrolllayer.md) object, this method does nothing.

## See Also

### Scrolling

- [visibleRect](visiblerect.md): The visible region of the layer in its own coordinate space.
- [scrollPoint:](scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.
