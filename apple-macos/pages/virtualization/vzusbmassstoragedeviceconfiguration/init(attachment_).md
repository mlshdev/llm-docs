> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzusbmassstoragedeviceconfiguration/init(attachment:)

# init(attachment:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new storage device configuration with the specified attachment.

## Declaration

```swift
init(attachment: VZStorageDeviceAttachment)
```

## Parameters

- `attachment`: A [VZStorageDeviceAttachment](../vzstoragedeviceattachment.md) object.

# initWithAttachment: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a new storage device configuration with the specified attachment.

## Declaration

```objectivec
- (instancetype) initWithAttachment:(VZStorageDeviceAttachment *) attachment;
```

## Parameters

- `attachment`: A [VZStorageDeviceAttachment](../vzstoragedeviceattachment.md) object.
