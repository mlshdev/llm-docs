> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arobjectscanningconfiguration](https://developer.apple.com/documentation/arkit/arobjectscanningconfiguration)

# ARObjectScanningConfiguration (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS · iPadOS

A configuration that recognizes objects and collects high-fidelity data about specific objects using the rear-facing camera.

## Declaration

```swift
class ARObjectScanningConfiguration
```

<a id="overview"></a>

## Overview

To create an app that recognizes objects in the physical environment, first you scan them during development using `ARObjectScanningConfiguration`. After you’ve scanned an object, call [createReferenceObject(transform:center:extent:completionHandler:)](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md) to turn it into an [ARReferenceObject](arreferenceobject.md) that you can use to detect it again at run-time. When users run your app, you ask ARKit to look for your scanned obects by running a world tracking configuration and assigning reference objects to its [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property.

> **Important**

>  `ARObjectScanningConfiguration` is for use only in development scenarios. Because the high-fidelity spatial mapping required by object scanning has a high performance and energy cost, many ARKit features are disabled that aren’t required for object scanning.

## Topics

### Creating a Configuration

- [init()](arobjectscanningconfiguration/init%28%29.md): Initializes a new object scanning configuration.

### Enabling Plane Detection

- [planeDetection](arobjectscanningconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.
- [ARWorldTrackingConfiguration.PlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Managing Device Camera Behavior

- [isAutoFocusEnabled](arobjectscanningconfiguration/isautofocusenabled.md): A Boolean value that determines whether the device camera uses fixed focus or autofocus behavior.

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

# ARObjectScanningConfiguration (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS · iPadOS

A configuration that recognizes objects and collects high-fidelity data about specific objects using the rear-facing camera.

## Declaration

```objectivec
@interface ARObjectScanningConfiguration : ARConfiguration
```

<a id="overview"></a>

## Overview

To create an app that recognizes objects in the physical environment, first you scan them during development using `ARObjectScanningConfiguration`. After you’ve scanned an object, call [createReferenceObjectWithTransform:center:extent:completionHandler:](arsession/createreferenceobject%28transform_center_extent_completionhandler_%29.md) to turn it into an [ARReferenceObject](arreferenceobject.md) that you can use to detect it again at run-time. When users run your app, you ask ARKit to look for your scanned obects by running a world tracking configuration and assigning reference objects to its [detectionObjects](arworldtrackingconfiguration/detectionobjects.md) property.

> **Important**

>  `ARObjectScanningConfiguration` is for use only in development scenarios. Because the high-fidelity spatial mapping required by object scanning has a high performance and energy cost, many ARKit features are disabled that aren’t required for object scanning.

## Topics

### Creating a Configuration

- [init](arobjectscanningconfiguration/init%28%29.md): Initializes a new object scanning configuration.
- [new](arobjectscanningconfiguration/new.md): Creates a new object scanning configuration.

### Enabling Plane Detection

- [planeDetection](arobjectscanningconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.
- [ARPlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Managing Device Camera Behavior

- [autoFocusEnabled](arobjectscanningconfiguration/isautofocusenabled.md): A Boolean value that determines whether the device camera uses fixed focus or autofocus behavior.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)
