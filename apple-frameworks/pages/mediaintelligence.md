> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence](https://developer.apple.com/documentation/mediaintelligence)

# Media Intelligence

**Framework:** Media Intelligence  
**Kind:** Framework  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Analyze video content and group faces in images using on-device machine learning.

<a id="Overview"></a>

## Overview

Media Intelligence provides on-device algorithms to analyze image and video content. Use it in video editors, photo organizers, and other media apps to add intelligence features without building the underlying analysis pipeline yourself.

For images, [FaceGroupAnalyzer](mediaintelligence/facegroupanalyzer.md) detects faces in a collection of image assets and groups matching faces into *entities*, each representing a unique person. You can then query the analyzer to retrieve faces by asset, entity, or face ID, and use the results to build features like person-based photo organization or face search.

For video, [VideoAnalyzer](mediaintelligence/videoanalyzer.md) accepts one or more analysis requests for a specified asset and returns results for each. Use [HighlightAnalysisRequest](mediaintelligence/highlightanalysisrequest.md) to identify the most engaging segments of a video clip, or use [KeyFrameAnalysisRequest](mediaintelligence/keyframeanalysisrequest.md) to select a keyframe that represents the overall theme of the video. Both requests run in-process on the device, with no data leaving the system.

## Topics

### Image analysis

- [Detecting and grouping faces in images](mediaintelligence/detecting-and-grouping-faces-in-images.md): Organize photos by person using on-device face detection.
- [FaceGroupAnalyzer](mediaintelligence/facegroupanalyzer.md): An object that detects faces in images and groups them by person.
- [MediaIntelligenceImageAsset](mediaintelligence/mediaintelligenceimageasset.md): An image asset to analyze.

### Video analysis

- [Finding the best moments in a video](mediaintelligence/finding-the-best-moments-in-a-video.md): Identify keyframes and highlight segments using on-device analysis.
- [VideoAnalyzer](mediaintelligence/videoanalyzer.md): An object that analyzes video assets for highlights and key frames.
- [MediaIntelligenceVideoAsset](mediaintelligence/mediaintelligencevideoasset.md): A video asset to analyze.
- [HighlightAnalysisRequest](mediaintelligence/highlightanalysisrequest.md): A request that identifies the most engaging segments of a video.
- [KeyFrameAnalysisRequest](mediaintelligence/keyframeanalysisrequest.md): A request that identifies the best representative frame of a video.

### Errors

- [MediaIntelligenceError](mediaintelligence/mediaintelligenceerror.md): An error that indicates a media analysis operation failed.
