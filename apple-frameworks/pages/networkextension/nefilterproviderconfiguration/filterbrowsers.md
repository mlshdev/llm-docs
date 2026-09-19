> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/filterbrowsers

# filterBrowsers (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ (deprecated in 10.15) · visionOS 1.0+

A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.

## Declaration

```swift
var filterBrowsers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring filter behavior

- [filterSockets](filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.
- [filterPackets](filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.

# filterBrowsers (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ (deprecated in 10.15) · visionOS 1.0+

A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.

## Declaration

```objectivec
@property BOOL filterBrowsers;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring filter behavior

- [filterSockets](filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.
- [filterPackets](filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.
