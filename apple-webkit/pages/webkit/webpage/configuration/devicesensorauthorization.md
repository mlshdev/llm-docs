> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/devicesensorauthorization](https://developer.apple.com/documentation/webkit/webpage/configuration/devicesensorauthorization)

# deviceSensorAuthorization

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Allows specifying how web resources may access device sensors.

## Declaration

```swift
@MainActor var deviceSensorAuthorization: WebPage.DeviceSensorAuthorization
```

<a id="discussion"></a>

## Discussion

The default implementation returns `WKPermissionDecision.prompt` for all requests.
