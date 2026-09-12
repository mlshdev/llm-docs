> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxversioningapi](https://developer.apple.com/documentation/professional_video_applications/fxversioningapi)

# FxVersioningAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1+

A collection of methods that a host application implements to identify the plug-in version used by a project when it was first created.

## Declaration

```swift
protocol FxVersioningAPI
```

## Mentioned In

- [Versioning and obsoleting old plug-ins](../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)
- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="overview"></a>

## Overview

This protocol allows a plug-in instance to determine the version of the original instance of the plug-in. For example, if a user creates a project using version 1 of a plug-in, and then updates to version 2, the plug-in determines the old plug-in version and chooses which version to render.

This protocol was first introduced in FxPlug SDK 1.2.1.

## Topics

### Getting and Modifying Plug-in Version Numbers

- [versionAtCreation()](fxversioningapi/versionatcreation%28%29.md): Provides the version number of a plug-in that a project uses.
- [updateVersion(atCreation:)](fxversioningapi/updateversion%28atcreation_%29.md): Updates the version of the plug-in that was stored when the plug-in was added to the clip.

## See Also

### Legacy plug-ins

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md): Update existing FxPlug 3 plug-ins to out-of-process FxPlug 4 plug-ins.
- [Versioning and obsoleting old plug-ins](../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md): Version plug-ins to add new capabilities, or obsolete them to remove them from the Motion Library.

# FxVersioningAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A collection of methods that a host application implements to identify the plug-in version used by a project when it was first created.

## Declaration

```objectivec
@protocol FxVersioningAPI
```

## Mentioned In

- [Versioning and obsoleting old plug-ins](../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)
- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="overview"></a>

## Overview

This protocol allows a plug-in instance to determine the version of the original instance of the plug-in. For example, if a user creates a project using version 1 of a plug-in, and then updates to version 2, the plug-in determines the old plug-in version and chooses which version to render.

This protocol was first introduced in FxPlug SDK 1.2.1.

## Topics

### Getting and Modifying Plug-in Version Numbers

- [versionAtCreation](fxversioningapi/versionatcreation%28%29.md): Provides the version number of a plug-in that a project uses.
- [updateVersionAtCreation:](fxversioningapi/updateversion%28atcreation_%29.md): Updates the version of the plug-in that was stored when the plug-in was added to the clip.

## See Also

### Legacy plug-ins

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md): Update existing FxPlug 3 plug-ins to out-of-process FxPlug 4 plug-ins.
- [Versioning and obsoleting old plug-ins](../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md): Version plug-ins to add new capabilities, or obsolete them to remove them from the Motion Library.
