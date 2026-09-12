> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/frame](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/frame)

# CNScript.Frame

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that represents what to focus on, and where to focus, in a given movie frame.

## Declaration

```swift
struct Frame
```

## Topics

### Instance Properties

- [allDetections](frame/alldetections.md): All detections for the Cinematic movie.
- [focusDetection](frame/focusdetection.md): What to focus on in a given frame of the movie.
- [focusDisparity](frame/focusdisparity.md): Where to focus in a given frame of the movie.
- [time](frame/time.md): The time of the focus transition.

### Instance Methods

- [bestDetection(for:)](frame/bestdetection%28for_%29.md): The best detection to focus on in a frame among those within the given detection group.
- [detection(for:)](frame/detection%28for_%29.md): The detection in the frame with the given detection ID, if any.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
