> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/cornerconfiguration-7l0ja](https://developer.apple.com/documentation/uikit/uiview/cornerconfiguration-7l0ja)

# cornerConfiguration

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that defines the corners of the view.

## Declaration

```swift
@MainActor @preconcurrency var cornerConfiguration: UICornerConfiguration { get set }
```

<a id="discussion"></a>

## Discussion

For more information on how to configure view corners, see [UICornerConfiguration](../uicornerconfiguration-swift.struct.md).

## See Also

### Configuring a view’s corners

- [UICornerConfiguration](../uicornerconfiguration-swift.struct.md): A configuration that defines how corner radii are mapped to the corners of a rectangle.
- [UICornerRadius](../uicornerradius-swift.struct.md): A type that represents the radius the system uses to round a corner.
- [effectiveRadius(corner:)](effectiveradius%28corner_%29.md): Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.
