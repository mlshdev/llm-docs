> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/horizontalscrollelasticity](https://developer.apple.com/documentation/appkit/nsscrollview/horizontalscrollelasticity)

# horizontalScrollElasticity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll view’s horizontal scrolling elasticity mode.

## Declaration

```swift
var horizontalScrollElasticity: NSScrollView.Elasticity { get set }
```

<a id="Discussion"></a>

## Discussion

A scroll view can scroll its contents past its bounds to achieve an elastic effect.

When set to [NSScrollView.Elasticity.automatic](elasticity/automatic.md), scrolling the horizontal axis beyond its document bounds only occurs if the document width is greater than the view width, or the vertical scroller is hidden and the horizontal scroller is visible. The default value is [NSScrollView.Elasticity.automatic](elasticity/automatic.md).

See [NSScrollView.Elasticity](elasticity.md) for possible values.

## See Also

### Specifying the Scroll View Elasticity

- [verticalScrollElasticity](verticalscrollelasticity.md): The scroll view’s vertical scrolling elasticity mode.

# horizontalScrollElasticity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll view’s horizontal scrolling elasticity mode.

## Declaration

```objectivec
@property NSScrollElasticity horizontalScrollElasticity;
```

<a id="Discussion"></a>

## Discussion

A scroll view can scroll its contents past its bounds to achieve an elastic effect.

When set to [NSScrollElasticityAutomatic](elasticity/automatic.md), scrolling the horizontal axis beyond its document bounds only occurs if the document width is greater than the view width, or the vertical scroller is hidden and the horizontal scroller is visible. The default value is [NSScrollElasticityAutomatic](elasticity/automatic.md).

See [NSScrollElasticity](elasticity.md) for possible values.

## See Also

### Specifying the Scroll View Elasticity

- [verticalScrollElasticity](verticalscrollelasticity.md): The scroll view’s vertical scrolling elasticity mode.
