> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerregion/rect](https://developer.apple.com/documentation/uikit/uipointerregion/rect)

# rect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The rectangle bounds of the region.

## Declaration

```swift
var rect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This rectangle must be in the [UIPointerInteraction](../uipointerinteraction.md) view’s coordinate space.

## See Also

### Configuring a region

- [identifier](identifier-1tw1m.md): An optional identifier for the region.
- [latchingAxes](latchingaxes.md): Axes along which the region latches after a primary click.

# rect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

The rectangle bounds of the region.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect rect;
```

<a id="Discussion"></a>

## Discussion

This rectangle must be in the [UIPointerInteraction](../uipointerinteraction.md) view’s coordinate space.

## See Also

### Configuring a region

- [identifier](identifier-9i5wc.md): An optional identifier for the region.
- [latchingAxes](latchingaxes.md): Axes along which the region latches after a primary click.
