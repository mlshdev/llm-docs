> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwhostendpoint/port](https://developer.apple.com/documentation/networkextension/nwhostendpoint/port)

# port (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s port, represented as a string.

> Use the [nw_endpoint_get_port(\_:)](../../network/nw_endpoint_get_port%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var port: String { get }
```

<a id="Discussion"></a>

## Discussion

Since the port is represented as a string, it is always represented in host byte order. If converting between byte fields and strings, make sure to use host byte ordering.

## See Also

### Getting endpoint properties

- [hostname](hostname.md): Deprecated. The endpoint’s hostname.

# port (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s port, represented as a string.

> Use the [nw_endpoint_get_port](../../network/nw_endpoint_get_port%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * port;
```

<a id="Discussion"></a>

## Discussion

Since the port is represented as a string, it is always represented in host byte order. If converting between byte fields and strings, make sure to use host byte ordering.

## See Also

### Getting endpoint properties

- [hostname](hostname.md): Deprecated. The endpoint’s hostname.
