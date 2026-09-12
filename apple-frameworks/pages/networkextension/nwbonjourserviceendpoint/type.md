> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwbonjourserviceendpoint/type](https://developer.apple.com/documentation/networkextension/nwbonjourserviceendpoint/type)

# type (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s Bonjour service type.

> Use the [nw_endpoint_get_bonjour_service_type(\_:)](../../network/nw_endpoint_get_bonjour_service_type%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var type: String { get }
```

<a id="discussion"></a>

## Discussion

For example, the service type could be `"_music._tcp"`.

## See Also

### Getting endpoint properties

- [name](name.md): Deprecated. The endpoint’s Bonjour service name.
- [domain](domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.

# type (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The endpoint’s Bonjour service type.

> Use the [nw_endpoint_get_bonjour_service_type](../../network/nw_endpoint_get_bonjour_service_type%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * type;
```

<a id="discussion"></a>

## Discussion

For example, the service type could be `"_music._tcp"`.

## See Also

### Getting endpoint properties

- [name](name.md): Deprecated. The endpoint’s Bonjour service name.
- [domain](domain.md): Deprecated. The endpoint’s Bonjour service domain, such as `"local"`.
