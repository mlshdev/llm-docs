> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/viewpointproperties](https://developer.apple.com/documentation/arkit/viewpointproperties)

# ViewpointProperties

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.4+

The ViewpointProperties is a record of render camera transforms at some particular time.

## Declaration

```swift
struct ViewpointProperties
```

## Topics

### Instance Properties

- [description](viewpointproperties/description.md): Textual representation of the viewpoint properties.
- [deviceFromLeftViewpointTransform](viewpointproperties/devicefromleftviewpointtransform.md): The transformation matrix that converts from the left viewpoint to the device’s coordinate space.
- [deviceFromRightViewpointTransform](viewpointproperties/devicefromrightviewpointtransform.md): The transformation matrix that converts from the left viewpoint to the device’s coordinate space.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering

- [StereoPropertiesProvider](stereopropertiesprovider.md): The StereoPropertiesProvider serves the latest viewpoint properties on the device.
