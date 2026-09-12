> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avviewport/portal](https://developer.apple.com/documentation/avkit/avviewport/portal)

# portal (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The viewport configuration to use when the player displays immersive content in a portal.

## Declaration

```swift
var portal: AVPortalViewport? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to customize how content appears within a portal frame. When this property is `nil`, the system uses default portal settings.

> **Note**

> Spatial videos don’t support portal viewport settings.

## See Also

### Configuring the portal viewport

- [AVPortalViewport](../avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.

# portal (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The viewport configuration to use when the player displays immersive content in a portal.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) AVPortalViewport * portal;
```

<a id="Discussion"></a>

## Discussion

Set this property to customize how content appears within a portal frame. When this property is `nil`, the system uses default portal settings.

> **Note**

> Spatial videos don’t support portal viewport settings.

## See Also

### Configuring the portal viewport

- [AVPortalViewport](../avportalviewport.md): An object that defines the visual parameters for content displayed within a portal frame.
