> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/spatialpreviewdevicepicker](https://developer.apple.com/documentation/spatialpreview/spatialpreviewdevicepicker)

# SpatialPreviewDevicePicker

**Framework:** SpatialPreview  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS

Presents nearby companion devices and allows the user to make a selection.

## Declaration

```swift
@MainActor @preconcurrency struct SpatialPreviewDevicePicker
```

## Topics

### Initializers

- [init(isPresented:onSelect:)](spatialpreviewdevicepicker/init%28ispresented_onselect_%29.md): Creates a device picker.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Nearby devices

- [SpatialPreviewEndpoint](spatialpreviewendpoint.md): An endpoint representing a visionOS device you can connect to for spatial preview.
- [ConnectedSpatialEndpointObserver](connectedspatialendpointobserver.md): An observer that provides access to the endpoint for a device connected via Mac Virtual Display.
