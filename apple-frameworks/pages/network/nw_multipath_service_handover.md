> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_multipath_service_handover](https://developer.apple.com/documentation/network/nw_multipath_service_handover)

# nw_multipath_service_handover (Swift)

**Framework:** Network  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Enable multipath, but only use other interfaces when the primary interface is lost.

## Declaration

```swift
var nw_multipath_service_handover: nw_multipath_service_t { get }
```

## See Also

### Multipath service types

- [nw_multipath_service_disabled](nw_multipath_service_disabled.md): Disable multipath.
- [nw_multipath_service_interactive](nw_multipath_service_interactive.md): Enable multipath to use other interfaces when the primary interface encounters loss or delay.
- [nw_multipath_service_aggregate](nw_multipath_service_aggregate.md): Enable multipath to maximize bandwidth across multiple interfaces.

# nw_multipath_service_handover (Objective-C)

**Framework:** Network  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Enable multipath, but only use other interfaces when the primary interface is lost.

## Declaration

```objectivec
nw_multipath_service_handover
```

## See Also

### Multipath service types

- [nw_multipath_service_disabled](nw_multipath_service_disabled.md): Disable multipath.
- [nw_multipath_service_interactive](nw_multipath_service_interactive.md): Enable multipath to use other interfaces when the primary interface encounters loss or delay.
- [nw_multipath_service_aggregate](nw_multipath_service_aggregate.md): Enable multipath to maximize bandwidth across multiple interfaces.
