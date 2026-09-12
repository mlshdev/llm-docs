> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/session/senddatatoaudioextension(_:)](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/session/senddatatoaudioextension(_:))

# sendDataToAudioExtension(\_:)

**Framework:** AudioAccessoryKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Forward a frame of IMU sensor data from the accessory to the Spatial Audio renderer.

## Declaration

```swift
final func sendDataToAudioExtension(_ data: Data) throws
```

## Parameters

- `data`: The raw sensor frame as received from the accessory. Must be 1–70 bytes; otherwise `AudioAccessoryError.invalidDataSize` is thrown.

<a id="discussion"></a>

## Discussion

> **Throws**

> `AudioAccessoryError.invalidDataSize` if `data` is empty or larger than 70 bytes; `AudioAccessoryError.notActivated` if the session is not currently active.
