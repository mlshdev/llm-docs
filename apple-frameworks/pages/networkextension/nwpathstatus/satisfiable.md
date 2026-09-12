> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpathstatus/satisfiable](https://developer.apple.com/documentation/networkextension/nwpathstatus/satisfiable)

# NWPathStatus.satisfiable (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The path is not currently satisfied, but may become satisfied upon a connection attempt. This can be due to a service, such as a VPN or a cellular data connection not being activated.

> Use the [nw_path_status_t](../../network/nw_path_status_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
case satisfiable
```

## See Also

### Path Statuses

- [NWPathStatus.invalid](invalid.md): Deprecated. The path cannot be evaluated.
- [NWPathStatus.satisfied](satisfied.md): Deprecated. The path is ready to be used for network connections.
- [NWPathStatus.unsatisfied](unsatisfied.md): Deprecated. The path for network connections is not available, either due to lack of network connectivity or being prohibited by system policy.

# NWPathStatusSatisfiable (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The path is not currently satisfied, but may become satisfied upon a connection attempt. This can be due to a service, such as a VPN or a cellular data connection not being activated.

> Use the [nw_path_status_t](../../network/nw_path_status_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
NWPathStatusSatisfiable
```

## See Also

### Path Statuses

- [NWPathStatusInvalid](invalid.md): Deprecated. The path cannot be evaluated.
- [NWPathStatusSatisfied](satisfied.md): Deprecated. The path is ready to be used for network connections.
- [NWPathStatusUnsatisfied](unsatisfied.md): Deprecated. The path for network connections is not available, either due to lack of network connectivity or being prohibited by system policy.
