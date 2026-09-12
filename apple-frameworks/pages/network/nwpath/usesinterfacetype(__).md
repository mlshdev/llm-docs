> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/usesinterfacetype(_:)](https://developer.apple.com/documentation/network/nwpath/usesinterfacetype(_:))

# usesInterfaceType(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Checks if connections using the path may send traffic over a specific interface type.

## Declaration

```swift
func usesInterfaceType(_ type: NWInterface.InterfaceType) -> Bool
```

<a id="Discussion"></a>

## Discussion

Paths can use interface types by directly routing over an interface, routing through a tunnel that goes over a physical interface, or being eligble to use multiple interfaces directly.

## See Also

### Inspecting Interfaces

- [availableInterfaces](availableinterfaces.md): A list of all interfaces available to the path, in order of preference.
- [gateways](gateways.md): A list of gateways configured on the interfaces available to a path.
