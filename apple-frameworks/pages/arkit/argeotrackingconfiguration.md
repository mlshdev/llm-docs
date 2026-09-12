> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration)

# ARGeoTrackingConfiguration (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A configuration that tracks locations with GPS, map data, and a device’s compass.

## Declaration

```swift
class ARGeoTrackingConfiguration
```

<a id="overview"></a>

## Overview

This configuration creates location anchors ([ARGeoAnchor](argeoanchor.md)) that specify a particular latitude, longitude, and optionally, altitude to enable an app to track geographic areas of interest in an AR experience.

> **Important**

>  The [isSupported](arconfiguration/issupported.md) property returns [true](https://developer.apple.com/documentation/swift/true) for this class on iOS 14 & iPadOS 14 devices that have an A12 chip or later and cellular (GPS) capability. Geotracking is available in specific geographic locations. To determine availability at the user’s location at runtime, call [checkAvailability(completionHandler:)](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md).

Geotracking occurs exclusively outdoors. If a geotracking app navigates users between waypoints, your app needs to handle any events along a route. The user must have an internet connection, and you can provide them information about data usage, as described in [ARGeoAnchor](argeoanchor.md).

<a id="Encourage-user-safety"></a>

### Encourage user safety

To keep your users’ focus on the road while traveling, discourage them from looking at the device when in motion, such as while riding a bike. Keep users informed when navigating through unfamiliar territory. For instance, you can recommend they steer clear of private property, or remind them to check their device’s battery level before beginning a long route.

<a id="Refine-the-users-position-with-imagery"></a>

### Refine the user’s position with imagery

To place location anchors with precision, geotracking requires a better understanding of the user’s geographic location than is possible with GPS alone. Based on the user’s GPS coordinates, ARKit downloads imagery that depicts the physical environment in that area. Apple collects this *localization imagery* in advance by capturing photos of the view from the street and recording the geographic position at each photo. By comparing the device’s current camera image with this imagery, the session matches the user’s precise geographic location with the scene’s local coordinates. For information about the user’s position in local space, see [transform](arcamera/transform.md).

Localization imagery captures views from public streets and routes accessible by car, but doesn’t include images of gated or pedestrian-only areas.

Geotracking sessions use localization imagery in the [ARGeoTrackingStatus.State.localizing](argeotrackingstatus/state-swift.enum/localizing.md) state.

<a id="Supported-areas-and-cities"></a>

### Supported areas and cities

Localization imagery is available for specific areas in over 20 countries, including many metropolitan areas in Australia, Europe, Japan, and North America. To check availability in a particular location, see the [checkAvailability(completionHandler:)](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) function.

> **Tip**

>  You can share an experience of geotracking with developers who live outside an area that supports it. Record a session in your app in an area that supports localization imagery for developers to create and test their geotracking app. For more information, see [Recording and Replaying AR Session Data](recording-and-replaying-ar-session-data.md).

## Topics

### Creating a configuration

- [init()](argeotrackingconfiguration/init%28%29.md): Initializes a new geotracking configuration.

### Checking availability

- [checkAvailability(completionHandler:)](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md): Determines if geotracking supports the user’s current location.
- [checkAvailability(at:completionHandler:)](argeotrackingconfiguration/checkavailability%28at_completionhandler_%29.md): Determines if geotracking supports a particular location.

### Tracking surfaces

- [planeDetection](argeotrackingconfiguration/planedetection.md): A value that specifies whether and how the session automatically attempts to detect flat surfaces in the camera-captured image.
- [ARWorldTrackingConfiguration.PlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Detecting or tracking images

- [detectionImages](argeotrackingconfiguration/detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](argeotrackingconfiguration/maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.
- [automaticImageScaleEstimationEnabled](argeotrackingconfiguration/automaticimagescaleestimationenabled.md): A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.

### Detecting and tracking real-world objects

- [detectionObjects](argeotrackingconfiguration/detectionobjects.md): A set of 3D objects that the framework attempts to detect in the user’s environment.
- [trackingObjects](argeotrackingconfiguration/trackingobjects.md): Objects to track in the scene.

### Creating realistic reflections

- [environmentTexturing](argeotrackingconfiguration/environmenttexturing.md): An option that determines how the framework generates environment textures.
- [ARWorldTrackingConfiguration.EnvironmentTexturing](arworldtrackingconfiguration/environmenttexturing-swift.enum.md): The available environment texturing options for world tracking.
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md): An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.
- [wantsHDREnvironmentTextures](argeotrackingconfiguration/wantshdrenvironmenttextures.md): A flag that instructs the framework to create environment textures in HDR format.

### Accessing app clip codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](argeotrackingconfiguration/supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [appClipCodeTrackingEnabled](argeotrackingconfiguration/appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spatial Tracking

- [Understanding World Tracking](understanding-world-tracking.md): Discover features and best practices for building rear-camera AR experiences.
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md): A configuration that tracks the position of a device in relation to objects in the environment.
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md): A configuration that tracks only the device’s orientation using the rear-facing camera.
- [ARPositionalTrackingConfiguration](arpositionaltrackingconfiguration.md): A configuration that tracks only the device’s position in 3D space.

# ARGeoTrackingConfiguration (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A configuration that tracks locations with GPS, map data, and a device’s compass.

## Declaration

```objectivec
@interface ARGeoTrackingConfiguration : ARConfiguration
```

<a id="overview"></a>

## Overview

This configuration creates location anchors ([ARGeoAnchor](argeoanchor.md)) that specify a particular latitude, longitude, and optionally, altitude to enable an app to track geographic areas of interest in an AR experience.

> **Important**

>  The [isSupported](arconfiguration/issupported.md) property returns [true](https://developer.apple.com/documentation/swift/true) for this class on iOS 14 & iPadOS 14 devices that have an A12 chip or later and cellular (GPS) capability. Geotracking is available in specific geographic locations. To determine availability at the user’s location at runtime, call [checkAvailabilityWithCompletionHandler:](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md).

Geotracking occurs exclusively outdoors. If a geotracking app navigates users between waypoints, your app needs to handle any events along a route. The user must have an internet connection, and you can provide them information about data usage, as described in [ARGeoAnchor](argeoanchor.md).

<a id="Encourage-user-safety"></a>

### Encourage user safety

To keep your users’ focus on the road while traveling, discourage them from looking at the device when in motion, such as while riding a bike. Keep users informed when navigating through unfamiliar territory. For instance, you can recommend they steer clear of private property, or remind them to check their device’s battery level before beginning a long route.

<a id="Refine-the-users-position-with-imagery"></a>

### Refine the user’s position with imagery

To place location anchors with precision, geotracking requires a better understanding of the user’s geographic location than is possible with GPS alone. Based on the user’s GPS coordinates, ARKit downloads imagery that depicts the physical environment in that area. Apple collects this *localization imagery* in advance by capturing photos of the view from the street and recording the geographic position at each photo. By comparing the device’s current camera image with this imagery, the session matches the user’s precise geographic location with the scene’s local coordinates. For information about the user’s position in local space, see [transform](arcamera/transform.md).

Localization imagery captures views from public streets and routes accessible by car, but doesn’t include images of gated or pedestrian-only areas.

Geotracking sessions use localization imagery in the [ARGeoTrackingStateLocalizing](argeotrackingstatus/state-swift.enum/localizing.md) state.

<a id="Supported-areas-and-cities"></a>

### Supported areas and cities

Localization imagery is available for specific areas in over 20 countries, including many metropolitan areas in Australia, Europe, Japan, and North America. To check availability in a particular location, see the [checkAvailabilityWithCompletionHandler:](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md) function.

> **Tip**

>  You can share an experience of geotracking with developers who live outside an area that supports it. Record a session in your app in an area that supports localization imagery for developers to create and test their geotracking app. For more information, see [Recording and Replaying AR Session Data](recording-and-replaying-ar-session-data.md).

## Topics

### Creating a configuration

- [new](argeotrackingconfiguration/new.md): Instantiates a new geotracking configuration.
- [init](argeotrackingconfiguration/init%28%29.md): Initializes a new geotracking configuration.

### Checking availability

- [checkAvailabilityWithCompletionHandler:](argeotrackingconfiguration/checkavailability%28completionhandler_%29.md): Determines if geotracking supports the user’s current location.
- [checkAvailabilityAtCoordinate:completionHandler:](argeotrackingconfiguration/checkavailability%28at_completionhandler_%29.md): Determines if geotracking supports a particular location.

### Tracking surfaces

- [planeDetection](argeotrackingconfiguration/planedetection.md): A value that specifies whether and how the session automatically attempts to detect flat surfaces in the camera-captured image.
- [ARPlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Detecting or tracking images

- [detectionImages](argeotrackingconfiguration/detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](argeotrackingconfiguration/maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.
- [automaticImageScaleEstimationEnabled](argeotrackingconfiguration/automaticimagescaleestimationenabled.md): A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.

### Detecting and tracking real-world objects

- [detectionObjects](argeotrackingconfiguration/detectionobjects.md): A set of 3D objects that the framework attempts to detect in the user’s environment.
- [trackingObjects](argeotrackingconfiguration/trackingobjects.md): Objects to track in the scene.

### Creating realistic reflections

- [environmentTexturing](argeotrackingconfiguration/environmenttexturing.md): An option that determines how the framework generates environment textures.
- [AREnvironmentTexturing](arworldtrackingconfiguration/environmenttexturing-swift.enum.md): The available environment texturing options for world tracking.
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md): An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.
- [wantsHDREnvironmentTextures](argeotrackingconfiguration/wantshdrenvironmenttextures.md): A flag that instructs the framework to create environment textures in HDR format.

### Accessing app clip codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](argeotrackingconfiguration/supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [appClipCodeTrackingEnabled](argeotrackingconfiguration/appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

## See Also

### Spatial Tracking

- [Understanding World Tracking](understanding-world-tracking.md): Discover features and best practices for building rear-camera AR experiences.
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md): A configuration that tracks the position of a device in relation to objects in the environment.
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md): A configuration that tracks only the device’s orientation using the rear-facing camera.
- [ARPositionalTrackingConfiguration](arpositionaltrackingconfiguration.md): A configuration that tracks only the device’s position in 3D space.
