> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextselectionhandleview/customshape

# customShape (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The custom shape to draw for the stem of the selection handle.

## Declaration

```swift
var customShape: UIBezierPath? { get set }
```

## See Also

### Specifying the handle details

- [direction](direction.md): The orientation of the selection handle.
- [isVertical](isvertical.md): Convenience accessor for @c direction calculations.

# customShape (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The custom shape to draw for the stem of the selection handle.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIBezierPath * customShape;
```

## See Also

### Specifying the handle details

- [direction](direction.md): The orientation of the selection handle.
- [vertical](isvertical.md): Convenience accessor for @c direction calculations.
