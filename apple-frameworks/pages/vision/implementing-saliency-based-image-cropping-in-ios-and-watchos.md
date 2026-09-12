> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/implementing-saliency-based-image-cropping-in-ios-and-watchos](https://developer.apple.com/documentation/vision/implementing-saliency-based-image-cropping-in-ios-and-watchos)

# Implementing saliency-based image cropping in iOS and watchOS

**Framework:** Vision  
**Kind:** Sample Code  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · watchOS 27.0+ · Xcode 27.0+

Crop regions most likely drawing people’s attention from an image in your iOS or watchOS app.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC26 session 237: [What’s new in image understanding](https://developer.apple.com/wwdc26/237/).

<a id="Configure-the-sample-code-project"></a>

## Configure the sample code project

To configure the sample code project, do the following:

1. Open the sample with the latest version of Xcode.
2. Set the developer team for all targets to let Xcode automatically manage the provisioning profile. For more information, see [Set the bundle ID](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Set-the-bundle-ID) and [Assign the project to a team](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Assign-the-project-to-a-team).

> **Note**

> This sample code needs to run on a physical device.

## See Also

### Image quality and saliency analysis

- [Generating high-quality thumbnails from videos](generating-thumbnails-from-videos.md): Identify the most visually pleasing frames in a video by using the image-aesthetics scores request.
- [CalculateImageAestheticsScoresRequest](calculateimageaestheticsscoresrequest.md): A request that analyzes an image for aesthetically pleasing attributes.
- [DetectLensSmudgeRequest](detectlenssmudgerequest.md): A request that detects a smudge on a lens from an image or video frame capture.
- [GenerateAttentionBasedSaliencyImageRequest](generateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [GenerateObjectnessBasedSaliencyImageRequest](generateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
