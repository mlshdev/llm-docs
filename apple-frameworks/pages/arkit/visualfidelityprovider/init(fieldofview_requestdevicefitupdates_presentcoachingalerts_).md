> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelityprovider/init(fieldofview:requestdevicefitupdates:presentcoachingalerts:)](https://developer.apple.com/documentation/arkit/visualfidelityprovider/init(fieldofview:requestdevicefitupdates:presentcoachingalerts:))

# init(fieldOfView:requestDeviceFitUpdates:presentCoachingAlerts:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Create a visual fidelity data provider.

## Declaration

```swift
convenience init(fieldOfView: VisualFidelityProvider.FieldOfView? = nil, requestDeviceFitUpdates: Bool = false, presentCoachingAlerts: Bool = false)
```

## Parameters

- `fieldOfView`: Field of view specification to monitor. Use Apple-defined presets (e.g., `.presetA`) or `.polygon(points:)` for precise geometric control. Pass `nil` to skip field of view monitoring. Default is `nil`.
- `requestDeviceFitUpdates`: When true, device fit status will be included in fidelity data updates. Default is false.
- `presentCoachingAlerts`: When true, system will automatically present user notifications with coaching tips when validation errors are detected. Default is false.
