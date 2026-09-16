> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/configuration/devicesensorauthorization

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
