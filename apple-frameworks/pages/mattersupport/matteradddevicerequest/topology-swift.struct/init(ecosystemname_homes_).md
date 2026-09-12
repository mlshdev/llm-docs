> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/topology-swift.struct/init(ecosystemname:homes:)](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/topology-swift.struct/init(ecosystemname:homes:))

# init(ecosystemName:homes:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Creates the topology.

## Declaration

```swift
init(ecosystemName: String, homes: [MatterAddDeviceRequest.Home])
```

## Parameters

- `ecosystemName`: The name of your ecosystem. This is a localized string that appears during device setup.
- `homes`: An array of available homes to add the new device into.

## See Also

### Creating the topology

- [init(from:)](../init%28from_%29.md): Create the request from a decoder.
