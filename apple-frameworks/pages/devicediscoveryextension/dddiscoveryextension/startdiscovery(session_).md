> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddiscoveryextension/startdiscovery(session:)](https://developer.apple.com/documentation/devicediscoveryextension/dddiscoveryextension/startdiscovery(session:))

# startDiscovery(session:)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst · macOS 13.0+ · visionOS

Begins the extension’s device discovery process.

## Declaration

```swift
func startDiscovery(session: DDDiscoverySession)
```

## Parameters

- `session`: An object that reports discovery events.

<a id="Discussion"></a>

## Discussion

The system controls the discovery process using this function by calling it when [AVRoutePickerView](../../avkit/avroutepickerview.md) displays. You code your extension to search the local network or paired Bluetooth devices for a third-party device of interest that you want the system to include in the picker.

## See Also

### Controlling discovery

- [stopDiscovery(session:)](stopdiscovery%28session_%29.md): Ends the extension’s device discovery process.
