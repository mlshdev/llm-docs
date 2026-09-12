> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/currentpath](https://developer.apple.com/documentation/networkextension/nwudpsession/currentpath)

# currentPath (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current evaluated path for the session’s [resolvedEndpoint](resolvedendpoint.md) property.

> Use the [nw_connection_copy_current_path(\_:)](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var currentPath: NWPath? { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to watch for changes to this property. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Getting session properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this session was created.

# currentPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current evaluated path for the session’s [resolvedEndpoint](resolvedendpoint.md) property.

> Use the [nw_connection_copy_current_path](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NWPath * currentPath;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to watch for changes to this property. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Getting session properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this session was created.
