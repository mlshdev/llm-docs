> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscriptframe](https://developer.apple.com/documentation/cinematic/cnscriptframe)

# CNScriptFrame

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that represents what to focus on, and where to focus, in a given movie frame.

## Declaration

```objectivec
@interface CNScriptFrame : NSObject
```

## Topics

### Instance Properties

- [allDetections](cnscriptframe/alldetections.md): All detections for the Cinematic movie.
- [focusDetection](cnscriptframe/focusdetection.md): What to focus on in a given frame of the movie.
- [focusDisparity](cnscriptframe/focusdisparity.md): Where to focus in a given frame of the movie.
- [time](cnscriptframe/time.md): The time of the focus transition.

### Instance Methods

- [bestDetectionForGroupID:](cnscriptframe/bestdetectionforgroupid_.md): The best detection to focus on in a frame among those within the given detection group.
- [detectionForID:](cnscriptframe/detectionforid_.md): The detection in the frame with the given detection ID, if any.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Essentials

- [Playing and editing Cinematic mode video](playing-and-editing-cinematic-mode-video.md): Play and edit Cinematic mode video with an adjustable depth of field and focus points.
- [CNScript](cnscript-9e1zn.md): A collection of focus decisions, focus transitions, detections, and detection tracks associated with a movie captured in Cinematic mode and methods to change them.
- [CNScriptChanges](cnscriptchanges.md): An object that represents a snapshot of the changes made to a movie script, including the added user decisions and detection tracks.
