> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/tracking-a-handheld-accessory-as-a-virtual-sculpting-tool](https://developer.apple.com/documentation/arkit/tracking-a-handheld-accessory-as-a-virtual-sculpting-tool)

# Tracking a handheld accessory as a virtual sculpting tool

**Framework:** ARKit  
**Kind:** Sample Code  
**Availability:** visionOS 26.0+ · Xcode 26.0+

Use a tracked accessory with Apple Vision Pro to create a virtual sculpture.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC25 session 289: [Explore spatial accessory input on visionOS](https://developer.apple.com/videos/play/wwdc2025/289).

<a id="Configure-the-sample-code-project"></a>

## Configure the sample code project

Because this sample app has hardware requirements, it won’t run in Simulator. Instead, you’ll need to build the sample and run it on Apple Vision Pro, using a tracked accessory for sculpting.

## See Also

### Accessory tracking

- [Preparing spatial accessories for tracking in your visionOS app](preparing-spatial-accessories-for-tracking-in-your-visionos-app.md): Prepare a spatial accessory for tracking by training a reference accessory file and integrating it into your visionOS app.
- [Working with generic spatial accessories](../visionos/working-with-generic-spatial-accessories.md): Let people place digital replicas of a generic spatial accessory by tracking the accessory with ARKit.
- [AccessoryTrackingProvider](accessorytrackingprovider.md): Provides the real time position of accessories in the user’s environment.
- [Accessory](accessory.md): Represents an accessory to be tracked.
- [AccessoryAnchor](accessoryanchor.md): Represents a tracked accessory.
- [Tracking accessories in volumetric windows](tracking-accessories-in-volumetric-windows.md): Translate the position and velocity of tracked handheld accessories to throw virtual balls at a stack of cans.
