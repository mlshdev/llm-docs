> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe](https://developer.apple.com/documentation/cinematic/cnscript-1ispe)

# CNScript

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A collection of focus decisions, focus transitions, detections, and detection tracks associated with a movie captured in Cinematic mode and methods to change them.

## Declaration

```swift
final class CNScript
```

<a id="overview"></a>

## Overview

The Cinematic script provides thread-safe access to information about the focus decisions made in the original recorded Cinematic movie. The script supports changing those decisions and obtaining updated information about where to focus each frame. You can snapshot changes to a script and later reload them.

> **Tip**

>  Look up what you need up front, outside your critical code, and pass the immutable results to where it’s needed. That way, you’re not blocked when you access the information inside the rendering portion of your code.

## Topics

### Structures

- [CNScript.Changes](cnscript-1ispe/changes.md): An object that represents a snapshot of the changes made to a movie script, including the added user decisions and detection tracks.
- [CNScript.Frame](cnscript-1ispe/frame.md): An object that represents what to focus on, and where to focus, in a given movie frame.

### Initializers

- [init(asset:changes:progress:)](cnscript-1ispe/init%28asset_changes_progress_%29.md): Creates a Cinematic script based on a movie and applying changes to the movie.

### Instance Properties

- [addedDetectionTracks](cnscript-1ispe/addeddetectiontracks.md): An array of the detection tracks added since recording the original Cinematic movie.
- [fNumber](cnscript-1ispe/fnumber.md): The f-stop value which inversely affects the aperture used to render the Cinematic image.
- [timeRange](cnscript-1ispe/timerange.md): The time range of the selected track.

### Instance Methods

- [addDetectionTrack(\_:)](cnscript-1ispe/adddetectiontrack%28__%29.md): Adds a user-created detection track.
- [addUserDecision(\_:)](cnscript-1ispe/adduserdecision%28__%29.md): Adds a new user decision, and replaces an existing user decision if the times are identical.
- [baseDecisions(in:)](cnscript-1ispe/basedecisions%28in_%29.md): All base decisions made automatically during recording in the given time range.
- [changes()](cnscript-1ispe/changes%28%29.md): Changes made since recording the Cinematic asset.
- [changes(trimmedBy:)](cnscript-1ispe/changes%28trimmedby_%29.md): Changes trimmed and time range shifted to start at zero.
- [decision(after:)](cnscript-1ispe/decision%28after_%29.md): The decision that occurs after the given time.
- [decision(at:tolerance:)](cnscript-1ispe/decision%28at_tolerance_%29.md): The closest decision to the given time within the given tolerance.
- [decision(before:)](cnscript-1ispe/decision%28before_%29.md): The decision that occurs before the given time.
- [decisions(in:)](cnscript-1ispe/decisions%28in_%29.md): All decisions within the given time range.
- [detectionTrack(for:)](cnscript-1ispe/detectiontrack%28for_%29-1xvsa.md): A detection track representing all detections selected by a given decision.
- [detectionTrack(for:)](cnscript-1ispe/detectiontrack%28for_%29-6f8mk.md): A detection track representing all detections with the given detection ID, over the entire Cinematic script.
- [frame(at:tolerance:)](cnscript-1ispe/frame%28at_tolerance_%29.md): The closest frame to the given time within the given tolerance.
- [frames(in:)](cnscript-1ispe/frames%28in_%29.md): All frames within the given time range.
- [primaryDecision(at:)](cnscript-1ispe/primarydecision%28at_%29.md): The primary decision that’s in effect at the specified time, unless it’s outside the time range of the Cinematic script.
- [reload(changes:)](cnscript-1ispe/reload%28changes_%29.md): Reloads the Cinematic script with optional changes applied, removing any previous changes made.
- [removeAllUserDecisions()](cnscript-1ispe/removealluserdecisions%28%29.md): Removes all user decisions and reverts to base decisions only.
- [removeDetectionTrack(\_:)](cnscript-1ispe/removedetectiontrack%28__%29.md): Removes the user-created detection track.
- [removeUserDecision(\_:)](cnscript-1ispe/removeuserdecision%28__%29.md): Removes an existing user decision.
- [secondaryDecision(at:)](cnscript-1ispe/secondarydecision%28at_%29.md): If a given time is during a focus transition, the system transitions toward a secondary decision.
- [timeRangeOfTransition(after:)](cnscript-1ispe/timerangeoftransition%28after_%29.md): The time range during which the focus transitioned away from the given decision.
- [timeRangeOfTransition(before:)](cnscript-1ispe/timerangeoftransition%28before_%29.md): The time range during which the focus transitioned toward the given decision.
- [userDecisions(in:)](cnscript-1ispe/userdecisions%28in_%29.md): All user decisions in the given time range.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Playing and editing Cinematic mode video](playing-and-editing-cinematic-mode-video.md): Play and edit Cinematic mode video with an adjustable depth of field and focus points.
