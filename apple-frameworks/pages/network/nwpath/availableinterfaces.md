> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/availableinterfaces](https://developer.apple.com/documentation/network/nwpath/availableinterfaces)

# availableInterfaces

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A list of all interfaces available to the path, in order of preference.

## Declaration

```swift
let availableInterfaces: [NWInterface]
```

## See Also

### Inspecting Interfaces

- [usesInterfaceType(\_:)](usesinterfacetype%28__%29.md): Checks if connections using the path may send traffic over a specific interface type.
- [gateways](gateways.md): A list of gateways configured on the interfaces available to a path.
