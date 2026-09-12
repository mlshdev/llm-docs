> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/filterpackets](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/filterpackets)

# filterPackets (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates that the system applies the filter to packets of network data.

## Declaration

```swift
var filterPackets: Bool { get set }
```

## See Also

### Configuring filter behavior

- [filterBrowsers](filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterSockets](filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.

# filterPackets (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates that the system applies the filter to packets of network data.

## Declaration

```objectivec
@property BOOL filterPackets;
```

## See Also

### Configuring filter behavior

- [filterBrowsers](filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterSockets](filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.
