> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerregion/identifier-9i5wc](https://developer.apple.com/documentation/uikit/uipointerregion/identifier-9i5wc)

# identifier

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An optional identifier for the region.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<NSObject> identifier;
```

<a id="Discussion"></a>

## Discussion

Use this value to identify the [UIPointerRegion](../uipointerregion.md) in subsequent pointer interaction delegate calls.

## See Also

### Configuring a region

- [rect](rect.md): The rectangle bounds of the region.
- [latchingAxes](latchingaxes.md): Axes along which the region latches after a primary click.
