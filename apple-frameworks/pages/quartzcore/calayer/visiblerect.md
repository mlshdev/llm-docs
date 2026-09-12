> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/visiblerect](https://developer.apple.com/documentation/quartzcore/calayer/visiblerect)

# visibleRect (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The visible region of the layer in its own coordinate space.

## Declaration

```swift
var visibleRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The visible region is the area not clipped by the containing scroll layer.

## See Also

### Scrolling

- [scroll(\_:)](scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.
- [scrollRectToVisible(\_:)](scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.

# visibleRect (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The visible region of the layer in its own coordinate space.

## Declaration

```objectivec
@property (readonly) CGRect visibleRect;
```

<a id="Discussion"></a>

## Discussion

The visible region is the area not clipped by the containing scroll layer.

## See Also

### Scrolling

- [scrollPoint:](scroll%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified point lies at the origin of the scroll layer.
- [scrollRectToVisible:](scrollrecttovisible%28__%29.md): Initiates a scroll in the layer’s closest ancestor scroll layer so that the specified rectangle becomes visible.
