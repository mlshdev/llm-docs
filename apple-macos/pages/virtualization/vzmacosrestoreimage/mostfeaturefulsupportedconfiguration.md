> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/mostfeaturefulsupportedconfiguration](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/mostfeaturefulsupportedconfiguration)

# mostFeaturefulSupportedConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.

## Declaration

```swift
@NSCopying var mostFeaturefulSupportedConfiguration: VZMacOSConfigurationRequirements? { get }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [isSupported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [url](url.md): The URL of this restore image.

# mostFeaturefulSupportedConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.

## Declaration

```objectivec
@property (copy, readonly, nullable) VZMacOSConfigurationRequirements * mostFeaturefulSupportedConfiguration;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [supported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [URL](url.md): The URL of this restore image.
