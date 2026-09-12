> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpath/status](https://developer.apple.com/documentation/networkextension/nwpath/status)

# status (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The evaluated status of the network path.

> Use the [nw_path_get_status(\_:)](../../network/nw_path_get_status%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var status: NWPathStatus { get }
```

<a id="Discussion"></a>

## Discussion

The status of a path indicates whether or not the process is able to make connection attempts to any, or a specific, network endpoint. A satisfied status does not guarantee that a connection will be successful, but it does ensure that there is some interface over which an attempt can be made.

## See Also

### Getting network path properties

- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [isExpensive](isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [isConstrained](isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

# status (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The evaluated status of the network path.

> Use the [nw_path_get_status](../../network/nw_path_get_status%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NWPathStatus status;
```

<a id="Discussion"></a>

## Discussion

The status of a path indicates whether or not the process is able to make connection attempts to any, or a specific, network endpoint. A satisfied status does not guarantee that a connection will be successful, but it does ensure that there is some interface over which an attempt can be made.

## See Also

### Getting network path properties

- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [expensive](isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [constrained](isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.
