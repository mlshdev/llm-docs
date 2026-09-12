> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/segmenting-objects-using-taps-scribbles-or-rectangles](https://developer.apple.com/documentation/vision/segmenting-objects-using-taps-scribbles-or-rectangles)

# Segmenting objects using taps, scribbles or rectangles

**Framework:** Vision  
**Kind:** Sample Code  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · Xcode 27.0+

Select objects or regions in a photo using taps, scribbles, or rectangle selection, and generate a segmentation mask using the iterative segmentation API.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC26 session 237: [What’s new in image understanding](https://developer.apple.com/wwdc26/237/).

<a id="Configure-the-sample-code-project"></a>

## Configure the sample code project

To configure the sample code project:

1. Open the sample with the latest version of Xcode.
2. Set the developer team for all targets to let Xcode automatically manage the provisioning profile. For more information, see [Set the bundle ID](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Set-the-bundle-ID) and [Assign the project to a team](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution#Assign-the-project-to-a-team).

> **Note**

> This sample code needs to run on a physical device.

## See Also

### Image segmentation and subject lifting

- [GenerateForegroundInstanceMaskRequest](generateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticeable objects to separate from the background.
- [GeneratePersonInstanceMaskRequest](generatepersoninstancemaskrequest.md): A request that produces a mask of individual people it finds in the input image.
- [GeneratePersonSegmentationRequest](generatepersonsegmentationrequest.md): A request that produces a matte image for a person it finds in the input image.
- [GenerateIterativeSegmentationRequest](generateiterativesegmentationrequest.md): A request that generates a segmentation mask from points, a rectangle, or a scribble.
