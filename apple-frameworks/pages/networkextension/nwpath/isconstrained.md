> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpath/isconstrained](https://developer.apple.com/documentation/networkextension/nwpath/isconstrained)

# isConstrained (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

> Use the [nw_path_is_constrained(\_:)](../../network/nw_path_is_constrained%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var isConstrained: Bool { get }
```

## See Also

### Getting network path properties

- [status](status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [isExpensive](isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.

# constrained (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

> Use the [nw_path_is_constrained](../../network/nw_path_is_constrained%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConstrained) BOOL constrained;
```

## See Also

### Getting network path properties

- [status](status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [expensive](isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
