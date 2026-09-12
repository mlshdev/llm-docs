> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum/relative](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum/relative)

# MediaOutputDevice.VolumeControl.relative

**Framework:** Media Device  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Relative volume control is supported, [changeVolume(by:for:)](../../mediadeviceextension/changevolume%28by_for_%29.md) must be used to change the volume.

## Declaration

```swift
case relative
```

## Mentioned In

- [Creating a media device extension](../../creating-a-media-device-extension.md)

<a id="discussion"></a>

## Discussion

The device only supports relative volume adjustments (up/down by increments). This is common with devices that have hardware volume buttons but do not expose their current volume level or allow direct volume setting.
