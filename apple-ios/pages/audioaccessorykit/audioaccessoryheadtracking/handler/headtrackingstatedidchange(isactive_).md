> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler/headtrackingstatedidchange(isactive:)

# headTrackingStateDidChange(isActive:)

**Framework:** AudioAccessoryKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Called when the user-facing Head Tracking state for this accessory changes (e.g. via Settings or Control Center).

## Declaration

```swift
func headTrackingStateDidChange(isActive: Bool)
```

## Parameters

- `isActive`: `true` when head tracking is enabled and the extension should stream IMU samples via `Session.sendDataToAudioExtension(_:)`; `false` when head tracking is disabled and the extension should stop sampling.

<a id="discussion"></a>

## Discussion

Implementations should start or stop sampling the accessory’s IMU based on the new state.
