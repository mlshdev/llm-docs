> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettaavailability](https://developer.apple.com/documentation/virtualization/vzlinuxrosettaavailability)

# VZLinuxRosettaAvailability (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that describe the availability and installation status of Rosetta.

## Declaration

```swift
enum VZLinuxRosettaAvailability
```

## Mentioned In

- [Running Intel Binaries in Linux VMs](running-intel-binaries-in-linux-vms.md)

## Topics

### Rosetta availability states

- [VZLinuxRosettaAvailability.notSupported](vzlinuxrosettaavailability/notsupported.md): The current hardware or software configuration doesn’t support Rosetta.
- [VZLinuxRosettaAvailability.notInstalled](vzlinuxrosettaavailability/notinstalled.md): Rosetta isn’t installed.
- [VZLinuxRosettaAvailability.installed](vzlinuxrosettaavailability/installed.md): Rosetta is available on the host system.

### Initializers

- [init(rawValue:)](vzlinuxrosettaavailability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking Rosetta availability

- [availability](vzlinuxrosettadirectoryshare/availability.md): A value that indicates the current state of Rosetta’s availability.

# VZLinuxRosettaAvailability (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that describe the availability and installation status of Rosetta.

## Declaration

```objectivec
enum VZLinuxRosettaAvailability : NSInteger;
```

## Mentioned In

- [Running Intel Binaries in Linux VMs](running-intel-binaries-in-linux-vms.md)

## Topics

### Rosetta availability states

- [VZLinuxRosettaAvailabilityNotSupported](vzlinuxrosettaavailability/notsupported.md): The current hardware or software configuration doesn’t support Rosetta.
- [VZLinuxRosettaAvailabilityNotInstalled](vzlinuxrosettaavailability/notinstalled.md): Rosetta isn’t installed.
- [VZLinuxRosettaAvailabilityInstalled](vzlinuxrosettaavailability/installed.md): Rosetta is available on the host system.

## See Also

### Checking Rosetta availability

- [availability](vzlinuxrosettadirectoryshare/availability.md): A value that indicates the current state of Rosetta’s availability.
