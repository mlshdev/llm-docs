> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwhostendpoint/hostname](https://developer.apple.com/documentation/networkextension/nwhostendpoint/hostname)

# hostname (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s hostname.

> Use the [nw_endpoint_get_hostname(\_:)](../../network/nw_endpoint_get_hostname%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var hostname: String { get }
```

## See Also

### Getting endpoint properties

- [port](port.md): Deprecated. The endpoint’s port, represented as a string.

# hostname (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s hostname.

> Use the [nw_endpoint_get_hostname](../../network/nw_endpoint_get_hostname%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * hostname;
```

## See Also

### Getting endpoint properties

- [port](port.md): Deprecated. The endpoint’s port, represented as a string.
