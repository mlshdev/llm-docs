> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewparameters/visiblepath](https://developer.apple.com/documentation/uikit/uipreviewparameters/visiblepath)

# visiblePath (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The portion of the view to show in the preview.

## Declaration

```swift
@NSCopying var visiblePath: UIBezierPath? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify the path information in the coordinate space of the view being animated.

## See Also

### Configuring the preview attributes

- [backgroundColor](backgroundcolor.md): The background color to display behind the preview.
- [shadowPath](shadowpath.md): The path to use for drawing the preview’s shadow.

# visiblePath (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

The portion of the view to show in the preview.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBezierPath * visiblePath;
```

<a id="Discussion"></a>

## Discussion

Specify the path information in the coordinate space of the view being animated.

## See Also

### Configuring the preview attributes

- [backgroundColor](backgroundcolor.md): The background color to display behind the preview.
- [shadowPath](shadowpath.md): The path to use for drawing the preview’s shadow.
