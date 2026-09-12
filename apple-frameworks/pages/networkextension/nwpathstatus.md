> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpathstatus](https://developer.apple.com/documentation/networkextension/nwpathstatus)

# NWPathStatus (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

> Use the [nw_path_status_t](../network/nw_path_status_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
enum NWPathStatus
```

## Topics

### Path Statuses

- [NWPathStatus.invalid](nwpathstatus/invalid.md): Deprecated. The path cannot be evaluated.
- [NWPathStatus.satisfied](nwpathstatus/satisfied.md): Deprecated. The path is ready to be used for network connections.
- [NWPathStatus.unsatisfied](nwpathstatus/unsatisfied.md): Deprecated. The path for network connections is not available, either due to lack of network connectivity or being prohibited by system policy.
- [NWPathStatus.satisfiable](nwpathstatus/satisfiable.md): Deprecated. The path is not currently satisfied, but may become satisfied upon a connection attempt. This can be due to a service, such as a VPN or a cellular data connection not being activated.

### Initializers

- [init(rawValue:)](nwpathstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting network path properties

- [status](nwpath/status.md): Deprecated. The evaluated status of the network path.
- [isExpensive](nwpath/isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [isConstrained](nwpath/isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

# NWPathStatus (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

> Use the [nw_path_status_t](../network/nw_path_status_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
enum NWPathStatus : NSInteger;
```

## Topics

### Path Statuses

- [NWPathStatusInvalid](nwpathstatus/invalid.md): Deprecated. The path cannot be evaluated.
- [NWPathStatusSatisfied](nwpathstatus/satisfied.md): Deprecated. The path is ready to be used for network connections.
- [NWPathStatusUnsatisfied](nwpathstatus/unsatisfied.md): Deprecated. The path for network connections is not available, either due to lack of network connectivity or being prohibited by system policy.
- [NWPathStatusSatisfiable](nwpathstatus/satisfiable.md): Deprecated. The path is not currently satisfied, but may become satisfied upon a connection attempt. This can be due to a service, such as a VPN or a cellular data connection not being activated.

## See Also

### Getting network path properties

- [status](nwpath/status.md): Deprecated. The evaluated status of the network path.
- [expensive](nwpath/isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [constrained](nwpath/isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.
