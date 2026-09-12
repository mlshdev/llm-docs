> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnrenderingsession-1hzh8/frameattributes](https://developer.apple.com/documentation/cinematic/cnrenderingsession-1hzh8/frameattributes)

# CNRenderingSession.FrameAttributes

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Controls the focus distance and aperture of the rendering for the frames.

## Declaration

```swift
struct FrameAttributes
```

## Topics

### Initializers

- [init(sampleBuffer:sessionAttributes:)](frameattributes/init%28samplebuffer_sessionattributes_%29.md): Creates a structure representing a Cinematic rendering session based a sample buffer and session attributes.
- [init(timedMetadataGroup:sessionAttributes:)](frameattributes/init%28timedmetadatagroup_sessionattributes_%29.md): Creates a structure representing a Cinematic rendering session based on meta group and session attributes.

### Instance Properties

- [fNumber](frameattributes/fnumber.md): The f-stop value that inversely affects the aperture used to render the Cinematic image.
- [focusDisparity](frameattributes/focusdisparity.md): Represents the focus plane at which the rendered image should be in focus.
