> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice/current(for:)

# current(for:)

**Framework:** AudioAccessoryKit  
**Kind:** Type Method  
**Availability:** iOS 26.4+

Retrieves the accessory’s current configuration.

## Declaration

```swift
static func current(for accessory: ASAccessory) throws -> AccessoryControlDevice
```

## Parameters

- `accessory`: The accessory for which to get the current state.

<a id="return-value"></a>

## Return Value

The accessory’s current configuration.

<a id="discussion"></a>

## Discussion

> **Important**

> Call this method only from your app extension.

This method throws an error if the accessory isn’t registered, or if communication fails.
