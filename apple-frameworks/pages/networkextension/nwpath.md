> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpath](https://developer.apple.com/documentation/networkextension/nwpath)

# NWPath (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The path made by a network connection, including information about its viability.

> Use the [nw_path_t](../network/nw_path_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWPath
```

<a id="overview"></a>

## Overview

For example, if the path status is [NWPathStatus.satisfied](nwpathstatus/satisfied.md), then a connection attempt will be made.

When attached to a specific connection, a path takes all of the connection parameters into account. For example, if the route for a connection changes or is removed, the path will reflect that change. Note that every path is evaluated within the context of the process it is running in, and may be different across processes.

[NWPath](nwpath.md) is a static object, and properties of the path will never change. To monitor changing network status, use Key-Value Observing (KVO) to watch a path property on another object. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## Topics

### Getting network path properties

- [status](nwpath/status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](nwpathstatus.md): Deprecated.
- [isExpensive](nwpath/isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [isConstrained](nwpath/isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

### Comparing network paths

- [isEqual(to:)](nwpath/isequal%28to_%29.md): Deprecated. Comparison method for [NWPath](nwpath.md) objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NWPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The path made by a network connection, including information about its viability.

> Use the [nw_path_t](../network/nw_path_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWPath : NSObject
```

<a id="overview"></a>

## Overview

For example, if the path status is [NWPathStatusSatisfied](nwpathstatus/satisfied.md), then a connection attempt will be made.

When attached to a specific connection, a path takes all of the connection parameters into account. For example, if the route for a connection changes or is removed, the path will reflect that change. Note that every path is evaluated within the context of the process it is running in, and may be different across processes.

[NWPath](nwpath.md) is a static object, and properties of the path will never change. To monitor changing network status, use Key-Value Observing (KVO) to watch a path property on another object. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## Topics

### Getting network path properties

- [status](nwpath/status.md): Deprecated. The evaluated status of the network path.
- [NWPathStatus](nwpathstatus.md): Deprecated.
- [expensive](nwpath/isexpensive.md): Deprecated. A Boolean that indicates whether or not the path uses an expensive interface.
- [constrained](nwpath/isconstrained.md): Deprecated. A Boolean that indicates whether or not the path uses a constrained interface, such as when using low-data mode.

### Comparing network paths

- [isEqualToPath:](nwpath/isequal%28to_%29.md): Deprecated. Comparison method for [NWPath](nwpath.md) objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
