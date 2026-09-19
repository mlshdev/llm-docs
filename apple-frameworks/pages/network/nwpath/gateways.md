> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwpath/gateways

# gateways

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A list of gateways configured on the interfaces available to a path.

## Declaration

```swift
var gateways: [NWEndpoint] { get }
```

## See Also

### Inspecting Interfaces

- [usesInterfaceType(\_:)](usesinterfacetype%28__%29.md): Checks if connections using the path may send traffic over a specific interface type.
- [availableInterfaces](availableinterfaces.md): A list of all interfaces available to the path, in order of preference.
