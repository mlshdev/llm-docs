> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice/update(_:)](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/update(_:))

# update(\_:)

**Framework:** AudioAccessoryKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+

Updates the accessory’s configuration.

## Declaration

```swift
final nonisolated(nonsending) func update(_ configuration: AccessoryControlDevice.Configuration) async throws
```

## Parameters

- `configuration`: The new configuration to apply.

<a id="discussion"></a>

## Discussion

> **Important**

> Call this method only from your app extension.

For example, the following code updates device placement:

```swift
// Get the current state.
let accessoryDevice = try AccessoryControlDevice.current(for: myAccessory)

// Modify the configuration with new values.
var configuration = accessoryDevice.configuration
configuration.devicePlacement = .onHead

// Apply the updated configuration.
try await accessoryDevice.update(configuration)
print("Successfully updated device configuration")
```

Always register a capability before trying to update it. For example, the code above is valid only if you included the [placement](capabilities/placement.md) capability when registering the accessory.

This method throws an error if the update fails.
