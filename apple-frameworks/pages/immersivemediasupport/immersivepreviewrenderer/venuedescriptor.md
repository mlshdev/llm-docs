> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivepreviewrenderer/venuedescriptor](https://developer.apple.com/documentation/immersivemediasupport/immersivepreviewrenderer/venuedescriptor)

# venueDescriptor

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 27.0+ · visionOS 27.0+

The venue descriptor for rendering immersive video frames.

## Declaration

```swift
@MainActor var venueDescriptor: VenueDescriptor?
```

<a id="discussion"></a>

## Discussion

The venue descriptor provides the necessary camera calibration data, mesh geometry, and masking information required to properly render immersive video frames. Update this property to switch between different venues or camera configurations.
