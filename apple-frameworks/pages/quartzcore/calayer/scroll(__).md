> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/calayer/scroll(_:)

# scroll(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.

## Declaration

```swift
func scroll(_ p: CGPoint)
```

## Parameters

- `p`: The point in the current layer that should be scrolled into position.

<a id="Discussion"></a>

## Discussion

If the layer is not contained by a [CAScrollLayer](../cascrolllayer.md) object, this method does nothing.

## See Also

### Scrolling

- [visibleRect](visiblerect.md): The visible region of the layer in its own coordinate space.
- [scrollRectToVisible(\_:)](scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

# scrollPoint: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.

## Declaration

```objectivec
- (void) scrollPoint:(CGPoint) p;
```

## Parameters

- `p`: The point in the current layer that should be scrolled into position.

<a id="Discussion"></a>

## Discussion

If the layer is not contained by a [CAScrollLayer](../cascrolllayer.md) object, this method does nothing.

## See Also

### Scrolling

- [visibleRect](visiblerect.md): The visible region of the layer in its own coordinate space.
- [scrollRectToVisible:](scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.
