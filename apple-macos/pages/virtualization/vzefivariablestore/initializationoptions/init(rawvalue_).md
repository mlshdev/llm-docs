> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzefivariablestore/initializationoptions/init(rawvalue:)

# init(rawValue:)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new EFI variable store with the specified value.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: An unsigned integer that describes the EFI initialization options.
