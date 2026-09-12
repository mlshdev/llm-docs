> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/prohibitconstrainedpaths](https://developer.apple.com/documentation/network/nwparameters/prohibitconstrainedpaths)

# prohibitConstrainedPaths

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean that prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.

## Declaration

```swift
final var prohibitConstrainedPaths: Bool { get set }
```

## See Also

### Selecting Paths

- [requiredInterfaceType](requiredinterfacetype.md): An interface type to require on connections and listeners.
- [requiredInterface](requiredinterface.md): A specific interface to require on connections, listeners, and browsers.
- [requiredLocalEndpoint](requiredlocalendpoint.md): A specific local IP address and port to use for connections and listeners.
- [prohibitExpensivePaths](prohibitexpensivepaths.md): A Boolean that prevents connections, listeners, and browsers from using network paths marked as expensive.
- [prohibitedInterfaceTypes](prohibitedinterfacetypes.md): A list of interface types that connections, listeners, and browsers will not use.
- [prohibitedInterfaces](prohibitedinterfaces.md): A list of specific interfaces that connections and listeners will not use.
