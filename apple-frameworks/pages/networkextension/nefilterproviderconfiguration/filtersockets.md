> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/filtersockets](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/filtersockets)

# filterSockets (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.

## Declaration

```swift
var filterSockets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring filter behavior

- [filterBrowsers](filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterPackets](filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.

# filterSockets (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.

## Declaration

```objectivec
@property BOOL filterSockets;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring filter behavior

- [filterBrowsers](filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterPackets](filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.
