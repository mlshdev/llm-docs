> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddiscoveryextension/stopdiscovery(session:)](https://developer.apple.com/documentation/devicediscoveryextension/dddiscoveryextension/stopdiscovery(session:))

# stopDiscovery(session:)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst · macOS 13.0+ · visionOS

Ends the extension’s device discovery process.

## Declaration

```swift
func stopDiscovery(session: DDDiscoverySession)
```

## Parameters

- `session`: An object that reports discovery events.

<a id="Discussion"></a>

## Discussion

The system controls the discovery process using this function by calling it when [AVRoutePickerView](../../avkit/avroutepickerview.md) dismisses. Your extension’s implementation performs any cleanup necessary, such as stopping Bluetooth or Bonjour scanning.

## See Also

### Controlling discovery

- [startDiscovery(session:)](startdiscovery%28session_%29.md): Begins the extension’s device discovery process.
