> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerregion/latchingaxes](https://developer.apple.com/documentation/uikit/uipointerregion/latchingaxes)

# latchingAxes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Axes along which the region latches after a primary click.

## Declaration

```swift
var latchingAxes: UIAxis { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property, the [UIPointerStyle](../uipointerstyle.md) associated with this region locks in and only allows freeform movement along the axes you specify.

## See Also

### Configuring a region

- [rect](rect.md): The rectangle bounds of the region.
- [identifier](identifier-1tw1m.md): An optional identifier for the region.

# latchingAxes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Axes along which the region latches after a primary click.

## Declaration

```objectivec
@property (nonatomic) UIAxis latchingAxes;
```

<a id="Discussion"></a>

## Discussion

If you set this property, the [UIPointerStyle](../uipointerstyle.md) associated with this region locks in and only allows freeform movement along the axes you specify.

## See Also

### Configuring a region

- [rect](rect.md): The rectangle bounds of the region.
- [identifier](identifier-9i5wc.md): An optional identifier for the region.
