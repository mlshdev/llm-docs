> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum/absolute](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum/absolute)

# MediaOutputDevice.VolumeControl.absolute

**Framework:** Media Device  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Full volume control is supported, [setVolume(\_:for:)](../../mediadeviceextension/setvolume%28__for_%29.md) may be used to set the volume.

## Declaration

```swift
case absolute
```

## Mentioned In

- [Creating a media device extension](../../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

The device supports absolute volume control, allowing direct setting of volume to specific levels (such as 0-100%). This provides the most precise volume control and enables features like volume sliders in the user interface.
