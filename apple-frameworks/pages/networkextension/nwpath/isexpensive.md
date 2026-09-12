> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpath/isexpensive](https://developer.apple.com/documentation/networkextension/nwpath/isexpensive)

# isExpensive (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean that indicates whether or not the path uses an expensive interface.

> Use the [nw_path_is_expensive(\_:)](../../network/nw_path_is_expensive%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var isExpensive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns YES is the path uses an interface that is considered expensive, such as when using a cellular data plan.

## See Also

### Getting network path properties

- [status](status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [isConstrained](isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

# expensive (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean that indicates whether or not the path uses an expensive interface.

> Use the [nw_path_is_expensive](../../network/nw_path_is_expensive%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExpensive) BOOL expensive;
```

<a id="Discussion"></a>

## Discussion

Returns YES is the path uses an interface that is considered expensive, such as when using a cellular data plan.

## See Also

### Getting network path properties

- [status](status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](../nwpathstatus.md): Deprecated.
- [constrained](isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.
