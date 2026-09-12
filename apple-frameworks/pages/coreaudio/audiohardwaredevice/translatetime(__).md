> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice/translatetime(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice/translatetime(_:))

# translateTime(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Translates the time in the device’s time base from one representation to another. Note that the device has to be running

## Declaration

```swift
func translateTime(_ timestamp: AudioTimeStamp) throws -> AudioTimeStamp
```

## Parameters

- `timestamp`: An AudioTimeStamp containing the time to be translated.

<a id="return-value"></a>

## Return Value

An AudioTimeStamp containing the translated time.
