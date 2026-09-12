> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/endpoint](https://developer.apple.com/documentation/networkextension/nwudpsession/endpoint)

# endpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The destination endpoint with which this session was created.

> Use the [nw_connection_copy_endpoint(\_:)](../../network/nw_connection_copy_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var endpoint: NWEndpoint { get }
```

## See Also

### Getting session properties

- [currentPath](currentpath.md): Deprecated. The current evaluated path for the session’s [resolvedEndpoint](resolvedendpoint.md) property.

# endpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The destination endpoint with which this session was created.

> Use the [nw_connection_copy_endpoint](../../network/nw_connection_copy_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (atomic, readonly) NWEndpoint * endpoint;
```

## See Also

### Getting session properties

- [currentPath](currentpath.md): Deprecated. The current evaluated path for the session’s [resolvedEndpoint](resolvedendpoint.md) property.
