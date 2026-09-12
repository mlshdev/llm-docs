> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxversioningapi/updateversion(atcreation:)](https://developer.apple.com/documentation/professional_video_applications/fxversioningapi/updateversion(atcreation:))

# updateVersion(atCreation:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Updates the version of the plug-in that was stored when the plug-in was added to the clip.

## Declaration

```swift
func updateVersion(atCreation newVersion: UInt32) -> Bool
```

## Parameters

- `newVersion`: The new version number.

<a id="return-value"></a>

## Return Value

If the update was successful, this method returns `YES`; otherwise, `NO`.

## Mentioned In

- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)

<a id="discussion"></a>

## Discussion

No information about previous backward compatibility is stored, and the plug-in is treated by the host app as if it were created with the specified version number. Updating fails if the specified number is lower than the already-saved version number.

## See Also

### Getting and Modifying Plug-in Version Numbers

- [versionAtCreation()](versionatcreation%28%29.md): Provides the version number of a plug-in that a project uses.

# updateVersionAtCreation: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Updates the version of the plug-in that was stored when the plug-in was added to the clip.

## Declaration

```objectivec
- (BOOL) updateVersionAtCreation:(UInt32) newVersion;
```

## Parameters

- `newVersion`: The new version number.

<a id="return-value"></a>

## Return Value

If the update was successful, this method returns `YES`; otherwise, `NO`.

## Mentioned In

- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)

<a id="discussion"></a>

## Discussion

No information about previous backward compatibility is stored, and the plug-in is treated by the host app as if it were created with the specified version number. Updating fails if the specified number is lower than the already-saved version number.

## See Also

### Getting and Modifying Plug-in Version Numbers

- [versionAtCreation](versionatcreation%28%29.md): Provides the version number of a plug-in that a project uses.
