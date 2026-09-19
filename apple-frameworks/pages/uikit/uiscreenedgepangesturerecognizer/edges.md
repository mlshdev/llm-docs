> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiscreenedgepangesturerecognizer/edges

# edges (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

The acceptable starting edges for the gesture.

## Declaration

```swift
var edges: UIRectEdge { get set }
```

## Mentioned In

- [Handling pan gestures](../handling-pan-gestures.md)

<a id="Discussion"></a>

## Discussion

The edges you specify are always relative to the app’s current interface orientation. This behavior ensures that the gestures always occur from the same place in your user interface, regardless of the device’s current orientation.

## See Also

### Specifying the starting edges

- [UIRectEdge](../uirectedge.md): Constants that specify the edges of a rectangle.

# edges (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

The acceptable starting edges for the gesture.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIRectEdge edges;
```

## Mentioned In

- [Handling pan gestures](../handling-pan-gestures.md)

<a id="Discussion"></a>

## Discussion

The edges you specify are always relative to the app’s current interface orientation. This behavior ensures that the gestures always occur from the same place in your user interface, regardless of the device’s current orientation.

## See Also

### Specifying the starting edges

- [UIRectEdge](../uirectedge.md): Constants that specify the edges of a rectangle.
