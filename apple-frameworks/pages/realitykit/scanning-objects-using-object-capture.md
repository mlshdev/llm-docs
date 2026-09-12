> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scanning-objects-using-object-capture](https://developer.apple.com/documentation/realitykit/scanning-objects-using-object-capture)

# Scanning objects using Object Capture

**Framework:** RealityKit  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · Xcode 16.0+

Implement a full scanning workflow for capturing objects on iOS devices.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC24 session 10107: [Discover area mode for Object Capture](https://developer.apple.com/wwdc24/10107/) and WWDC23 session 10191: [Meet Object Capture for iOS](https://developer.apple.com/wwdc23/10191/).

You need to run this sample code project on a physical device. It does not compile for Simulator.

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To run this sample app, you need an iPhone or iPad with the following:

- A LiDAR Scanner
- An A14 Bionic chip or later
- iOS or iPadOS 18 or later

## See Also

### Model creation

- [Capturing photographs for RealityKit Object Capture](capturing-photographs-for-realitykit-object-capture.md): Take high-quality images of objects to generate 3D models.
- [Creating 3D objects from photographs](creating-3d-objects-from-photographs.md): Construct virtual objects to use in your AR experiences.
- [Building an object reconstruction app](building-an-object-reconstruction-app.md): Reconstruct objects from user-selected input images by using photogrammetry.
- [Creating a photogrammetry command-line app](creating-a-photogrammetry-command-line-app.md): Generate 3D objects from images using RealityKit Object Capture.
- [Using object capture assets in RealityKit](using-object-capture-assets-in-realitykit.md): Create a chess game using RealityKit and assets created using Object Capture.
- [PhotogrammetrySession](photogrammetrysession.md): Manages the creation of a 3D model from a set of images.
- [PhotogrammetrySample](photogrammetrysample.md): An object that represents one image and its corresponding metadata.
- [ObjectCaptureView](objectcaptureview.md): A view that guides a user through capturing images for object capture.
- [ObjectCaptureSession](objectcapturesession.md): A session object that monitors and controls image capture for photogrammetry.
- [ObjectCapturePointCloudView](objectcapturepointcloudview.md): Renders the current state of the point cloud from an object capture session.
