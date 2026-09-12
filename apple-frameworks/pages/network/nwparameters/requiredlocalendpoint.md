> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/requiredlocalendpoint](https://developer.apple.com/documentation/network/nwparameters/requiredlocalendpoint)

# requiredLocalEndpoint

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A specific local IP address and port to use for connections and listeners.

## Declaration

```swift
final var requiredLocalEndpoint: NWEndpoint? { get set }
```

## See Also

### Selecting Paths

- [requiredInterfaceType](requiredinterfacetype.md): An interface type to require on connections and listeners.
- [requiredInterface](requiredinterface.md): A specific interface to require on connections, listeners, and browsers.
- [prohibitConstrainedPaths](prohibitconstrainedpaths.md): A Boolean that prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.
- [prohibitExpensivePaths](prohibitexpensivepaths.md): A Boolean that prevents connections, listeners, and browsers from using network paths marked as expensive.
- [prohibitedInterfaceTypes](prohibitedinterfacetypes.md): A list of interface types that connections, listeners, and browsers will not use.
- [prohibitedInterfaces](prohibitedinterfaces.md): A list of specific interfaces that connections and listeners will not use.
