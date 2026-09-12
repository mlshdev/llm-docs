> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettaavailability/notsupported](https://developer.apple.com/documentation/virtualization/vzlinuxrosettaavailability/notsupported)

# VZLinuxRosettaAvailability.notSupported (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 13.0+

The current hardware or software configuration doesn’t support Rosetta.

## Declaration

```swift
case notSupported
```

<a id="Discussion"></a>

## Discussion

This error can occur if the host’s version of macOS doesn’t support Rosetta, such as macOS 12 or earlier, or if the underlying Mac computer doesn’t support Rosetta, such as an Intel-based Mac computer.

## See Also

### Rosetta availability states

- [VZLinuxRosettaAvailability.notInstalled](notinstalled.md): Rosetta isn’t installed.
- [VZLinuxRosettaAvailability.installed](installed.md): Rosetta is available on the host system.

# VZLinuxRosettaAvailabilityNotSupported (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 13.0+

The current hardware or software configuration doesn’t support Rosetta.

## Declaration

```objectivec
VZLinuxRosettaAvailabilityNotSupported
```

<a id="Discussion"></a>

## Discussion

This error can occur if the host’s version of macOS doesn’t support Rosetta, such as macOS 12 or earlier, or if the underlying Mac computer doesn’t support Rosetta, such as an Intel-based Mac computer.

## See Also

### Rosetta availability states

- [VZLinuxRosettaAvailabilityNotInstalled](notinstalled.md): Rosetta isn’t installed.
- [VZLinuxRosettaAvailabilityInstalled](installed.md): Rosetta is available on the host system.
