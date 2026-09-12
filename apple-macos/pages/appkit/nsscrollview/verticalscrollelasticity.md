> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/verticalscrollelasticity](https://developer.apple.com/documentation/appkit/nsscrollview/verticalscrollelasticity)

# verticalScrollElasticity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll view’s vertical scrolling elasticity mode.

## Declaration

```swift
var verticalScrollElasticity: NSScrollView.Elasticity { get set }
```

<a id="Discussion"></a>

## Discussion

A scroll view can scroll its contents past its bounds to achieve an elastic effect.

When set to [NSScrollView.Elasticity.automatic](elasticity/automatic.md), scrolling the vertical axis beyond its document bounds only occurs if any of the following are true: the vertical scroller is visible, the content height is greater than view height, or the horizontal scroller hidden. The default value is [NSScrollView.Elasticity.automatic](elasticity/automatic.md).

See [NSScrollView.Elasticity](elasticity.md) for possible values.

## See Also

### Specifying the Scroll View Elasticity

- [horizontalScrollElasticity](horizontalscrollelasticity.md): The scroll view’s horizontal scrolling elasticity mode.

# verticalScrollElasticity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll view’s vertical scrolling elasticity mode.

## Declaration

```objectivec
@property NSScrollElasticity verticalScrollElasticity;
```

<a id="Discussion"></a>

## Discussion

A scroll view can scroll its contents past its bounds to achieve an elastic effect.

When set to [NSScrollElasticityAutomatic](elasticity/automatic.md), scrolling the vertical axis beyond its document bounds only occurs if any of the following are true: the vertical scroller is visible, the content height is greater than view height, or the horizontal scroller hidden. The default value is [NSScrollElasticityAutomatic](elasticity/automatic.md).

See [NSScrollElasticity](elasticity.md) for possible values.

## See Also

### Specifying the Scroll View Elasticity

- [horizontalScrollElasticity](horizontalscrollelasticity.md): The scroll view’s horizontal scrolling elasticity mode.
