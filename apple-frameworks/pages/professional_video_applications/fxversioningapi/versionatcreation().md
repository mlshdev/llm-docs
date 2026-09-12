> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxversioningapi/versionatcreation()](https://developer.apple.com/documentation/professional_video_applications/fxversioningapi/versionatcreation())

# versionAtCreation() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Provides the version number of a plug-in that a project uses.

## Declaration

```swift
func versionAtCreation() -> UInt32
```

<a id="return-value"></a>

## Return Value

An integer representation of the version number.

## Mentioned In

- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)
- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Typically, a plug-in’s version increments with each release. The exact semantics are up to the plug-in developer.

To support versioning, each plug-in within a bundle defines its current version number as a string value with a `version` key in the plug-in’s entry in the `ProPlugPlugInList` array in the plug-in’s Info.plist.

When a project is first created, the host application remembers the version number of each plug-in used in that project. Later, when the user opens the project, a plug-in can query the value of `versionAtCreation` and then handle any backward-compatibility issues.

## See Also

### Getting and Modifying Plug-in Version Numbers

- [updateVersion(atCreation:)](updateversion%28atcreation_%29.md): Updates the version of the plug-in that was stored when the plug-in was added to the clip.

# versionAtCreation (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the version number of a plug-in that a project uses.

## Declaration

```objectivec
- (unsigned int) versionAtCreation;
```

<a id="return-value"></a>

## Return Value

An integer representation of the version number.

## Mentioned In

- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)
- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Typically, a plug-in’s version increments with each release. The exact semantics are up to the plug-in developer.

To support versioning, each plug-in within a bundle defines its current version number as a string value with a `version` key in the plug-in’s entry in the `ProPlugPlugInList` array in the plug-in’s Info.plist.

When a project is first created, the host application remembers the version number of each plug-in used in that project. Later, when the user opens the project, a plug-in can query the value of `versionAtCreation` and then handle any backward-compatibility issues.

## See Also

### Getting and Modifying Plug-in Version Numbers

- [updateVersionAtCreation:](updateversion%28atcreation_%29.md): Updates the version of the plug-in that was stored when the plug-in was added to the clip.
