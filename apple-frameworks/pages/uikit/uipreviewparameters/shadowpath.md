> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewparameters/shadowpath](https://developer.apple.com/documentation/uikit/uipreviewparameters/shadowpath)

# shadowPath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The path to use for drawing the preview’s shadow.

## Declaration

```swift
@NSCopying var shadowPath: UIBezierPath? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the system uses the [visiblePath](visiblepath.md) to draw the shadow.

## See Also

### Configuring the preview attributes

- [backgroundColor](backgroundcolor.md): The background color to display behind the preview.
- [visiblePath](visiblepath.md): The portion of the view to show in the preview.

# shadowPath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

The path to use for drawing the preview’s shadow.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBezierPath * shadowPath;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the system uses the [visiblePath](visiblepath.md) to draw the shadow.

## See Also

### Configuring the preview attributes

- [backgroundColor](backgroundcolor.md): The background color to display behind the preview.
- [visiblePath](visiblepath.md): The portion of the view to show in the preview.
