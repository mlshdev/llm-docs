> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwbonjourserviceendpoint/name](https://developer.apple.com/documentation/networkextension/nwbonjourserviceendpoint/name)

# name (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s Bonjour service name.

> Use the [nw_endpoint_get_bonjour_service_name(\_:)](../../network/nw_endpoint_get_bonjour_service_name%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var name: String { get }
```

## See Also

### Getting endpoint properties

- [type](type.md): Deprecated. The endpoint’s Bonjour service type.
- [domain](domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.

# name (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s Bonjour service name.

> Use the [nw_endpoint_get_bonjour_service_name](../../network/nw_endpoint_get_bonjour_service_name%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * name;
```

## See Also

### Getting endpoint properties

- [type](type.md): Deprecated. The endpoint’s Bonjour service type.
- [domain](domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.
