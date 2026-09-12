> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioblockdeviceconfiguration/blockdeviceidentifier](https://developer.apple.com/documentation/virtualization/vzvirtioblockdeviceconfiguration/blockdeviceidentifier)

# blockDeviceIdentifier (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.3+

The string that identifies the VIRTIO block device.

## Declaration

```swift
var blockDeviceIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use `blockDeviceIdentifier` to name devices so they’re more discoverable in the Linux guest. The identifier must be an ASCII encodable string of 20 bytes or less.

Validate the identifier string using [validateBlockDeviceIdentifier(\_:)](validateblockdeviceidentifier%28__%29.md) before attempting to set this property, for example:

```swift
let idString = "ProjectData"
do {
    try VZVirtioBlockDeviceConfiguration.validateBlockDeviceIdentifier(idString)
    blockDeviceIdentifier = idString
} catch {
    // Handle error as appropriate.
    throw error
}
```

> **Warning**

>  Setting the identifier to an invalid string results in a fatal error that terminates the app.

In a Linux guest, device identifiers are visible in the `/dev/disk/by-id/` directory.

# blockDeviceIdentifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.3+

The string that identifies the VIRTIO block device.

## Declaration

```objectivec
@property (copy) NSString * blockDeviceIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use `blockDeviceIdentifier` to name devices so they’re more discoverable in the Linux guest. The identifier must be an ASCII encodable string of 20 bytes or less.

Validate the identifier string using [validateBlockDeviceIdentifier:error:](validateblockdeviceidentifier%28__%29.md) before attempting to set this property, for example:

```swift
let idString = "ProjectData"
do {
    try VZVirtioBlockDeviceConfiguration.validateBlockDeviceIdentifier(idString)
    blockDeviceIdentifier = idString
} catch {
    // Handle error as appropriate.
    throw error
}
```

> **Warning**

>  Setting the identifier to an invalid string results in a fatal error that terminates the app.

In a Linux guest, device identifiers are visible in the `/dev/disk/by-id/` directory.
