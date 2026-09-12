> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/spatialpreviewdevicepicker/init(ispresented:onselect:)](https://developer.apple.com/documentation/spatialpreview/spatialpreviewdevicepicker/init(ispresented:onselect:))

# init(isPresented:onSelect:)

**Framework:** SpatialPreview  
**Kind:** Initializer  
**Availability:** macOS 27.0+ · visionOS

Creates a device picker.

## Declaration

```swift
@MainActor @preconcurrency init(isPresented: Binding<Bool>, onSelect: @escaping (SpatialPreviewEndpoint) -> Void)
```

## Parameters

- `isPresented`: A binding to a Boolean that determines whether the picker view is displayed
- `onSelect`: When a device is selected the `SpatialPreviewEndpoint` for that device will be returned.
