> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic](https://developer.apple.com/documentation/cinematic)

# Cinematic (Swift)

**Framework:** Cinematic  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+

Integrate playback and editing of assets captured in Cinematic mode into your app.

<a id="overview"></a>

## Overview

The Cinematic framework enables you to add professional-level editing and playback features to movies, recorded with the Camera app’s Cinematic mode, to your apps. These are the same features used in applications such as Final Cut Pro, Photos, and iMovie. For example, this enables your apps to change focus distance and aperture in movies, creating a bokeh effect, even after recording.

## Topics

### Essentials

- [Playing and editing Cinematic mode video](cinematic/playing-and-editing-cinematic-mode-video.md): Play and edit Cinematic mode video with an adjustable depth of field and focus points.
- [CNScript](cinematic/cnscript-1ispe.md): A collection of focus decisions, focus transitions, detections, and detection tracks associated with a movie captured in Cinematic mode and methods to change them.

### Reading and rendering

- [CNAssetInfo](cinematic/cnassetinfo-2ata2.md): An object that provides Cinematic-specific information about an asset, including its tracks.
- [CNCompositionInfo](cinematic/cncompositioninfo-7eunn.md): An object that enables you to add the appropriate number of tracks for a Cinematic asset.
- [CNRenderingSession](cinematic/cnrenderingsession-1hzh8.md): An object representing the context in which rendering occurs.

### Editing

- [Editing Spatial Audio with an audio mix](cinematic/editing-spatial-audio-with-an-audio-mix.md): Add Spatial Audio editing capabilities with the Audio Mix API in the Cinematic framework.
- [CNDetection](cinematic/cndetection-swift.struct.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cinematic/cndecision-swift.struct.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cinematic/cndetectiontrack-2bxtd.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cinematic/cnfixeddetectiontrack-93rrw.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cinematic/cncustomdetectiontrack-9a2zo.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cinematic/cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.

### Custom Object Tracking

- [CNBoundsPrediction](cinematic/cnboundsprediction-swift.struct.md): A structure representing the bounds of the predicted subject.
- [CNObjectTracker](cinematic/cnobjecttracker-1n598.md): An object that converts a normalized point or rectangle into a detection track that tracks an object over time.

### Structures

- [CNCinematicError](cinematic/cncinematicerror.md)

### Reference

- [Cinematic Enumerations](cinematic/cinematic-enumerations.md)
- [Cinematic Constants](cinematic/cinematic-constants.md)
- [Cinematic Data Types](cinematic/cinematic-data-types.md)

### Classes

- [CNAssetPreprocessConfiguration](cinematic/cnassetpreprocessconfiguration-5u7dk.md)
- [CNAssetSpatialAudioInfo](cinematic/cnassetspatialaudioinfo-7hdev.md)
- [CNImageRenderingSession](cinematic/cnimagerenderingsession.md): A session for rendering a shallow depth-of-field (SDoF) effect onto still images using Metal.
- [CNImageRenderingSessionConfiguration](cinematic/cnimagerenderingsessionconfiguration.md): Configuration for a CNImageRenderingSession, specifying the rendering quality and algorithm version.

### Enumerations

- [CNCinematicCapability](cinematic/cncinematiccapability.md)
- [CNCinematicResourceVersion](cinematic/cncinematicresourceversion.md)
- [CNResourceStatus](cinematic/cnresourcestatus.md)
- [CNSpatialAudioContentType](cinematic/cnspatialaudiocontenttype.md)
- [CNSpatialAudioRenderingStyle](cinematic/cnspatialaudiorenderingstyle.md)

# Cinematic (Objective-C)

**Framework:** Cinematic  
**Kind:** Framework  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+ · tvOS 17.0+

Integrate playback and editing of assets captured in Cinematic mode into your app.

<a id="overview"></a>

## Overview

The Cinematic framework enables you to add professional-level editing and playback features to movies, recorded with the Camera app’s Cinematic mode, to your apps. These are the same features used in applications such as Final Cut Pro, Photos, and iMovie. For example, this enables your apps to change focus distance and aperture in movies, creating a bokeh effect, even after recording.

## Topics

### Essentials

- [Playing and editing Cinematic mode video](cinematic/playing-and-editing-cinematic-mode-video.md): Play and edit Cinematic mode video with an adjustable depth of field and focus points.
- [CNScript](cinematic/cnscript-9e1zn.md): A collection of focus decisions, focus transitions, detections, and detection tracks associated with a movie captured in Cinematic mode and methods to change them.
- [CNScriptChanges](cinematic/cnscriptchanges.md): An object that represents a snapshot of the changes made to a movie script, including the added user decisions and detection tracks.
- [CNScriptFrame](cinematic/cnscriptframe.md): An object that represents what to focus on, and where to focus, in a given movie frame.

### Reading and rendering

- [CNAssetInfo](cinematic/cnassetinfo-8ja4t.md): An object that provides Cinematic-specific information about an asset, including its tracks.
- [CNCompositionInfo](cinematic/cncompositioninfo-vzoh.md): An object that enables you to add the appropriate number of tracks for a Cinematic asset.
- [CNRenderingSession](cinematic/cnrenderingsession-8yghc.md): An object representing the context in which rendering occurs.
- [CNRenderingSessionAttributes](cinematic/cnrenderingsessionattributes.md): A structure for movie-wide attributes required for proper rendering.
- [CNRenderingSessionFrameAttributes](cinematic/cnrenderingsessionframeattributes.md): Creates an object with the per frame attributes that control the appearance of a single frame of the Cinematic movie.

### Editing

- [CNDetection](cinematic/cndetection-c.class.md): A structure that represents a detected subject, face, torso or pet at a particular time.
- [CNDecision](cinematic/cndecision-c.class.md): An object that represents a decision to focus on a particular detection, or group of detections, at a particular time.
- [CNDetectionTrack](cinematic/cndetectiontrack-61x7g.md): An object representing a series of detections of the same subject over time.
- [CNFixedDetectionTrack](cinematic/cnfixeddetectiontrack-5aei2.md): An object representing the fixed detection track.
- [CNCustomDetectionTrack](cinematic/cncustomdetectiontrack-891hc.md): An object representing a discrete detection track composed of individual detections.
- [CNDetectionType](cinematic/cndetectiontype.md): The type of object detected, such as face, torso, cat, dog and so on.

### Custom Object Tracking

- [CNObjectTracker](cinematic/cnobjecttracker-7aliq.md): An object that converts a normalized point or rectangle into a detection track that tracks an object over time.
- [CNBoundsPrediction](cinematic/cnboundsprediction-c.class.md): An object representing the bounds of the predicted subject.

### Reference

- [Cinematic Enumerations](cinematic/cinematic-enumerations.md)
- [Cinematic Constants](cinematic/cinematic-constants.md)
- [Cinematic Data Types](cinematic/cinematic-data-types.md)

### Classes

- [CNAssetPreprocessConfiguration](cinematic/cnassetpreprocessconfiguration-7xlwe.md)
- [CNAssetSpatialAudioInfo](cinematic/cnassetspatialaudioinfo-57yc5.md)
- [CNImageRenderingSession](cinematic/cnimagerenderingsession.md): A session for rendering a shallow depth-of-field (SDoF) effect onto still images using Metal.
- [CNImageRenderingSessionConfiguration](cinematic/cnimagerenderingsessionconfiguration.md): Configuration for a CNImageRenderingSession, specifying the rendering quality and algorithm version.

### Macros

- [CN_CINEMATIC_EXTERN](cinematic/cn_cinematic_extern.md)

### Enumerations

- [CNCinematicCapability](cinematic/cncinematiccapability.md)
- [CNCinematicResourceVersion](cinematic/cncinematicresourceversion.md)
- [CNResourceStatus](cinematic/cnresourcestatus.md)
- [CNSpatialAudioContentType](cinematic/cnspatialaudiocontenttype.md)
- [CNSpatialAudioRenderingStyle](cinematic/cnspatialaudiorenderingstyle.md)
